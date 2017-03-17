import React,{Component} from 'react';
import {Panel,FormGroup,FormControl,HelpBlock} from "react-bootstrap";
export default class editPage extends Component {

	constructor(props){
		super(props);

		this.state={
			value:this.props.params.xuehao
		}
		
	}

	componentDidMount(){
		
	}

	render(){
		
		return(
			<div>
			    <Panel header="Panel heading without title">
			      编辑
			       <form>
				        <FormGroup
				          controlId="formBasicText">
				         
				          <FormControl
				            type="text"
				            value={this.state.value}
				            placeholder="Enter text"
				            onChange={(e)=>this.handleChange(e)}/>
				         
				          <HelpBlock>{this.state.value}</HelpBlock>
				        </FormGroup>
				      </form>
			    </Panel>
			    
			 </div>
		)
	}
	

}
