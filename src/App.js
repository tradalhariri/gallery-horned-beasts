import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import data from "./components/data.json";
import SelectedBeast from './components/SelectedBeast';
import React from 'react';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      element: {},
      show: false
    }
    this.data = data;
    this.selected ={}

  }

  whichSelected = (title) => {
   
    this.selected = this.data.find(element => {
      if (element.title === title) {
 
        return element;
      }
     
    });
    this.setState({
      element: this.selected,
      show: true
    });
  }

  handleClose = () => {
    this.setState({
      element: this.selected,
      show: false
    });
 }

 handleShow = () => {
  this.setState({
    element: this.selected,
    show: true
  });
}

  render() {

    return (
      <div>
        <Header />
        <Main data={data} whichSelected={this.whichSelected}  handleClose = {this.handleClose} handleShow = {this.handleShow}  />
      <SelectedBeast show={this.state.show}  handleClose = {this.handleClose} handleShow = {this.handleShow} element={this.state.element} />
        <Footer />
      </div>
    );
  }
}

export default App;
