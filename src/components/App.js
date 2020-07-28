import React from 'react';
import DropDown from './DropDown'
import RandomButton from './RadomButton'
import logo from '../assets/logo.png'
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

import './App.css'

function App() {
  return (
    <Router>
      <div className="ui container" style={{marginTop: '10px'}}>
        <div id="header-panel" className="ui segment">
          <img src={logo} alt="Fetch logo with dog and human"/>
        
        <h2>A fun and hip companion animal naming  tool for shelters and humans.</h2>
        </div>
          <RandomButton />
          <DropDown/>
      </div>
    </Router>
  );
}

export default App;
