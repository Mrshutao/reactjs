import React,{Component} from 'react';
import {Collapse} from "react-bootstrap";
import {Link} from 'react-router';
export default class Tree extends Component {
	constructor(props){
		super(props);
		this.state={
			 tree:[
			   {
			    iconh1:"fa fa-random",text: "调度管理",
			    nodes: [
						   	{iconh2:"fa fa-calendar",text: "任务调度中心", href:"/home/DispatchTask"},
						   	{iconh2:"fa fa-expand",text: "业务系统", href:"/home/businessSystem"},
				       		{iconh2:"fa fa-laptop",text: "自动化编译部署",href:"/home/AutoDeploy"},
				       //{iconh2:"fa fa-laptop",text: "管理用户",href:"/home/personTable"},
			       			{iconh2:"fa fa-user",text: "新增用户",href:"/home/addPerson"},
			           ]
			  },
			  {
			    flag:"fa fa-bar-chart-o",text: "Rechart", href:"/home/rechart"
			  },
			  {
			    iconh1:"fa fa-list-alt",text: "表单",
			    nodes: [
						{iconh2:"fa fa-tags",text: "向导", href:"/home/wizard"}
			           ]
			  },

				{ iconh1:"fa fa-random",text: "测试页面",href:"/home/testPage"}
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

							<Link to={{pathname: v.href, state: { title: v.text }}}
							activeStyle={{color: '#44bbd0'}}>
							 <i className={v.iconh2} style={{marginRight:10}}></i>
							{v.text}
							</Link>
							</li>
						)
					})
					return(
						<li key={index}>
							<a onClick={()=>this.setFlag(index)}>
								<i className={value.iconh1} style={{marginRight:10}}></i>
								{value.text}

								<span className="icon_right">
								<i className={value.flag?
									"iconfont icon-slide-up":"icon iconfont icon-slide-down"}>
									</i></span>
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
						<li key={index}>

						<Link to={{pathname: value.href, state: { title: value.text }}}  activeStyle={{color: '#44bbd0'}}>
						<i className={value.flag} style={{marginRight:10}}></i>{value.text}
						</Link>
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
			<div className="sidebar">
					<div className="sidebar-header">
                        <span>
												<Link to={{pathname: '/home'}} activeStyle={{color: '#44bbd0'}}>
												<img className="text-logo" src={require("../../img/logo1.png")}/>
												<i className="fa fa-space-shuttle fa-3x blue"></i>
												</Link>
												</span>
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
