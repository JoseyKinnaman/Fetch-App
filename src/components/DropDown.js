import React, {createContext} from 'react';
import './DropDown.css';
import CategoryList from './CategoryList';
// import CategoryList from './CategoryList';

// export const DropDownContext = createContext(null);

function DropDown() {
  const [loading, setLoading] = React.useState(true);
  const [items, setItems] = React.useState([{label: "Loading...", value:" "}
  ]);
  const [value, setValue] = React.useState();
  const handleSelect = (e) => {
    setValue(e)
    console.log(e)
  }
 
  React.useEffect(() => {
    let unmounted = false;
  async function getCategories() {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const response = await fetch(proxyurl +"https://pet-name-api.herokuapp.com/")
    const body = await response.json();
    if(!unmounted) {
    let categories = [];
    body.forEach(({category}) => {categories.push(category)});
    let uniqueCats = [...new Set(categories)];
    
    setItems(
      uniqueCats.map((category) => ({
        label: category, 
        value: category
        }))
        );
      setLoading(false);
    }
  }
  getCategories();
  return () => {
    unmounted =true
  };
}, []);
return(
  <div id="main-panel" className="ui segment">
    <h3>View pet names by category.</h3>
    <form onSelect={handleSelect}>
      <select
        className="ui form"
        disabled={loading}
        value={value}
        onChange={e => setValue(e.currentTarget.value)}
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
    <h4>You selected: {value}</h4>
    <CategoryList/>
   
  </div>
);
}

export default DropDown;