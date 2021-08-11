import React from "react"

import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal,Button,Image, Card} from "react-bootstrap";

class SelectedBeast extends React.Component{
    constructor(props){
     super(props)
    }

    render(){
        return (    
          <Modal show={this.props.show} onHide={this.props.handleClose}>

            <Modal.Header closeButton>
              <Modal.Title>{this.props.element.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
        
                <Card.Img  style={{ height: "300px" }} src={this.props.element.image_url}  title={this.props.element.title} alt={this.props.element.title}  />
                <p>{this.props.element.description}</p>
            
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.props.handleClose}>
                Close
              </Button>
              
              <Button variant="primary" onClick={this.props.handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>   
        );
    }
}

export default SelectedBeast;