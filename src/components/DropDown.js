import React from 'react';

function DropDown() {
  const [loading, setLoading] = React.useState(true);
  const [items, setItems] = React.useState([{label: "Loading...", value:" "}
  ]);
  const [value, setValue] = React.useState();

  React.useEffect(() => {
    let unmounted = false;
  async function getCategories() {
    const response = await fetch("https://pet-name-api.herokuapp.com/")
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
  <div className="ui segment">
    <h3>View pet names by category.</h3>
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
  </div>
);
}

export default DropDown;