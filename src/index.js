import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

var data = [
  { id: 1, name: "First Lift" },
  { id: 2, name: "Second Lift" }
]

ReactDOM.render(
  <App data={data} />,
  document.getElementById('root')
);
