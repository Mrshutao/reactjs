import React,{Component} from 'react';
import Utils from "../Utils/Utils"
import {Modal,Button,Grid,Row,Col,FormGroup,
	ControlLabel,FormControl,Form,OverlayTrigger,
	InputGroup,DropdownButton,MenuItem} from "react-bootstrap";
export default class DeployModal extends Component {
	constructor(props){
		super(props);
		this.state={
			visible:false,
			addrType:"文件夹",
			taskna:"",
			Cron:"",
			describe:"",
			config:"",
			projectAddr:"",
			callAnt:"1"
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
			taskna:"",
			Cron:"",
			describe:"",
			config:"",
			projectAddr:"",
			callAnt:"1"
		})
	}

	evalueteForm(data){
		
	}

	_handle(){
		if(this.state.taskna==""){
			alert("任务名不能为空!");
			return false
		}else if(this.state.describe==""){
			alert("请简单描述!")
			return false
		}else if(this.state.projectAddr==""){
			alert("请输入源码地址!")
			return false
		}else if(this.state.config==""){
			alert("请输入部署配置!")
			return false
		}else if(this.state.Cron==""){
			alert("Cron不能为空!");
			return false
		}else{
			var data={};
			this.callback(data);
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
											<Col componentClass={ControlLabel} sm={3}>
												任务名：
											</Col>
											<Col sm={8}>
												<FormControl type="text" value={this.state.taskna} onChange={(e)=>{this.setState({taskna:e.target.value})}} placeholder="请输入任务名" />												
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
												源码获取：
											</Col>
											<Col sm={8}>
												<InputGroup>
													
													<FormControl type="text" value={this.state.projectAddr} onChange={(e)=>{this.setState({projectAddr:e.target.value})}}  placeholder="请输入源码地址" />
											 		<DropdownButton
											 			componentClass={InputGroup.Button}
											 			id="input-dropdown-addon"
											          	title={this.state.addrType}>
											          		<MenuItem eventKey="文件夹" onSelect={()=>this.setState({addrType:"文件夹"})}>文件夹</MenuItem>
											          		<MenuItem eventKey="git" onSelect={()=>this.setState({addrType:"git地址"})}>git地址</MenuItem>
											        </DropdownButton>
											 	</InputGroup>									
											</Col>
										</FormGroup>
									</Col>

									<Col sm={6}>
										<FormGroup >
											<Col componentClass={ControlLabel} sm={3}>
												编译处理：
											</Col>
											<Col sm={8}>
												<FormControl disabled={true} onChange={(e)=>{this.setState({callAnt:e.target.value})}} value={this.state.callAnt} componentClass="select">
											        <option value="1">调用ant</option>
											    </FormControl>	
											</Col>
										</FormGroup>
									</Col>
								</Row>

								<Row className="show-grid">
					          		<Col sm={6}>
										<FormGroup >
											<Col componentClass={ControlLabel} sm={3}>
												部署配置：
											</Col>
											<Col sm={8}>
												<FormControl type="text" value={this.state.config} onChange={(e)=>{this.setState({config:e.target.value})}} placeholder="ip地址+端口号+'#'+bpl" />
																					
											</Col>
											
										</FormGroup>
									</Col>
									<Col sm={6}>
										<FormGroup >
											<Col componentClass={ControlLabel} sm={3}>
												自动触发：
											</Col>
											<Col sm={8}>
												<FormControl type="text" value={this.state.Cron} onChange={(e)=>{this.setState({Cron:e.target.value})}} placeholder="请输入Cron表达式" />										
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

