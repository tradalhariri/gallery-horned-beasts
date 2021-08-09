import React from "react";
import "./Header.css";

class Header extends React.Component {
    constructor(){
        super();
       
        this.state={
            style:{backgroundColor:"gray",color:"black",padding:"15px"},
            theme:'gray',
        }
    }

    changeStyle = ()=>{
        if(this.state.theme === 'gray'){
            this.setState({
           
                style:{backgroundColor:"#ddd",color:"white"},
                theme:'darkGray',
               })
        }else{
            this.setState({
           
                style:{backgroundColor:"gray",color:"black" ,padding:"15px"},
                theme:'gray',
               })
        }
   
    }
    render() {
        return (
            <header className="header"  style={this.state.style}  onClick={this.changeStyle}><h1>Horned Beasts</h1></header>
        );
    }
}

export default Header;
