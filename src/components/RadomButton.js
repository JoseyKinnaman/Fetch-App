import React, { useState } from 'react';
import './RandomButton.css'

const proxyurl = "https://cors-anywhere.herokuapp.com/";

function RandomButton() {
  const [randomName, setRandomName] = useState([]);
  const getRandom = async () => {
    const response = await fetch(`${proxyurl}https://pet-name-api.herokuapp.com/names/random`)
    const body = await response.json();
    setRandomName(body);
  }
  return (
    <div id="panel" className="ui segment">
      <h3>Random Name Suggestion</h3>
      <div onClick={getRandom}  className="ui animated fade button">
        <div className="visible content">''Do I feel lucky?'</div>
        <div className="hidden content">well, do ya?</div>
      </div>
      <hr />
      <h5>{randomName.name}</h5>
      <p>{randomName.comment}</p>
    </div>
  );
}

export default RandomButton;