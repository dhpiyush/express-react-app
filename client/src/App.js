// /client/App.js
import React, { Component } from "react";
import Welcome from './components/welcome';
import ServerTesting from './components/serverTesting';

class App extends Component {
  
  render() {
    
    return (
      <div>
        <Welcome name="test"/>
        <ServerTesting />
      </div>
    );
  }
}

export default App;