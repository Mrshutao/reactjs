import React,{Component} from 'react';
import menuTree from "./menuTree.js"
import {Collapse} from "react-bootstrap";
import {Link} from 'react-router';
import "../../css/sidebar.css"
export default class Tree extends Component {
	constructor(props){
		super(props);
		this.state={
			 tree:[
			   {
			    text: "Parent 1",
			    nodes: [
			      {
			        text: "Child 1",
			        href:"tabel"
			      },
			      {
			        text: "Child 2",
			        href:"tabel"
			      }
			    ]
			  },
			  {
			    text: "Parent 2",
			    href:"tabel"
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
							<li><Link to="tabel" activeStyle={{color: '#44bbd0'}}><span className="text">{v.text}</span></Link></li>
						)
					})
					return(
						<li >
							<a onClick={()=>this.setFlag(index)}>
								<span className="text">{value.text}</span>
								<span className="icon_right"><i className={value.flag?"icon-angle-up":"icon-angle-down"}></i></span>
							</a>
							<Collapse in={value.flag}>
								<ul className="nav-sidebar">
									{sub_nav}
								</ul>
							</Collapse>
						</li>
					)
				}else{
					return(
						<li><Link to="tabel" activeStyle={{color: '#44bbd0'}}><span className="text">{value.text}</span></Link></li>
					)
				}
				
			});
			return tempArr
		}
	}
	render(){
		var treeList=this.mapTree();
		return(
			<div className="sidebar ">							
					<div className="sidebar-header">
                        <span><img className="text-logo" src="../../img/logo1.png"/></span>
                    </div>	
                    <div className="sidebar-menu">						
						<ul className="nav-sidebar">
							{treeList}
						</ul> 
					</div>
			</div>
		)
	}
	

}