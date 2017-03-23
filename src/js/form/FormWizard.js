import React,{Component} from 'react';
import {Row,Col,Button,Panel,ProgressBar,Form,FormGroup,FormControl} from "react-bootstrap";
import {Link} from 'react-router';
import Utils from './../Utils/Utils.js'
import Page from './../Page.js'

export default class FormWizard extends Page {
	constructor(props){
		super(props);
		this.username = this.props.location;
        console.log(this.username)

		this.initData = [
			{
				name:"开始",
				icon:"fa fa-star"
			},
			{
				name:"开卡信息",
				icon:"fa fa-credit-card"
			},
			{
				name:"公司详情",
				icon:"fa fa-building"
			},
			{
				name:"用户协议",
				icon:"fa fa-check"
			}
		]

		this.state = {
			emailValidate:false,
			pwdValidate:false,
			index:1,
		}
	}
	pageView(){
		let content = null;

		//选项卡内容
		if(this.state.index == 1){
			content = (
				<div className="tab-pane active" id="tab11">
					<Form horizontal  role="form" >
						<FormGroup className={this.state.emailValidate?'has-error':''}>
							<label for="email-w1">Email</label>							                    
							<FormControl type="email" value={this.state.userEmail} onChange={(e)=>this.inputEmail(e)} name="email-w1" className="form-control" placeholder="Email address"/>
							<span className="help-block">Please enter your email</span>							                    
						</FormGroup>

						<FormGroup className={this.state.pwdValidate?'has-error':''}>
							<label for="password-w1">Password</label>							                    
							<input type="password" value={this.state.password} onChange={(e)=>this.inputPassword(e)}  name="password-w1" className="form-control" placeholder="Password"/>
							<span className="help-block">Please enter your password</span>	
																	
						</FormGroup>
					</Form>	
				</div>
			)
		} else if(this.state.index == 2){
			content = (
						<div className="tab-panel" id="tab12">
							<Row>

								<Col sm={12}>

									<FormGroup className="has-feedback">
										<label for="name-w1">Name</label>
										<input type="text" className="form-control" id="name-w1" placeholder="Enter your name"/>
										<span className="fa fa-asterisk form-control-feedback"></span>
									</FormGroup>

								</Col>

							</Row>

							<Row>

								<Col sm={12}>

									<FormGroup className="has-feedback">
										<label for="ccnumber-w1">Credit Card Number</label>
										<input type="text" className="form-control" id="ccnumber-w1" placeholder="0000 0000 0000 0000"/>
										<span className="fa fa-asterisk form-control-feedback"></span>
									</FormGroup>

								</Col>

							</Row>

							<div className="row">

								<div className="form-group col-sm-4">
									<label for="ccmonth-w1">Month</label>
									<select className="form-control" id="ccmonth-w1">
										<option>1</option>
										<option>2</option>
										<option>3</option>
										<option>4</option>
										<option>5</option>
										<option>6</option>												
									</select>
								</div>

								<div className="form-group col-sm-4">
									<label for="ccyear-w1">Year</label>
									<select className="form-control" id="ccyear-w1">
										<option>2014</option>
										<option>2015</option>
										<option>2016</option>
										<option>2017</option>
										<option>2018</option>
										<option>2019</option>
										<option>2020</option>
									</select>
								</div>

								<div className="col-sm-4">

									<div className="form-group has-feedback">
										<label for="cvv-w1">CVV/CVC</label>
										<input type="text" className="form-control" id="cvv-w1" placeholder="123"/>
										<span className="fa fa-asterisk form-control-feedback"></span>
									</div>

								</div>

							</div>
						</div>
			)
		}

		let wizardCard = [];

		let currentIndex = this.state.index;
		wizardCard  = this.initData.map((value,index) => {
			index++;
			let activeStyle  =  '';
			if(currentIndex>index){
				activeStyle = 'complete'; {/*完成后样式*/}
			} else if (currentIndex == index){
				activeStyle = "active"; {/*选中样式*/}
			} else {
				activeStyle = '';
			}
			value =  (<li className={activeStyle}>
						<a data-toggle="tab" onClick = {() => this.setOptions(index)}>
							<span className="badge badge-info badge-right">
								<i className={value.icon}></i>
							</span>
							{value.name}
						</a>
					</li>)

			return value;
		})

		let totalLength = this.initData.length;
		let percent = (currentIndex/totalLength) * 100;


		return(

			<Row>
				<Col lg={12} sm={12}>
                   <div className="panel panel-default">
                        <div className="panel-heading">
							<h2><i className="fa fa-tags red"></i><strong>Wizard with validation</strong></h2>
                            <div className="panel-actions">
                                    <Link href="form-elements.html#" className="btn-setting"><i className="fa fa-rotate-right"></i></Link>
                                    <Link href="form-elements.html#" className="btn-minimize"><i className="fa fa-chevron-up"></i></Link>
                                    <Link href="form-elements.html#" className="btn-close"><i className="fa fa-times"></i></Link>
                            </div>
                        </div>

                        <div className="panel-body">
							
							{/*<div id="wizard1" className="wizard-type1">*/}
								{/*<ul className="steps nav nav-pills">
								  	
									{wizardCard}
								</ul>*/}

								<SelectOptions initData = {this.initData} index={this.state.index} setOptions = {this.setOptions.bind(this)}>
															
									<ProgressBar className="w100 progress-bar" bsStyle="success" now={percent} />
									
															
									
									<div className="tab-content">

										{content}
							
									</div>


									<div className="actions">								
										<input type="button" className="btn btn-default button-previous" name="prev" value="Prev"/>
										<input type="button" className="btn btn-success button-next pull-right" onClick={()=>this.nextSelector()} name="next" value="Next"/>
										<input type="button" className="btn btn-primary button-finish pull-right" name="finish" value="Finish"/>
									</div>
								</SelectOptions>	
																	
							{/*</div>*/}

						</div>
                        
                    </div>    
				</Col>
			</Row>
			    
			 
		)
	}

