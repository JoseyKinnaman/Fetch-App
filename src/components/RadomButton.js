import React from 'react';
import './RandomButton.css'



function RandomButton() {
  const [loading, setLoading] = React.useState(true);
  const [name, setName] = React.useState("Loading...");
  const [value, setValue] = React.useState();

  React.useEffect(() => {
    let unmounted = false;
    async function getRandom() {
      const proxyurl = "https://cors-anywhere.herokuapp.com/";
      const url = "https://pet-name-api.herokuapp.com/names/random"
      const response = await fetch(proxyurl + url)
      const body = await response.json();
      console.log(body)
      if (!unmounted) {
        setName(
          body.name, body.comment
        );
        setLoading(false);
      }
    }
    getRandom();
    return () => {
      unmounted = true
    };
  }, []);
  return (
    <div id="main-panel" className="ui segment">
      <h3>Get a random pet name suggestion:</h3>
      <button>Random</button>
      <h5
        disabled={loading}
        value={value}>
          {value}</h5>
          
    </div>

  );
}

export default RandomButton;