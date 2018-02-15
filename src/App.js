import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    counter: 0
  }
  render() {
    return (
      <div className="App">
        <h2>Hello react Berkeley</h2>
        <p>This is a work in progress app...</p>
        <h2>counter: {this.state.counter}</h2>
      </div>
    );
  }
}

export default App;
