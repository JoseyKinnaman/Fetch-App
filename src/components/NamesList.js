import React, { useState, useEffect } from 'react';
import './NamesList.css'

const proxyurl = "https://cors-anywhere.herokuapp.com/";

const  NamesList = ({currentCategory}) => {
  const [names, setNames] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`${proxyurl}https://pet-name-api.herokuapp.com/names?category=${currentCategory}`)
      const body = await response.json();
      setNames(body)
    }
    fetchData();
  }, [currentCategory]);
  return (
    <div id="inner-segment" className="ui segment">
      <h4>{currentCategory}</h4>
      {names.map(name => <div key={name.id}>
        <ul>
          <li><h5>{name.name}</h5>
          <p>{name.comment}</p></li>
        </ul>
      </div>)}
    </div>
  );
}

export default NamesList;