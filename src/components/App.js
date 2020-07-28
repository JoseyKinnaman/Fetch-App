import React from 'react';
import DropDown from './DropDown'
import RandomButton from './RadomButton'
import logo from '../assets/logo.png'

import './App.css'

function App() {
 
  return (
    <div className="ui container" style={{marginTop: '10px'}}>
      <div id="header-panel" className="ui segment">
        <img src={logo}/>
      
      <h2>A fun and hip companion animal naming  tool for shelters and humans.</h2>
      </div>
        <RandomButton />
        <DropDown/>
    </div>
  );
}

export default App;
