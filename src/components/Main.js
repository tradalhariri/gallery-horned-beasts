import React from "react";
import HornedBeast from "./HornedBeast";
import beasts from "./beasts";

function generateBeasts(){
    let newBeasts = [];
    beasts.forEach(beast => {
        newBeasts.push(<HornedBeast title={beast.title} imageUrl={beast.image_url} description={beast.description} />)
    }); 
    return newBeasts;
}
class Main extends React.Component {
    render() {
        return (
            <main style={{overflow:"auto",height:"70vh"}}>
               
               {generateBeasts()}

            </main>
        );
    }
}

export default Main;
