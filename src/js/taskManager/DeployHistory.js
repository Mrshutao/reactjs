import React,{Component} from 'react';

import {Table,Button,Panel,Row,Col} from "react-bootstrap"
import { Router,Route,hashHistory,Link,browserHistory} from 'router';
import { createHistory } from 'history'
const history=createHistory();
export default class DeployHistory extends Component{
	constructor(props){
		super(props);
		this.testData=[ {"taskId":"112","lastTime":"2017-04-06 14:22","cosumeTime":"24","state":"1"},
						{"taskId":"112","lastTime":"2017-04-06 14:22","cosumeTime":"24","state":"1"},
						{"taskId":"112","lastTime":"2017-04-06 14:22","cosumeTime":"24","state":"1"},
						{"taskId":"112","lastTime":"2017-04-06 14:22","cosumeTime":"24","state":"1"}];
		this.state={
			tabel_data:this.testData
		};
		this.panelTitle=this.props.location.state.panelTitle;
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
				        <td style={styles.tdCenter}>{value.taskId}</td>
				        <td style={styles.tdCenter}>{value.lastTime}</td>
				        <td style={styles.tdCenter}>{value.cosumeTime}</td>
				        <td style={styles.tdCenter}>{State}</td>
				      </tr>
				)
			});
			return tempArr;
		}
	}

	_back(){
		history.goBack()
	}

    render() {
    	var listItems=this.showData();
	    return (
	       <div>

			 	<Panel header={this.panelTitle}>

			 		<Row className="show-grid">
			 			<Col sm={6}>
			 				构建历史
			 			</Col>

			 			<Col sm={6}>
			 				<Button bsStyle="default" onClick={()=>this._back()}>返回</Button>
			 			</Col>
			 		</Row>
				    <Table bordered>
					    <thead>
					      <tr className="success">
					        <th>ID</th>
					        <th>构建时间</th>
					        <th>构建耗时</th>
					        <th>构建状态</th>
					      </tr>
					    </thead>
					    <tbody>
					      {listItems}
					    </tbody>
			  		</Table>
       			</Panel>

			</div>
	    );
    }
}

var styles={
	box:{
		textAlign:"center",
	}

}
