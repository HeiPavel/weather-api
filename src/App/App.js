import { useState, useEffect } from "react";
import { sendCoordinats } from "../util/weatherRequest";

function App() {

  const [text, setText] = useState('');

  /*const fetchData = async () => {
    try {
      const response = await fetch('/.netlify/functions/fetch-weather');
      const jsonResponse = await response.json();
      console.log(jsonResponse.message);
      return jsonResponse.message;
    } catch(error) {
      console.log(error);
    }
  }*/

  const handler = async () => {
    const fetchData = await sendCoordinats();
    console.log('fetchData: ', fetchData);
    setText(fetchData.data.name);
  }

  useEffect(() => {
    handler();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {text}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
