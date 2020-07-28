import React from 'react';
import DropDown from './DropDown'
import RandomButton from './RadomButton'
import logo from '../assets/logo.png'
import './App.css'
import Popup from 'reactjs-popup'

function App() {
  return (
    <div className="ui container" style={{marginTop: '10px'}}>
      <div id="header-panel" className="ui segment">
        <img src={logo} alt="Fetch logo with dog and human"/>
      <h3>An companion animal naming tool for shelters and humans that is... well, a little outside of the box.</h3>
        <Popup trigger={<button> Bark!</button>} position="right center">
          <div><p>Fetch was started with the idea that all companion animals are special and deserve names that fit their unique personalities! Originally intented as a book, Jozy Kinnaman began collecting pet names over 10 years ago after working in various animal shelters and hospitals. This app is meant to inspire creativity and assist in the companion animal naming process. We have omitted gender but some names may be more fitting than others. We also urge you to consider cultural context with the names and choose appropriately. Best of luck!</p></div>
        </Popup>
      </div>
        <RandomButton />
        <DropDown/>
      <Popup trigger={<button> Meow!</button>} position="right center">
        <div>Fetcher is an open source API! If you would like to contribute, shoot us an email or visit our github! !!</div>
      </Popup>
    </div>
  );
}

export default App; 
