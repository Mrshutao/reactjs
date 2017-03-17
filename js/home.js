import React,{Component} from 'react';
import {Panel,Grid,Button,Row,Col,Navbar,NavItem,Nav,ListGroup,ListGroupItem} from "react-bootstrap";
import {Link} from 'react-router';
import Tree from "./sidebar/Tree.js"
import "../css/style.css"
export default class home extends Component {
	constructor(props){
		super(props);
		
		
	}
	render(){

		return(
			
	   		<div style={{backgroundColor:"#fff"}}>
	   			
		
		
		    	<Grid fluid='true'>
				    <Row className="show-grid">
				        <Col xs={3}  md={2}>
				        	
						    <div>
								<Tree/>
							</div>				
					    
				        </Col>
				        <Col xs={9} md={10}>
					       
				      		{this.props.children}
				        </Col>
				    </Row>
				 </Grid>
			</div>
			    
			 
		)
	}
	

}
