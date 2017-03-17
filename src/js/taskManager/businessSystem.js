import React,{Component} from 'react';

import {Table,Button,Panel,Pagination,Form,FormGroup,ControlLabel,
	InputGroup,FormControl,Grid,Col,Row,
	ButtonToolbar} from "react-bootstrap"
import { Router,Route,hashHistory,Link,browserHistory} from 'router';
import TaskModal from "./registerModal"


export default class DispatchTask extends Component {
	constructor(props){
		super(props);
		this.testData=[
	    {"id":"BUS-001","userna":"二代支付001","ip":"10.98.1.18","agent":"AGENT-001","systype":"前置系统","charger":"张小东","statue":"运行中"},
			{"id":"BUS-006","userna":"柜面支付006","ip":"10.98.1.18","agent":"AGENT-004","systype":"渠道系统","charger":"张小东","statue":"运行中"},
			{"id":"BUS-008","userna":"二代支付008","ip":"10.98.1.18","agent":"AGENT-003","systype":"前置系统","charger":"张小东","statue":"运行中"},
			{"id":"BUS-004","userna":"VTM支付004","ip":"10.98.1.18","agent":"AGENT-001","systype":"前置系统","charger":"张小东","statue":"运行中"}];
		this.panelTitle=this.props.location.state.title;
		this.state={
			tabel_data:this.testData,
			items:10,
			activePage:1,
			groupid:"0",
			taskna:""
		}

	}

	//添加调度信息
		_addTask(){
			this.TaskModal.open(false,this.add_callback.bind(this))
		}

		add_callback(){

		}
	//查询调度信息
		_queryTask(){
			var data={};
			data.groupid=this.state.groupid;
			data.taskna=this.state.taskna;
			console.log(data)
		}

//停止部署
		_stop(obj){

		}
//编辑调度信息
	_edit(obj){
		this.TaskModal.open(obj,this.edit_callback.bind(this))
	}
	edit_callback(data){

	}
//删除调度信息
	_deleteTask(e){

	}



	//分页查询
		handleSelect(key){
			this.setState({
				activePage:key
			});
		}

	showData(){
		var tempArr;

		if(this.state.tabel_data.length<1){
			return null;
		}else{
			tempArr=this.state.tabel_data.map((value,index)=>{
				return (
					 <tr>
				        <td style={styles.tdCenter}>
						      <input type="checkbox" id="checkbox1" name="checkbox1" value="option1"></input>
								</td>
				        <td style={styles.tdCenter}>{value.id}</td>
				        <td style={styles.tdCenter}>{value.userna}</td>
				        <td style={styles.tdCenter}>{value.ip}</td>
				        <td style={styles.tdCenter}>{value.agent}</td>
				        <td style={styles.tdCenter}>{value.systype}</td>
				        <td style={styles.tdCenter}>{value.charger}</td>
                <td style={styles.tdCenter}>{value.statue}</td>
				      	<td style={styles.tdCenter}>
									  <ButtonToolbar style={styles.tdCenter}>
										  <Button bsStyle="info" bsSize="small" onClick={()=>this._stop(value.id)}>停止</Button>
					      		  <Button bsStyle="primary" bsSize="small" onClick={()=>this._edit(value)}>更新</Button>
										  <Button bsStyle="danger" bsSize="small" onClick={()=>this._deleteTask(value.id)}>删除</Button>
										</ButtonToolbar>
				      	</td>
				      </tr>
				)
			});
			return tempArr;
		}
	}

    render() {
    	var listItems=this.showData();
	    return (
	        <div >
	        	<Panel header={this.panelTitle}>
						<Table className="left-table">

							<tr>
							<td><ControlLabel>系统ID</ControlLabel></td>
							<td><FormControl type="text" placeholder="请输入系统ID" /></td>
							<td><ControlLabel>系统名称</ControlLabel></td>
							<td><FormControl type="text" placeholder="请输入系统名称" /></td>
							<td><ControlLabel>IP地址</ControlLabel></td>
							<td><FormControl type="text" placeholder="请输入IP地址" /></td>
							<td>
							<Button bsStyle="primary" onClick={()=>this._addTask()}>新增</Button>
              </td>
							</tr>

							<tr>
							<td><ControlLabel>设备代理ID</ControlLabel></td>
							<td><FormControl type="text" placeholder="请输入设备代理ID" /></td>
							<td><ControlLabel>设备类型</ControlLabel></td>
							<td>
							<FormControl  onChange={(e)=>{this.setState({groupid:e.target.value})}} componentClass="select">
								<option value="0">全部</option>
								<option value="1">前置系统</option>
								<option value="2">渠道系统</option>
							</FormControl>
							</td>
							<td><ControlLabel>运行状态</ControlLabel></td>
							<td>
							<FormControl  onChange={(e)=>{this.setState({groupid:e.target.value})}} componentClass="select">
								<option value="0">全部</option>
								<option value="1">运行中</option>
								<option value="2">部署中</option>
							</FormControl>
							</td>
							<td>
							<Button bsStyle="primary">查询</Button>
              </td>

							</tr>
					</Table>



					<div style={{height:25}}/>
			     	<Table responsive bordered>
					    <thead>
					      	<tr className="success">
                      <th>&nbsp;</th>
										<th>系统ID</th>
						        <th>系统名称</th>
						        <th>IP地址</th>
						        <th>设备代理ID</th>
						        <th>系统类型</th>
						        <th>负责人</th>
						        <th>运行状态</th>
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
			        items={this.state.items}
			        maxButtons={4}
			        activePage={this.state.activePage}
			        onSelect={(key)=>this.handleSelect(key)}  />
           </div>
			  	</Panel>

				<div>
					<TaskModal ref={(e)=>this.TaskModal=e}
					  	warnTitle="业务系统注册" />
				</div>

			</div>
	    );
    }
}
var styles={
	tdCenter:{
		verticalAlign:"middle",
		marginRight:5
	}
}
