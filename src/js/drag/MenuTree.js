import React,{Component} from 'react';
import {Collapse} from "react-bootstrap";
import Box from "./Box"
import "../../css/sidebar.css"
export default class MenuTree extends Component {
	constructor(props){
		super(props);
		this.state={
			 tree:[
			   {
			    title: "调度管理",
          flag:true,
			    nodes: [
						   	{name: "任务调度中心",data:{}},
						   	{name: "业务系统",data:{}},
				       	{name: "自动化编译部署",data:{}},
			       		{name: "新增用户",data:{}},
			    ]
			  },
			  {
          flag:true,
			    title: "表单",
			    nodes: [
						{name: "向导", data:{}}
			    ]
			  },
			]
		}
	}
	componentDidMount(){

	}

	setFlag(index){
		var tempArr=this.state.tree;
		for(var i=0;i<tempArr.length;i++){
			if(i==index){
				tempArr[i].flag=!tempArr[i].flag;
			}
		}
		this.setState({
			tree:tempArr
		});

	}

	mapTree(){
		var tempArr=this.state.tree;
		if(tempArr == undefined || tempArr.length<1){
			return null;
		}else{
			tempArr=tempArr.map((value,index)=>{
				if(value.nodes){

					var sub_nav=value.nodes.map((v,i)=>{
						return(

							<li key={i}>
                <Box name={v.name}/>
							</li>
						)
					})
					return(
						<li key={index} style={{color:"#4285f4"}}>
							<span onClick={()=>this.setFlag(index)}>	
							
								<span style={{marginRight:5}}>
								  <i className={value.flag?"iconfont icon-slide-up":"icon iconfont icon-slide-down"}></i>
                </span>
                {value.title}
							</span>
							<Collapse in={value.flag}>
								<ul className="nav-sidebar">
									{sub_nav}
								</ul>
							</Collapse>
						</li>
					)
				}else{
					return(
						<li  key={index}>
                <Box name={value.name}/>			
						</li>
					)
				}

			});
			return tempArr
		}
	}
	render(){
		var treeList=this.mapTree();
		return(
			<div>
				
        
          <ul className="nav-sidebar">
            {treeList}
          </ul>
			
			</div>
		)
	}


}
