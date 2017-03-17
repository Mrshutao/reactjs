import React,{Component} from 'react';
import {Panel,FormGroup,FormControl,HelpBlock,ControlLabel,Button,Link,Table,
Row,Col,ButtonToolbar} from "react-bootstrap";
const wellStyles = {margin: '30px 20px'};
import "../css/table.css"
export default class addPerson extends Component {
	constructor(props){
		super(props);
		this.panelTitle=this.props.location.state.title;
		this.state={
			value:""
		}

	}


	render(){

		return(
	       <div style={wellStyles}>
          <Panel header={this.panelTitle}>
						<Table className="left-table">
						<Button bsStyle="primary" onClick={()=>this._addTask()}>打开模态框</Button>
							</Table>
					</Panel>
			  </div>
		)
	}
}
