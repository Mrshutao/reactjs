import React,{Component} from 'react';
import {Panel,FormGroup,FormControl,HelpBlock,ControlLabel,Button,Link,
Row,Col,} from "react-bootstrap";


export default class addPerson extends Component {
	constructor(props){
		super(props);
		this.state={
			value:""
		}

	}


	render(){

		return(
	       <div>
			    <Panel header="新增用户">

						 <form>
								<ControlLabel>学号</ControlLabel>
								<FormGroup controlId="formBasicText">
									<FormControl value={this.state.value} placeholder="请输入学号" onChange={(e)=>this.handleChange(e)}/>
									<HelpBlock>{this.state.value}</HelpBlock>
								</FormGroup>

								<ControlLabel>姓名</ControlLabel>
								<FormGroup controlId="formBasicText">
									<FormControl value={this.state.value} placeholder="请输入姓名" onChange={(e)=>this.handleChange(e)}/>
									<HelpBlock>{this.state.value}</HelpBlock>
								</FormGroup>

								<ControlLabel>语文</ControlLabel>
								<FormGroup controlId="formBasicText">
									<FormControl value={this.state.value} placeholder="请输入语文分数" onChange={(e)=>this.handleChange(e)}/>
									<HelpBlock>{this.state.value}</HelpBlock>
								</FormGroup>

								<ControlLabel>数学</ControlLabel>
								<FormGroup controlId="formBasicText">
									<FormControl value={this.state.value} placeholder="请输入数学分数" onChange={(e)=>this.handleChange(e)}/>
									<HelpBlock>{this.state.value}</HelpBlock>
								</FormGroup>

								<ControlLabel>英语</ControlLabel>
								<FormGroup controlId="formBasicText">
									<FormControl value={this.state.value} placeholder="请输入英语分数" onChange={(e)=>this.handleChange(e)}/>
									<HelpBlock>{this.state.value}</HelpBlock>
								</FormGroup>

								<ControlLabel>总分</ControlLabel>
								<FormGroup controlId="formBasicText">
									<FormControl value={this.state.value} placeholder="请输入总分数" onChange={(e)=>this.handleChange(e)}/>
									<HelpBlock>{this.state.value}</HelpBlock>
								</FormGroup>
						 </form>

			    </Panel>

					<div className="contain">

							<Button  bsStyle="primary" bsSize="large">确定</Button>&nbsp;&nbsp;&nbsp;&nbsp;

							<Button  bsStyle="primary" bsSize="large">取消</Button>

					</div>
			 </div>
		)
	}
}
