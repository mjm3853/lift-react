import React, { Component } from 'react';
import AddLift from './components/AddLift/AddLift';
import LiftLog from './components/LiftLog/LiftLog';
import './App.css';

import Horizon from '@horizon/client';
const horizon = Horizon({ host: '127.0.0.1:8181' });

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Lift App</h1>
        </div>
        <AddLift />
        <LiftLog horizon={horizon}/>
      </div>
    );
  }
}

export default App;