	//y	
	inputEmail(e){
		let email = e.target.value;
		if(Utils.isEmail(email)){
			this.setState({
				emailValidate:false
			})
		}
		this.setState({userEmail:e.target.value})
	}

	inputPassword(e){
		let email = e.target.value;
		if(email){
			this.setState({
				pwdValidate:false
			})
		}
		this.setState({password:e.target.value})
	}


	nextSelector(){
		let index = this.state.index;
		let email = this.state.userEmail;
		let password = this.state.password;
		if(!Utils.isEmail(email)){
			this.setState({
				emailValidate:true
			})
			return;
		}

		if(!password){
			this.setState({
				pwdValidate:true
			})

			return;
		}

		index++;

		this.setOptions(index);

	}

	setOptions(index){

		this.setState({
			index:index
		})
	}
	

}



class SelectOptions extends Component {
	constructor(props) {
		super(props);
		this.initData = this.props.initData;
		this.setOptions = this.props.setOptions;
		this.state = {
			index : 1
		}
	}
	
	render() {

		let wizardCard = [];

		let currentIndex = this.props.index;
		wizardCard  = this.initData.map((value,index) => {
			index++;
			let activeStyle  =  '';
			if(currentIndex>index){
				activeStyle = 'complete'; {/*完成后样式*/}
			} else if (currentIndex == index){
				activeStyle = "active"; {/*选中样式*/}
			} else {
				activeStyle = '';
			}
			value =  (<li className={activeStyle}>
						<a data-toggle="tab" onClick = {() => this.setOptions(index)}>
							<span className="badge badge-info badge-right">
								<i className={value.icon}></i>
							</span>
							{value.name}
						</a>
					</li>)

			return value;
		})

		return (
			<div className="wizard-type">
				<ul className="steps nav nav-pills">
					
					{wizardCard}
	
				</ul>
				{this.props.children}
			</div>
		);
	}
}






