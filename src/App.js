import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import data from "./components/data.json";
import SelectedBeast from './components/SelectedBeast';
import React from 'react';
import BeastForm from './components/BeastForm';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      element: {},
      show: false,
      hornsNumber: -1
    }
    this.data = data;
  }

  whichSelected = (title) => {

    let selected;
     this.data.find(element => {
      if (element.title === title) {
       selected = element;
        return element;
      }

    });
    this.setState({
      element: selected,
      show: true
    });
  }

  handleClose = () => {
    this.setState({
      show: false
    });
  }

  handleShow = () => {
    this.setState({
      show: true
    });
  }

  onChange = async(e) => {
    await this.setState({
      hornsNumber: Number(e.target.value)
    })
  }
  render() {
  let filteredData = this.data.filter(Beast => Beast.horns === this.state.hornsNumber);
  console.log(filteredData);
  filteredData = (filteredData.length === 0 ? this.data: filteredData);
  console.log(filteredData);
    return (
      <div>
        <Header />
        <BeastForm  onChange={this.onChange}/>
        <Main data={filteredData} whichSelected={this.whichSelected}  handleShow={this.handleShow} />
        <SelectedBeast show={this.state.show} handleClose={this.handleClose}  element={this.state.element} />
        <Footer />
      </div>
    );
  }
}

export default App;
