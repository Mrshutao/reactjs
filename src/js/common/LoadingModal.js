import React,{Component} from 'react';
import {Modal} from "react-bootstrap";
export default class LoadingModal extends Component {
	constructor(props){
		super(props);
		this.state={
			visible:false,
		}
	}
	

	_setModalVisible(Visible){
		this.setState({
			visible:Visible
		})
	}


	render(){
		
		return(
			<Modal bsSize="small" animation={false}
			  	onHide={()=>this._setModalVisible(false)}
			    dialogClassName="modal_style"
			    show={this.state.visible}>
				<Modal.Body>
				    <span><img src={require('../../img/loading.gif')}/></span>
				    <span>正在加载中...</span>
				</Modal.Body>
			</Modal>
		)
	
	}
	

}

