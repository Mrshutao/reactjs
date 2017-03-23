import React,{Component} from 'react';
import {Panel,Grid,Button,Row,Col,Navbar,NavItem,Nav,NavDropdown,MenuItem} from "react-bootstrap";
import {Link,browserHistory} from 'react-router';

export default class HeaderBar extends Component {
	constructor(props){
		super(props);
		this.username = this.props.location;
        console.log(browserHistory.getCurrentLocation().pathname)
		
	}
	render(){

		return(

            <Navbar>

                <div className="container-fluid">
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">后台管理系统</a>
                    </Navbar.Brand>
                </Navbar.Header>



                <Nav className="navbar-right">

                    <NavItem eventKey={2} >
                        {this.props.userState.name}
                    </NavItem>
                    <NavDropdown className="navbar-right" eventKey={3} title="用户设置" id="basic-nav-dropdown ">
                        <MenuItem eventKey={3.1}>Action</MenuItem>
                        <MenuItem eventKey={3.2}>Another action</MenuItem>
                        <MenuItem eventKey={3.3}>Something else here</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={3.3}>Separated link</MenuItem>
                       
                       
                     
                        <MenuItem><i className="fa fa-bell"></i> Notification
                        </MenuItem>
                        <MenuItem><span className="fa fa-envelope"></span>退出登录
                        </MenuItem>
            
                        


                    </NavDropdown>
                </Nav>   
                </div> 
            </Navbar>
			    
			 
		)
	}
	

}