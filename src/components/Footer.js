import React from "react";
import "./Footer.css"

class Footer extends React.Component {

  constructor(){
    super();
   
    this.state={
        style:{backgroundColor:"gray",color:"black"},
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
       
            style:{backgroundColor:"gray",color:"black"},
            theme:'gray',
           })
    }

}

  render() {
    return (
      <footer className="footer"  style={this.state.style}  onClick={this.changeStyle}   ><p>Made by Trad Almelhem</p></footer>
    );
  }
}

export default Footer;
