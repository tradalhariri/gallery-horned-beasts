import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,Col} from "react-bootstrap";

class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favNum : 0
        }
    }
    
    increaseFavNum = () => {
        this.setState({
            favNum:this.state.favNum+1
        });
    }

    render() {
 
        return (


            <Col>
            <Card >
              <Card.Img style={{height: "300px",objectFit: 'cover'}} onClick={this.increaseFavNum}  variant="top" src={this.props.imageUrl}/>
              <Card.Body>
                <Card.Title>{this.props.title}</Card.Title>
                <Card.Text>
                {this.props.description}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
              {this.state.favNum} 💗
              </Card.Footer>
            </Card>
          </Col>





        );
    }
}

export default HornedBeast;
