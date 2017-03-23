import React,{Component} from 'react';
import {Row,Col,Button,Breadcrumb,BreadcrumbItem,NavItem,Nav,MenuItem} from "react-bootstrap";
import {Link} from 'react-router';

export default class BreadcrumbNav extends Component {
	constructor(props){
		super(props);
		this.username = this.props.location;
        console.log(this.username)
		
	}
	render(){

		return(

			<Row>
				<Col lg={12}>
					<h3 className="page-header"><i className="fa fa-laptop"></i> Dashboard</h3>
                    <Breadcrumb>
                        <Breadcrumb.Item href="#">
                            Home
                        </Breadcrumb.Item>
                        <Breadcrumb.Item href="#">
                            Library
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active>
                            Data
                        </Breadcrumb.Item>
                    </Breadcrumb>
				</Col>
			</Row>
			    
			 
		)
	}
	

}