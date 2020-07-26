import React from 'react';

function DropDown() {
  const [loading, setLoading] = React.useState(true);
  const [items, setItems] = React.useState([{label: "Loading...", value:" "}
  ]);

  React.useEffect(() => {
    let unmounted = false;
  async function getCategories() {
    const response = await fetch("https://pet-name-api.herokuapp.com/")
    const body = await response.json();
 
    let categories = [];
    body.forEach(({category}) => {categories.push(category)});
    let uniqueCats = [...new Set(categories)];
    console.log(uniqueCats)
  
    setItems(uniqueCats.map((category) => ({label: category, value: category})));
      setLoading(false);
 
}
  getCategories();
}, []);


return(
  <select
    disabled={loading}
  >
    {items.map(({label, value}) => (
      <option
        key={value}
        value={value}
      >
        {label}
      </option>
    ))}
  </select>
);
}

export default DropDown;