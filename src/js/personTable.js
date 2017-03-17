import React,{Component} from 'react';

import {Table,Button,Panel} from "react-bootstrap"
import { Router,Route,hashHistory,Link,browserHistory} from 'router';

export default class tabel extends Component{
	constructor(props){
		super(props);
		this.testData=[ {"xuehao":"1101","userna":"黄","yuwen":"78","shuxue":"88","english":"99","total":"245"},
						{"xuehao":"1102","userna":"邓","yuwen":"78","shuxue":"88","english":"99","total":"245"},
						{"xuehao":"1103","userna":"贺","yuwen":"78","shuxue":"88","english":"99","total":"245"},
						{"xuehao":"1104","userna":"谭","yuwen":"78","shuxue":"88","english":"99","total":"245"}];
		this.state={
			tabel_data:this.testData
		};
		this.panelTitle="管理用户";
	}

	addPerson(){

	}


	_edit(e){
		var path=`edit/${e}`;
		browserHistory.push(path);
	}


	showData(){
		var tempArr;

		if(this.state.tabel_data.length<1){
			return null;
		}else{
			tempArr=this.state.tabel_data.map((value,index)=>{
				return (
					 <tr>
				        <td>{index+1}</td>
				        <td>{value.xuehao}</td>
				        <td>{value.userna}</td>
				        <td>{value.yuwen}</td>
				        <td>{value.shuxue}</td>
				        <td>{value.english}</td>
				        <td>{value.total}</td>
				      	<td>
								<Button bsStyle="success" onClick={()=>this.addPerson()}>
						      <Link to="/addPerson">新增</Link>
								</Button>&nbsp;
						    <Button bsStyle="info" onClick={()=>this._edit(value.xuehao)}>编辑</Button>&nbsp;
						    <Button bsStyle="danger" onClick={()=>this._edit(value.xuehao)}>删除</Button>
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
	       <div>

				 <Panel header={this.panelTitle}>
			    <Table bordered>
			    <thead>
			      <tr className="success">
			        <th>编号</th>
			        <th>学号</th>
			        <th>姓名</th>
			        <th>语文</th>
			        <th>数学</th>
			        <th>英语</th>
			        <th>总分</th>
			        <th>操作</th>
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
