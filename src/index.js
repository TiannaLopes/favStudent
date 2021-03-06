import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './src/App.jsx';
import reportWebVitals from './reportWebVitals';
import Scores from './Components';
import Routing  from './Routing' ;
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
      <Router>
    <Routing />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

