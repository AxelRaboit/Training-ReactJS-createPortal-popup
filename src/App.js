import './App.css';
import React, { Component } from 'react';
import Modal from './components/Modal';

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       showModal: false
    }
  }

  handleShow = () => {
    this.setState({
      showModal: true
    })
  }

  handleClose = () => {
    this.setState({
      showModal: false
    })
  }
  

  render() {

    const modal = this.state.showModal && <Modal close={this.handleClose}/>

    return (
      <div className="App">
        <button onClick={this.handleShow}>Afficher la modal</button>
        {modal}
      </div>
    );
  }
}

export default App;
