import React from "react";
import HornedBeast from "./HornedBeast";
import 'bootstrap/dist/css/bootstrap.min.css';
import  {Row}  from "react-bootstrap";
class Main extends React.Component {
    constructor(props){
        super(props);
        this.data = this.props.data;
    }

    whichSelected = (title)=>{
       this.props.whichSelected(title);
    }

    handleClose = () => {
        this.props.handleClose();
    }
   
    handleShow = () => {
        this.props.handleShow();
   }
   

    render() {
        return (
            <main >
               <Row  xs={1} sm={2} md={3} lg={4} className="g-4">
               {this.props.data.map((beast) => <HornedBeast  key={beast.title} title={beast.title} imageUrl={beast.image_url} description={beast.description} whichSelected ={this.whichSelected} handleClose = {this.handleClose} handleShow = {this.handleShow} />)}
               </Row>
            </main>
        );
    }
}

export default Main;
