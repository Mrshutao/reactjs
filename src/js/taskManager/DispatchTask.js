import React,{Component} from 'react';

import {Table,Button,Panel,Form,FormGroup,
	InputGroup,FormControl,Grid,Col,Row,ControlLabel,
	ButtonToolbar} from "react-bootstrap"
import { Router,Route,hashHistory,Link,browserHistory} from 'react-router';
import TaskModal from "./taskModal"
import PagiNation from "../common/PagiNation"
import HTTPService from '../Utils/HTTPService'
import Page from "../Page"

const HTTP = new HTTPService();
export default class DispatchTask extends Page {
	constructor(props){
		super(props);
		this.location=this.props.location;
		this.panelTitle=this.location.state.title;
		this.pgnum=1;
		this.state={
			tabel_data:[],
			activePage:1,
			groupid:"DEFAULT",
			taskna:"",
			recordsTotal:0
		}
		
	}

	componentWillMount(){
		
	}

	componentDidMount(){
		this._queryTask()
	}
//跳转第几页后查询
	setPage(key){
		this.pgnum=key;
		this._queryTask();
	}
//执行一次
	_trigger(a,b){
		this.openHandle("执行","确定要执行一次吗？",this.trigger_callBack.bind(this,a,b))
	}

	trigger_callBack(a,b){
		let tranCode = "Job/trigger";
		let input={
			"jobGroup":a,
			"jobName":b
		}
		let self = this;
		this.openLoading()
		HTTP.commHttp(tranCode,input,function(obj){
			
			self.openAlert("执行成功！")
			self._queryTask();

		},function(e){
			self.openAlert("执行失败！"+e)
		},function(){
			self.closeLoading();
		})
	}
//暂停任务
	_stop(a,b){
		this.openHandle("暂停","确定要暂停任务吗？",this.stop_callBack.bind(this,a,b))
	}

	stop_callBack(a,b){
		let tranCode = "Job/pause";
		let input={
			"jobGroup":a,
			"jobName":b
		}
		let self = this;
		this.openLoading()
		HTTP.commHttp(tranCode,input,function(obj){
			
			self.openAlert("任务已暂停！")
			self._queryTask();

		},function(e){
			self.openAlert("操作失败！"+e)
		},function(){
			self.closeLoading();
		})
	}

//编辑调度信息
	_edit(obj){
		this.TaskModal.open(obj,this.edit_callback.bind(this))
	}
//编辑调度信息回调函数
	edit_callback(data){
		//console.log(data);
		let tranCode = "Job/reschedule";
		let input=data;
		let self = this;
		this.openLoading()
		HTTP.commHttp(tranCode,input,function(obj){
			//console.log(obj)
			self.TaskModal._setModalVisible(false);
			self._queryTask();
			self.openAlert("修改成功！")			
		},function(obj){
			self.openAlert("修改失败!"+obj)
		},function(){
			self.closeLoading();
		})
	}
//删除调度信息
	_deleteTask(a,b){
		this.openHandle("删除","确定要删除这条任务吗？",this.delete_callBack.bind(this,a,b))
	}

	delete_callBack(a,b){

		let tranCode = "Job/remove";
		let input={
			"jobGroup":a,
			"jobName":b
		}
		let self = this;
		this.openLoading()
		HTTP.commHttp(tranCode,input,function(obj){
			
			self.openAlert("删除成功！")
			self._queryTask();

		},function(){
			self.openAlert("删除失败，请重试！")
		},function(){
			self.closeLoading();
		})
	}

//添加调度信息
	_addTask(){
		this.TaskModal.open(false,this.add_callback.bind(this))
	}

