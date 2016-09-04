import React, { Component } from 'react';
import AddLift from './components/AddLift/AddLift';
import LiftLog from './components/LiftLog/LiftLog';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Lift App - React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <AddLift />
        <LiftLog />
      </div>
    );
  }
}

export default App;
