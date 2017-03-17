import React,{Component} from 'react';
import {Modal,Button} from "react-bootstrap";
export default class modal extends Component {
	constructor(props){
		super(props);
		this.state={
			visible:false,
		}
	}
	componentDidMount(){

	}
	open(callback){
		this._setModalVisible(true);
		this.callback=callback;
	}
	_setModalVisible(Visible){
		this.setState({
			visible:Visible
		})
	}

	_handle(){
		this._setModalVisible(false);
		this.callback();
	}


	render(){
		
		return(
			<Modal bsSize="small" animation={false}
			  	onHide={()=>this._setModalVisible(false)}
			    dialogClassName="modal_style"
			    show={this.state.visible}>
			        <Modal.Header closeButton>
			          <Modal.Title componentClass="h4">{this.props.title}</Modal.Title>
			        </Modal.Header>
			        <Modal.Body>
			          <p>{this.props.content}</p>
			        </Modal.Body>
			        <Modal.Footer>
			          <Button onClick={()=>this._setModalVisible(false)}>取消</Button>
			          <Button bsStyle="primary" onClick={()=>this._handle()}>确定</Button>
			        </Modal.Footer>
      		</Modal>
		)

	}
	

}

