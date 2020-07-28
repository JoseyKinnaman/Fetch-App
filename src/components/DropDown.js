import React, {createContext, useState, useEffect} from 'react';
import './DropDown.css';
import NamesList from './NamesList';


const proxyurl = "https://cors-anywhere.herokuapp.com/";

function DropDown() {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [currentCategory, setCurrentCategory] = useState();
  
 
  useEffect(async () => {
    setLoading(true)
    const response = await fetch(proxyurl +"https://pet-name-api.herokuapp.com/")
    const body = await response.json();
    let categories = [];
    body.forEach(({category}) => {categories.push(category)});
    let uniqueCats = [...new Set(categories)].map((category) => ({
      label: category, 
      value: category
    }));
      
    setItems(uniqueCats)
    setLoading(false);
  }, []);

  useEffect(() => {
    if (items && items.length) {
      setCurrentCategory(items[0].value)
    }
  }, [items])


  return (
    <div id="main-panel" className="ui segment">
      <h3>View pet names by category.</h3>
      {loading
        ? 'Loading...' // TODO: render a loading gif spinner guy 
        : <form >
          <select
            className="ui form"
            disabled={loading}
            value={currentCategory}
            onChange={e => setCurrentCategory(e.currentTarget.value)}
          >
            {items.map(({label, value}) => (
              <option
                className="field"
                key={value}
                value={value}
              >
                {label}
              </option>
            ))}
          </select>
          <hr/>
        </form>
      }
      <h4>You selected: {currentCategory}</h4>
      <NamesList currentCategory={currentCategory}/>
    </div>
  );
}

export default DropDown;