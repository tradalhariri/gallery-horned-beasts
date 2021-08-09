import React from "react";
import HornedBeast from "./HornedBeast";
import data from "./data.json"
import 'bootstrap/dist/css/bootstrap.min.css';
import  {Row}  from "react-bootstrap";
class Main extends React.Component {
    render() {
        return (
            <main >
               <Row  xs={1} md={3} lg={4} className="g-4">
               {data.map((beast,index) => <HornedBeast key={index} title={beast.title} imageUrl={beast.image_url} description={beast.description}  />)}
               </Row>
            </main>
        );
    }
}

export default Main;
