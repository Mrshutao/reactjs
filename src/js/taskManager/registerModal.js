import React,{Component} from 'react';
import Utils from "../Utils/Utils"
import {Modal,Button,Grid,Row,Col,FormGroup,ControlLabel,FormControl,Form,OverlayTrigger,Tooltip} from "react-bootstrap";
export default class registerModal extends Component {
	constructor(props){
		super(props);
		this.state={
			visible:false,
			group:"0",
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
			group:"0",
			taskna:"",
			Cron:"",
			describe:"",
			handle:"",
			manager:"",
			email:"",
			threshold:""
		})
	}

	evalueteForm(data){

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
				          <Modal.Title componentClass="h4">{this.props.warnTitle}</Modal.Title>
				        </Modal.Header>
				        <Form horizontal>
				        	<Modal.Body>

				          		<Row className="show-grid">
					          		<Col sm={6}>
										<FormGroup >
											<Col componentClass={ControlLabel} sm={4}>
												系统ID
											</Col>
											<Col sm={8}>
											<FormControl type="text" value={this.state.Cron} onChange={(e)=>{this.setState({Cron:e.target.value})}} placeholder="请输入系统ID" />
											</Col>
										</FormGroup>
									</Col>
									<Col sm={6}>
										<FormGroup >
											<Col componentClass={ControlLabel} sm={4}>
												系统名称
											</Col>
											<Col sm={8}>
												<FormControl type="text" value={this.state.taskna} onChange={(e)=>{this.setState({taskna:e.target.value})}} placeholder="请输入系统名称" />
											</Col>
										</FormGroup>
									</Col>
								</Row>

								<Row className="show-grid">
					          		<Col sm={6}>
										<FormGroup >
											<Col componentClass={ControlLabel} sm={4}>
												系统类型
											</Col>
											<Col sm={8}>
											<FormControl onChange={(e)=>{this.setState({group:e.target.value})}} value={this.state.group} componentClass="select">
														<option value="0">默认</option>
														<option value="1">核心</option>
														<option value="2">渠道</option>
												</FormControl>
											</Col>
										</FormGroup>
									</Col>
									<Col sm={6}>
										<FormGroup >
											<Col componentClass={ControlLabel} sm={4}>
												负责人
											</Col>
											<Col sm={8}>
												<FormControl type="text" value={this.state.describe} onChange={(e)=>{this.setState({describe:e.target.value})}}  placeholder="请输入负责人" />
											</Col>
										</FormGroup>
									</Col>
								</Row>

								<Row className="show-grid">
					          		<Col sm={6}>
										<FormGroup >
											<Col componentClass={ControlLabel} sm={4}>
												IP地址
											</Col>
											<Col sm={8}>
												<FormControl type="text" value={this.state.handle} onChange={(e)=>{this.setState({handle:e.target.value})}} placeholder="请输入IP地址" />

											</Col>

										</FormGroup>
									</Col>
									<Col sm={6}>
										<FormGroup >
											<Col componentClass={ControlLabel} sm={4}>
												设备代理ID
											</Col>
											<Col sm={8}>
												<FormControl type="text" value={this.state.manager} onChange={(e)=>{this.setState({manager:e.target.value})}} placeholder="请输入设备代理ID" />
											</Col>
										</FormGroup>
									</Col>
								</Row>

								<Row className="show-grid">
					          		<Col sm={6}>
										<FormGroup  validationState={this.getValidationState_email()}>
											<Col  componentClass={ControlLabel} sm={4}>
												应用部署路径
											</Col>
											<Col sm={8}>
												<FormControl type="email" value={this.state.email} onChange={(e)=>{this.setState({email:e.target.value})}} placeholder="请输入应用部署路径" />
												<FormControl.Feedback />
											</Col>

										</FormGroup>
									</Col>
									<Col sm={6}>
										<FormGroup validationState={this.getValidationState_threshold()}>
											<Col componentClass={ControlLabel} sm={4}>
												配置文件路径
											</Col>
											<Col sm={8}>
												<FormControl type="text" value={this.state.threshold} onChange={(e)=>{this.setState({threshold:e.target.value})}} placeholder="请输入配置文件路径" />
												<FormControl.Feedback />
											</Col>
										</FormGroup>
									</Col>
								</Row>


				        </Modal.Body>
				        <Modal.Footer>
				          <Button onClick={()=>this._setModalVisible(false)}>取消</Button>
				          <Button bsStyle="primary" onClick={()=>this._handle()}>确定</Button>
				        </Modal.Footer>
				    </Form>
	      		</Modal>
			)


	}


}
