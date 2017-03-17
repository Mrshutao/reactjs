import React,{Component} from 'react';
import {Panel,Grid,Button,Row,Col,Navbar,NavItem,Nav,NavDropdown,MenuItem} from "react-bootstrap";
import {Link,browserHistory} from 'router';
import FormWizard from './FormWizard';
import "./form.css"

export default class HeaderBar extends Component {
	constructor(props){
		super(props);
		
	}
	render(){

		return(

			   <div>
                   <FormWizard/>
               </div>     		 
		)
	}
	

}