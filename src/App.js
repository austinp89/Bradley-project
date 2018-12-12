import React, { Component } from 'react';
import './App.css';
import Home from './components/Home'
import People from './components/People'
import Routing from './Routing'

class App extends Component {
  render() {
    return (
      <div>
        <center>
          <Routing/>
        </center>
      </div>
    );
  }
}

export default App;
