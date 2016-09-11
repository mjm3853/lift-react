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
      <div>
        <div className="App App-header">
          <h1>Lift App</h1>
        </div>
        <div className="container">
          <div className="col-md-4">
            <AddLift horizon={horizon}/>
          </div>
          <div className="col-md-8">
            <LiftLog horizon={horizon}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
