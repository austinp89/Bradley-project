import React, { Component } from 'react';
// import Home from './components/Home'
// import People from './components/People'
import Routing from './Routing'
import Navbar from './components/Navbar'

class App extends Component {
  render() {
    return (
      <div>
        <center>
          <Navbar/>
          <Routing/>
        </center>
      </div>
    );
  }
}

export default App;
