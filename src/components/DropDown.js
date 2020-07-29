import React, { useState, useEffect } from 'react';
import './DropDown.css';
import NamesList from './NamesList';


const proxyurl = "https://cors-anywhere.herokuapp.com/";

const DropDown = () => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [currentCategory, setCurrentCategory] = useState();
  useEffect(() => {
    setLoading(true)
    async function getCategory(){
    const response = await fetch(`${proxyurl}https://pet-name-api.herokuapp.com/`)
    const body = await response.json();
    let categories = [];
    body.forEach(({category}) => {categories.push(category)});
    let singleCategories = [...new Set(categories)].map((category) => ({
      label: category, 
      value: category
    }));
    setItems(singleCategories)
    setLoading(false);
    }
  getCategory();
  }, []);
return (
    <div id="main-panel" className="ui segment">
      <h3>Pet Names By Category</h3>
      {loading
      ? <div class="ui active inverted dimmer">
        <div class="ui text loader">Loading</div>
      </div>
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
      { currentCategory !== undefined ?(
        <NamesList currentCategory={currentCategory} />
      ) : (
        <h5>Please select a category</h5>
      )}
      
    </div>
  );
}

export default DropDown;