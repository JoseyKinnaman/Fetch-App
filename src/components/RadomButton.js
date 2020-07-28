import React, {useEffect, useState} from 'react';
import './RandomButton.css'

const proxyurl = "https://cors-anywhere.herokuapp.com/";

function RandomButton() {
  const [loading, setLoading] = useState(true);
  const [randomName, setRandomName] = useState([]);
  // const [currentRadomName, setCurrentRandomName] = useState();

  useEffect(() => {
    setLoading(true)
    async function getRandom() {
      const response = await fetch(`${proxyurl}https://pet-name-api.herokuapp.com/names/random`)
      const body = await response.json();
      console.log(body)
      setRandomName(body);
      setLoading(false);
    }
    getRandom();
  }, []);
  return (
    <div id="panel" className="ui segment">
      <h3>Get a random pet name suggestion:</h3>
      <button>Random</button>
      {/* {randomName.map(name => <div key={name.id}> */}
        <ul>
          <li><h5>{randomName.name}</h5>
          <p>{randomName.comment}</p></li>
        </ul>
      {/* </div>)} */}
    </div>

  );
}

export default RandomButton;