	add_callback(data){
		
		let tranCode = "Job/add";
		var input=data;
		let self = this;
		this.openLoading();
		HTTP.commHttp(tranCode,input,function(obj){
			
			self.TaskModal._setModalVisible(false);
			self._queryTask();
			self.openAlert("添加成功！")

		},function(obj){
			self.openAlert("新增失败！"+obj)
		},function(){
			self.closeLoading();
		})
	}
//查询调度信息
	_queryTask(){
		let self = this;
		let tranCode="Job/pageList"
		var input={
			"pgnum":this.pgnum.toString(),
			"jobGroup":this.state.groupid,
			"jobName":this.state.taskna,
		}
		this.openLoading();
		HTTP.commHttp(tranCode,input,function(obj){

				self.setState({
					tabel_data:obj.data,
					recordsTotal:obj.recordsTotal
				})
			
		},function(obj){
			self.openAlert("加载失败!"+obj)	
		},function(){
			self.closeLoading()
		})
		
	}

//渲染列表数据
	showData(){
		var tempArr;
		var self=this;
		if(this.state.tabel_data.length<1){
			return  <tr>
				        <td colSpan="9" style={{height:300,verticalAlign:"middle"}}>暂无记录</td>
				    </tr>
		}else{
			tempArr=this.state.tabel_data.map((value,index)=>{
				var status;
				if(value.jobStatus=="NORMAL"){
					status="正常"
				}else{
					status="异常"
				}
				var num=(self.pgnum-1)*10+index+1;
				return (
					 <tr>
					 	<td style={styles.tdCenter}>{num}</td>
				        <td style={styles.tdCenter}>{value.jobName}</td>
				        <td style={styles.tdCenter}>{value.jobCron}</td>
				        <td style={styles.tdCenter}>{value.author}</td>
				        <td style={styles.tdCenter}>{value.lastsucesstime}</td>
				        <td style={styles.tdCenter}>{value.lastExcuteErrorTime}</td>
				        <td style={styles.tdCenter}>{value.nextExcuteTime}</td>
				        <td style={styles.tdCenter}>{status}</td>
				      	<td style={styles.tdCenter}>
				      		<ButtonToolbar>
					      		<Button bsStyle="warning" bsSize="small" onClick={()=>this._trigger(value.jobGroup,value.jobName)}>执行</Button>    
					      		<Button bsStyle="info" bsSize="small" onClick={()=>this._stop(value.jobGroup,value.jobName)}>暂停</Button>
					      		<Button bsStyle="primary" bsSize="small" onClick={()=>this._edit(value)}>查看</Button>    
					      		<Button bsStyle="danger" bsSize="small" onClick={()=>this._deleteTask(value.jobGroup,value.jobName)}>删除</Button>
				      		</ButtonToolbar>
				      	</td>
				      </tr>
				)
			});
			return tempArr;
		}
	}

    pageView() {
    	var listItems=this.showData();
	    return (
	        <div >

	        	<Panel header={this.panelTitle}>
	        		<Form horizontal>
	        		
        				<Row className="show-grid">
        					<Col sm={4}>
        						<FormGroup>
							      	<Col componentClass={ControlLabel} sm={5}>
											任务组：
									</Col>
									<Col sm={7}>
								   
								      	<FormControl onChange={(e)=>{this.setState({groupid:e.target.value})}} componentClass="select" >
									        <option value="DEFAULT">默认</option>
									        <option value="WAIMAI">核心</option>
									        <option value="MOVIE">渠道</option>
							      		</FormControl>
							      	</Col>
								</FormGroup>
							    	
							</Col>
							<Col  sm={4}>
								<FormGroup>
									<Col componentClass={ControlLabel} sm={5}>
											任务名：
									</Col>
									<Col sm={7}>
								      	<FormControl onChange={(e)=>{this.setState({taskna:e.target.value})}} value={this.state.taskna} type="text" />
							      	</Col>
								    
							    </FormGroup>
							</Col>
							<Col  sm={4}>
								<ButtonToolbar>
								    <Button bsStyle="primary"  onClick={()=>this._queryTask()}>
								      查     询
								    </Button>

								    <Button bsStyle="primary" onClick={()=>this._addTask()}>
								      新     增
								    </Button>
								</ButtonToolbar>
							</Col>
					    </Row>
						
					</Form>
					<div style={{height:15}}/>
			     	<Table responsive bordered>
					    <thead>
					      	<tr className="success">
					      		<th>序号</th>
						        <th>任务名</th>
						        <th>Cron</th>
						        <th>负责人</th>
						        <th>上次成功执行时间</th>
						        <th>上次异常执行时间</th>
						        <th>下次执行时间</th>
						        <th>状态</th>
						        <th>操作</th>
					      	</tr>
					    </thead>
					    <tbody>
					      {listItems}
					    </tbody>
			  		</Table>
			  	
			  		<PagiNation ref={(ref)=>this.PagiNation=ref}
				        items={this.state.recordsTotal}
				        handle={(key)=>this.setPage(key)} />
				
			  		
			  	</Panel>
			  	
				<div>
					<TaskModal ref={(e)=>this.TaskModal=e}/>
				</div>
				
			</div>
	    );
    }
}
var styles={
	tdCenter:{
		verticalAlign:"middle"
	}
}
