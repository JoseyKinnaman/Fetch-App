import React from 'react';

function DropDown() {
  const [loading, setLoading] = React.useState(true);
  const [items, setItems] = React.useState([{label: "Loading...", value:" "}
  ]);

  React.useEffect(() => {
  async function getCategories() {
    const response = await fetch("https://pet-name-api.herokuapp.com/")
    const body = await response.json();
  
    // for(let i=0; i < body.category.length; i ++){
    // if (body.category[i] =! body.category[i+1]){
    setItems(body.map(({ category }) => ({label: category, value: category})));
    console.log(setItems)
    setLoading(false);
    }
//   }
// }
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