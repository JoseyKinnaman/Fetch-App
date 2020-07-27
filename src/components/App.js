import React from 'react';
import DropDown from './DropDown'
import RandomButton from './RadomButton'

function App() {
  return (
    <div className="ui container" style={{marginTop: '10px'}}>
      <h1>Fetch</h1>
      <p>A fun and hip companion animal naming  tool for shelters and humans.</p>
     <DropDown/>
     <RandomButton/>
    </div>
  );
}

export default App;
