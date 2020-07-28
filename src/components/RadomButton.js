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
      <h3>Get a random pet name suggestion:</h3>
      <button onClick={getRandom}  >Random </button>
      <hr />
      <h5>{randomName.name}</h5>
      <p>{randomName.comment}</p>
    </div>
  );
}

export default RandomButton;