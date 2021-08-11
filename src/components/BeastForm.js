import React from "react"
import { Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
class BeatForm extends React.Component {


    onChange = (e) => {
        this.props.onChange(e);
    }
    render() {
        return (
            <Form>
                <Form.Group style={{ margin: "50px 15px" ,width:"auto"}} className="mb-3" controlId="formBasicEmail">
                    <Form.Select  onChange={this.onChange} aria-label="Default select example">
                        <option value="-1">Filter by horns number</option>
                        <option value="-1">All</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        <option value="100">Wow</option>
                    </Form.Select>
                </Form.Group>
            </Form>

        );
    }

}

export default BeatForm;