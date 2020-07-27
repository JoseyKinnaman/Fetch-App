import React, { useContext } from 'react';
import { DropDown } from "./DropDown"
import './CategoryList.css'

function CategoryList() {

  // const [loading, setLoading] = React.useState(true);
  // const [items, setItems] = React.useState([{ label: "Loading...", value: " " }
  // ]);
  // const [value, setValue] = React.useState();
  // value = useContext(DropDown);
  // React.useEffect((props) => {
    // let unmounted = false;
    // async function getNames() {
    //   const proxyurl = "https://cors-anywhere.herokuapp.com/";
    //   const url = "https://pet-name-api.herokuapp.com/names?=";
    //   const response = await fetch(proxyurl + url + props.value)
    //   const body = await response.json();
    //   // if (!unmounted) {
    //     console.log(body)
      //   let categories = [];
      //   body.forEach(({ category }) => { categories.push(category) });
      //   let uniqueCats = [...new Set(categories)];

      //   setItems(
      //     uniqueCats.map((category) => ({
      //       label: category,
      //       value: category
      //     }))
      //   );
      //   setLoading(false);
      // }
    // }
  //   getNames();
  //   // return () => {
  //   //   unmounted = true
  //   };
  // }
  // , []);
  return (
    <div id="inner-segment" className="ui segment">
      <h2>Hello</h2>
      {/* <div>{value}</div> */}
      
    </div>

  );
}

export default CategoryList;