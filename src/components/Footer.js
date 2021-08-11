import React from "react";
import "./Footer.css"

class Footer extends React.Component {

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
      <footer className="footer"  style={this.state.style}  onClick={this.changeStyle}   ><p>Made by Trad Almelhem</p></footer>
    );
  }
}

export default Footer;
