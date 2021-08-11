import React from "react";
import "./Header.css";

class Header extends React.Component {
    constructor(){
        super();
       
        this.state={
            style:{backgroundColor:"#6D9154",color:"black",padding:"15px"},
            theme:'green',
        }
    }

    changeStyle = ()=>{
        if(this.state.theme === 'green'){
            this.setState({
           
                style:{backgroundColor:"#204b02",color:"white"},
                theme:'darkGreen',
               })
        }else{
            this.setState({
                style:{backgroundColor:"#6D9154",color:"black",padding:"15px"},
                theme:'green',
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
