import React,{Component} from 'react';
import Utils from "../Utils/Utils"
import {Modal,Button,Grid,Row,Col,FormGroup,ControlLabel,FormControl,Form,OverlayTrigger,Tooltip} from "react-bootstrap";
export default class taskModal extends Component {
	constructor(props){
		super(props);
		this.state={
			visible:false,
			flag:false,
			group:"DEFAULT",
			taskna:"",
			Cron:"",
			describe:"",
			handle:"",
			manager:"",
			email:"",
			threshold:""
		}
	}
	componentDidMount(){

	}
	_setModalVisible(Visible){
		this.setState({
			visible:Visible
		})
	}
	open(type,callback){
		this._setModalVisible(true);
    	this.callback = callback;
    	if(type == false){
    		this.clearForm()
    	}else{
    		this.evalueteForm(type)
    	}
	}
//清空表单
	clearForm(){
		this.setState({
			title:"新增任务调度信息",
			handleBtn:"添加",
			flag:false,
			group:"DEFAULT",
			taskna:"",
			Cron:"",
			describe:"",
			handle:"",
			manager:"",
			email:"",
			threshold:""
		})
	}
//赋值表单
	evalueteForm(data){
		this.setState({
			title:"查看任务调度信息",
			handleBtn:"修改",
			flag:true,
			group:data.jobGroup,
			taskna:data.jobName,
			Cron:data.jobCron,
			describe:data.jobDesc,
			handle:data.executorParam,
			manager:data.author,
			email:data.alarmEmail,
			threshold:data.alarmThreshold
		})
	}

	_handle(){
		if(this.state.taskna==""){
			alert("任务名不能为空!");
			return false
		}else if(this.state.Cron==""){
			alert("Cron不能为空!");
			return false
		}else if(this.state.describe==""){
			alert("请简单描述!")
			return false
		}else if(this.state.handle==""){
			alert("请输入执行参数!")
			return false
		}else if(this.state.manager==""){
			alert("请输入负责人!")
			return false
		}else if(this.state.email==""){
			alert("请输入报警邮件!")
			return false
		}else if(Utils.checkEmail(this.state.email)==false){
			alert("请输入合法邮件!")
			return false
		}else if(this.state.threshold==""){
			alert("请输入阀值！")
			return false
		}else if(/^[0-9]*$/.test(this.state.threshold)==false){
			alert("阀值请输入数字格式！")
			return false
		}else{
			var data={};
			data.jobGroup=this.state.group;
			data.jobName=this.state.taskna;
			data.jobCron=this.state.Cron;
			data.jobDesc=this.state.describe;
			data.executorParam=this.state.handle;
			data.author=this.state.manager;
			data.alarmEmail=this.state.email;
			data.alarmThreshold=this.state.threshold;
			this.callback(data);
		}
	
	}

	getValidationState_email(){
		var str=this.state.email;
		
		if(str==""){
			return null
		}else if(Utils.checkEmail(str)){
			return "success"
		}else{
			return "error"
		}	
	}

	getValidationState_threshold(){
		var str=this.state.threshold;
		var reg=/^[0-9]*$/;
		if(str==""){
			return null
		}else if(reg.test(str)){
			return "success"
		}else{
			return "error"
		}	
	}

	render(){
			return(
				<Modal bsSize="large" animation={false}
				  	onHide={()=>this._setModalVisible(false)}
				    dialogClassName="modal_style"
				    show={this.state.visible}>
				        <Modal.Header closeButton>
				          <Modal.Title componentClass="h4">{this.state.title}</Modal.Title>
				        </Modal.Header>
				        <Form horizontal>
				        	<Modal.Body>
				          	
				          		<Row className="show-grid">
					          		<Col sm={6}>
										<FormGroup >
											<Col componentClass={ControlLabel} sm={3}>
												任务组：
											</Col>
											<Col sm={8}>
												<FormControl onChange={(e)=>{this.setState({group:e.target.value})}} value={this.state.group} componentClass="select" disabled={this.state.flag}>
											        <option value="DEFAULT">默认</option>
											        <option value="WAIMAI">核心</option>
											        <option value="MOVIE">渠道</option>
											    </FormControl>	
																				
											</Col>
										</FormGroup>
									</Col>
									<Col sm={6}>
										<FormGroup >
											<Col componentClass={ControlLabel} sm={3}>
												任务名：
											</Col>
											<Col sm={8}>
												<FormControl type="text" value={this.state.taskna} onChange={(e)=>{this.setState({taskna:e.target.value})}} placeholder="请输入任务名" disabled={this.state.flag} />												
											</Col>
										</FormGroup>
									</Col>
								</Row>

								<Row className="show-grid">
					          		<Col sm={6}>
										<FormGroup >
											<Col componentClass={ControlLabel} sm={3}>
												Cron：
											</Col>
											<Col sm={8}>
												<FormControl type="text" value={this.state.Cron} onChange={(e)=>{this.setState({Cron:e.target.value})}} placeholder="请输入Cron" />										
											</Col>
										</FormGroup>
									</Col>
									<Col sm={6}>
										<FormGroup >
											<Col componentClass={ControlLabel} sm={3}>
												描述：
											</Col>
											<Col sm={8}>
												<FormControl type="text" value={this.state.describe} onChange={(e)=>{this.setState({describe:e.target.value})}}  placeholder="请简单描述" />										
											</Col>
										</FormGroup>
									</Col>
								</Row>

								<Row className="show-grid">
					          		<Col sm={6}>
										<FormGroup >
											<Col componentClass={ControlLabel} sm={3}>
												执行参数：
											</Col>
											<Col sm={8}>
												<FormControl type="text" value={this.state.handle} onChange={(e)=>{this.setState({handle:e.target.value})}} placeholder="ip地址+端口号+'#'+bpl" />
																					
											</Col>
											
										</FormGroup>
									</Col>
									<Col sm={6}>
										<FormGroup >
											<Col componentClass={ControlLabel} sm={3}>
												负责人：
											</Col>
											<Col sm={8}>
												<FormControl type="text" value={this.state.manager} onChange={(e)=>{this.setState({manager:e.target.value})}} placeholder="请输入负责人" />										
											</Col>
										</FormGroup>
									</Col>
								</Row>

								<Row className="show-grid">
					          		<Col sm={6}>
										<FormGroup  validationState={this.getValidationState_email()}>
											<Col  componentClass={ControlLabel} sm={3}>
												报警邮件：
											</Col>
											<Col sm={8}>
												<FormControl type="email" value={this.state.email} onChange={(e)=>{this.setState({email:e.target.value})}} placeholder="多个报警邮件以逗号分隔" />										
												<FormControl.Feedback />
											</Col>

										</FormGroup>
									</Col>
									<Col sm={6}>
										<FormGroup validationState={this.getValidationState_threshold()}>
											<Col componentClass={ControlLabel} sm={3}>
												报警阀值：
											</Col>
											<Col sm={8}>
												<FormControl type="text" value={this.state.threshold} onChange={(e)=>{this.setState({threshold:e.target.value})}} placeholder="请输入报警阀值" />										
												<FormControl.Feedback />
											</Col>
										</FormGroup>
									</Col>
								</Row>
							
				          		
				        </Modal.Body>
				        <Modal.Footer>
				          <Button onClick={()=>this._setModalVisible(false)}>取消</Button>
				          <Button bsStyle="primary" onClick={()=>this._handle()}>{this.state.handleBtn}</Button>
				        </Modal.Footer>
				    </Form>
	      		</Modal>
			)
		
		
	}
	

}

