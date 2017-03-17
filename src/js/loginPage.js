import React,{Component} from 'react';
import {Panel,Grid,Button,Row,Col,Navbar,NavItem,Nav,ListGroup,ListGroupItem,Form,
FormControl,
FormGroup,
InputGroup,
FieldGroup,
Checkbox,
ControlLabel
} from "react-bootstrap";
import {Link,browserHistory,router} from 'router';
import HTTPService from './Utils/HTTPService'
import "../css/style.min.css"


export default class LoginPage extends Component {
	constructor(props){
		super(props);

		this.httpService = new HTTPService();
		this.state = {
			username:"",
			password:"",
		}

	}



	render() {

		return(

	   		<div className="container-fluid ">

				<Row>
					<Col sm={12}>
						<Row>
							<div className="login-box">

								<div className="header">
									Login to Proton
								</div>


								<Form horizontal>
									<FormGroup controlId="formHorizontalEmail">
										<Col componentClass={ControlLabel} sm={3}>

											用户名：
										</Col>
										<Col sm={8}>

											<FormControl type="text" placeholder="用户名"
											value={this.state.username} onChange={this.changeUserName.bind(this)}/>
										</Col>
									</FormGroup>

									<FormGroup controlId="formHorizontalPassword">
										<Col componentClass={ControlLabel} sm={3}>
											密码：
										</Col>
										<Col sm={8}>
											<FormControl type="password" placeholder="密码"
											value={this.state.password} onChange={this.changePassword.bind(this)}/>
										</Col>
									</FormGroup>

									<Row>
									<Col sm={10}>
										<Checkbox>记住密码</Checkbox>
									</Col>
									</Row>


									<Row>
										<Col xs={12}>
											<Button
												style={{marginTop:15,marginBottom:15}}
												className="col-xs-12" bsStyle="primary"
												onClick = {()=>this.login()}
												bsSize="large">
												Sign in
											</Button>
										</Col>
									</Row>



								</Form>

								<Link className="pull-left" href="page-login.html#">忘记密码?</Link>
								<Link className="pull-right" href="page-register.html">注册账号</Link>

								<div className="clearfix"></div>
							</div>
						</Row>
					</Col>
				</Row>

			</div>



		)
	}

	changeUserName(e){
		this.setState({
			username:e.target.value
		})
	}

	changePassword(e){
		this.setState({
			password:e.target.value
		})
	}


	login(){
		/*let username = this.state.username;
		let password = this.state.password;
		let tranCode = "/logic";
		let input = {
			username:username,
			password:password
		}
		let self = this;

		this.httpService.commHttp(tranCode,input,function(data){
			console.log("成功")
		},function(data){
			console.log(data)
		});*/

		browserHistory.push({ pathname: '/home', state:{ name:"管理员" } })
	}

}
