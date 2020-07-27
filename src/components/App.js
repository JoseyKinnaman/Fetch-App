import React from 'react';
import DropDown from './DropDown'
import RandomButton from './RadomButton'
import './App.css'

function App() {
 
  // onDropDownSubmit =(category) => {
  //   console.log(category)
  // }

  return (
    <div className="ui container" style={{marginTop: '10px'}}>
      <div id="header-panel"  className="ui segment">
      <h1>Fetch</h1>
      <p>A fun and hip companion animal naming  tool for shelters and humans.</p>
      </div>
     <DropDown/>
     <RandomButton/>
    </div>
  );
}

export default App;
