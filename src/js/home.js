import React,{Component} from 'react';
import {Panel,Grid,Button,Row,Col,Navbar,NavItem,Nav,ListGroup,ListGroupItem} from "react-bootstrap";
import {Link} from 'router';
import Tree from "./sidebar/Tree.js"
import HeaderBar from "./headerBar/Header.js"
import BreadcrumbNav from "./headerBar/BreadcrumbNav.js"

export default class home extends Component {
	constructor(props){
		super(props);
		this.propsData=this.props.location.state;	
        console.log(this.propsData.username)
	}
	componentDidMount(){
		console.log(this.propsData)
	}
	render(){

		return(
			
	   		<div style={{paddingLeft:230,paddingRight:10}}>
	   			
		
		
		    	<Grid fluid='true'>
				    <Row className="show-grid">
				        <Col>
						    
							<Tree/>
										
				        </Col>
				        <Col style={{paddingTop:70}}>
				        	<div style={{position:"absolute",left:0,top:0}}>
				        		<HeaderBar userState = {this.propsData}/>			
				        	</div>
							
				      		{this.props.children}				        
						</Col>
				    </Row>
				 </Grid>



			</div>
			    
			 
		)
	}



	

}
