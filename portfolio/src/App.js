import React, { Component } from 'react';
import Home from "./pages/home";

// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
