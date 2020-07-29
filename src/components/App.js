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
      <h2>An Outside of the Box Companion Animal Naming Tool for Shelters and Humans</h2>
        <Popup trigger={<button class="ui button"> Bark!</button>} position="center">
          <div><h5>Fetch was started with the idea that all companion animals are special and deserve names that fit their unique personalities! Originally intented as a book, Jozy Kinnaman began collecting pet names over 10 years ago after working in various animal shelters and hospitals. This app is meant to inspire creativity and assist in the, somewhat challenging, companion animal naming process. We have omitted gender but some names may be more fitting for some pets than others. We strive to be inclusive at Fetch so we do urge you to consider cultural context with name selection and to choose mindfully. The app is always growing and changing so please come back soon!</h5></div>
        </Popup>
      </div>
        <RandomButton />
        <DropDown/>
      <footer>
        <Popup trigger={<button class="ui button"> Meow!</button>} position="center">
          <div>
          <h5><a href="https://github.com/JoseyKinnaman/fetcher_api ">Fetcher </a> is an open source API! If you would like to contribute, shoot us an email or visit us on GitHub!!!</h5>
          </div>
        </Popup>
      </footer>
      <br/>
    </div>
  );
}

export default App; 
