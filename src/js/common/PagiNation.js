import React,{Component} from 'react';
import {Pagination} from "react-bootstrap";
export default class PagiNation extends Component {
	constructor(props){
		super(props);
		this.state={
			activePage:1,
		}
	}
	handleFunc(key){
		this.setState({
			activePage:key
		});
		this.props.handle(key)
	}
	

	render(){
		var item=Math.ceil(Number(this.props.items)/10);
		return(
			<div className="Pagination">
		  		<Pagination 
		  			prev 
		  			next 
		  			first 
		  			last 
		  			ellipsis 
		  			boundaryLinks
			        items={item}
			        maxButtons={5}
			        activePage={this.state.activePage}
			        onSelect={(key)=>this.handleFunc(key)} />
			</div>
		)
	
	}
	

}

