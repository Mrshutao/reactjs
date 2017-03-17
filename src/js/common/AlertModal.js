import React,{Component} from 'react';
import {Modal,Button} from "react-bootstrap";
export default class AlertModal extends Component {
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
				        <Modal.Header closeButton>
				          <Modal.Title componentClass="h4">提示</Modal.Title>
				        </Modal.Header>
				        <Modal.Body>
				          <p>{this.props.content}</p>
				        </Modal.Body>
				        <Modal.Footer>
				          <Button onClick={()=>this._setModalVisible(false)}>close</Button>
				        </Modal.Footer>
	      		</Modal>
			)
		}
	}
	

