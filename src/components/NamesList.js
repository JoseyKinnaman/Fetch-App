import React, { useState, useEffect } from 'react';
import { DropDown } from "./DropDown"
import './CategoryList.css'

const proxyurl = "https://cors-anywhere.herokuapp.com/";

const  NamesList = ({currentCategory}) => {
  const [loading, setLoading] = useState(true);
  const [names, setNames] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`${proxyurl}https://pet-name-api.herokuapp.com/names?category=${currentCategory}`)

      const body = await response.json();
      console.log(body)
      setNames(body)
    }
    fetchData();
  }, [currentCategory]);

  return (
    <div id="inner-segment" className="ui segment">
      {names.map(name => <div key={name.id}>
        {name.name}</div>)}
    </div>

  );
}

export default NamesList;