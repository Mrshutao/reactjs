import React,{Component} from 'react';

import {Table,Button,Panel,Pagination,Form,FormGroup,
	InputGroup,FormControl,Grid,Col,Row,ControlLabel,
	ButtonToolbar} from "react-bootstrap"
import { Router,Route,hashHistory,Link,browserHistory} from 'react-router';

import DeployModal from "./deployModal"
import HTTPService from '../Utils/HTTPService'
import Page from "../Page"


const HTTP = new HTTPService();
export default class AutoDeploy extends Page {
	constructor(props){
		super(props);
		this.testData=[ {"taskId":"112","taskna":"newjob","lastTime":"2017-04-06 14:22","cosumeTime":"24","state":"1"},
						{"taskId":"112","taskna":"newjob","lastTime":"2017-04-06 14:22","cosumeTime":"24","state":"1"},
						{"taskId":"112","taskna":"newjob","lastTime":"2017-04-06 14:22","cosumeTime":"24","state":"1"},
						{"taskId":"112","taskna":"newjob","lastTime":"2017-04-06 14:22","cosumeTime":"24","state":"1"}];
		this.location=this.props.location;
		this.panelTitle=this.location.state.title;
		this.state={
			tabel_data:this.testData,
			activePage:1,
			taskna:""
		}
		
	}

	componentWillMount(){
		
	}

	componentDidMount(){
	
	}

//编辑调度信息
	_edit(e){
		browserHistory.push({ pathname: '/home/AutoDeploy/DeployHistory', 
			state:{ taskId:e,panelTitle:this.panelTitle} })
	}
	edit_callback(data){
		
	}
//删除调度信息
	_deleteTask(e){
		this.openHandle("删除","确定要删除这条任务吗？",this.delete_callBack.bind(this))
	}

	delete_callBack(){
		this.openLoading()
		
	}
//分页查询
	handleSelect(key){
		this.setState({
			activePage:key
		});
	}
//添加调度信息
	_addTask(){
		this.DeployModal.open(false,this.add_callback.bind(this))
	}

	add_callback(data){
		
		let tranCode = "/save";
		
		let self = this;
		HTTP.commHttp(tranCode,data,function(obj){
			console.log(obj)
			if(obj.code==200){
				
				self.DeployModal._setModalVisible(false)
			}else{
				
			}
		},function(obj){
			
		})
		
	}
//查询调度信息
	_queryTask(){
		var data={};
		data.groupid=this.state.groupid;
		data.taskna=this.state.taskna;
		console.log(data)
	}


	showData(){
		var tempArr;
		
		if(this.state.tabel_data.length<1){
			return null;
		}else{
			tempArr=this.state.tabel_data.map((value,index)=>{
				var State;
				if(value.state=="0"){
					State="失败"
				}else{
					State="正常"
				}
				return (
					 <tr>
				        <td style={styles.tdCenter}>{value.taskna}</td>
				        <td style={styles.tdCenter}>{value.lastTime}</td>
				        <td style={styles.tdCenter}>{value.cosumeTime}</td>
				        <td style={styles.tdCenter}>{State}</td>
				      	<td style={styles.tdCenter}>

					      	<ButtonToolbar>
					      		<Button bsStyle="info" bsSize="small" onClick={()=>this._edit(value.taskId)}>查看</Button>
					      		<Button bsStyle="primary" bsSize="small" onClick={()=>this._edit(value)}>编辑</Button>    
					      		<Button bsStyle="danger" bsSize="small" onClick={()=>this._deleteTask(value.taskId)}>删除</Button>
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
									   
									      	<FormControl componentClass="select">
										        <option value="">全部</option>
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
						        <th>任务名称</th>
						        <th>最近构建时间</th>
						        <th>最近构建耗时</th>
						        <th>最近构建状态</th>
						        <th>操作</th>
					      	</tr>
					    </thead>
					    <tbody>
					      {listItems}
					    </tbody>
			  		</Table>
			  		<div className="Pagination">
				  		<Pagination 
				  			prev 
				  			next 
				  			first 
				  			last 
				  			ellipsis 
				  			boundaryLinks
					        items={3}
					        maxButtons={5}
					        activePage={this.state.activePage}
					        onSelect={(key)=>this.handleSelect(key)} />
					</div>
			  		
			  	</Panel>
			  	
				<div>
					<DeployModal ref={(e)=>this.DeployModal=e} 
					  	warnTitle="新增任务" />
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
