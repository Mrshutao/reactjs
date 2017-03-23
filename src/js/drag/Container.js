import React, { Component } from 'react';
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Box from './Box';
import Dustbin from './Dustbin';
import MenuTree from "./MenuTree"
import {Table,Button,Panel,Row,Col,Well} from "react-bootstrap"

export default class Container extends Component {
  constructor(props){
    super(props)
    this.location=this.props.location;
		this.panelTitle=this.location.state.title;
    this.state={

    }
  }
  componentDidMount () {


  }
  
  
  render() {
    return (
      <DragDropContextProvider backend={HTML5Backend}>
         	<Panel header={this.panelTitle}>
              <Row className="show-grid">
                <Col sm={8}>
                  <Well style={{ overflow: 'hidden',width:700,height:460,padding:30 }}>
                    <Dustbin />
                  </Well>
                </Col>

                <Col sm={4}>
                  <div style={{ overflow: 'hidden', clear: 'both' }}>
                   <MenuTree/>
                  </div>
                </Col>
              </Row>
           
          
        </Panel>
      </DragDropContextProvider>
    );
  }
}