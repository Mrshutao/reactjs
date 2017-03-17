import React,{Component} from 'react';
import {Panel,FormGroup,FormControl,HelpBlock,ControlLabel,Button,Link,
Row,Col,} from "react-bootstrap";
const wellStyles = {margin: '30px 20px'};

export default class addPerson extends Component {
	constructor(props){
		super(props);
		this.state={
			value:""
		}

	}


	render(){

		return(
	       <div style={wellStyles}>

					<div className="row">
						<div className="col-lg-12">
							<h3 className="page-header"><i className="fa fa-laptop"></i> Dashboard</h3>
							<ol className="breadcrumb">
								<li><i className="fa fa-home"></i>Home</li>
								<li><i className="fa fa-laptop"></i>Dashboard</li>
							</ol>
						</div>
					</div>


					<div className="row">

								<div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
									<div className="info-box red-bg">
										<i className="fa fa-thumbs-o-up"></i>
										<div className="count">356K</div>
										<div className="title">Order</div>
									</div>
								</div>

								<div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
									<div className="info-box green-bg">
										<i className="fa fa-cubes"></i>
										<div className="count">425K</div>
										<div className="title">Stock</div>
									</div>
								</div>

								<div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
									<div className="info-box blue-bg">
										<i className="fa fa-cloud-download"></i>
										<div className="count">325K</div>
										<div className="title">Download</div>
									</div>
								</div>

								<div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
									<div className="info-box magenta-bg">
										<i className="fa fa-shopping-cart"></i>
										<div className="count">259K</div>
										<div className="title">Purchased</div>
									</div>
								</div>

						</div>



			 </div>
		)
	}
}
