import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://sta7bbda60.execute-api.us-east-1.amazonaws.com/dev/person');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  console.log(data);
  console.log(typeof data);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
	        Edit <code>src/App.js</code> and publish to GitHub
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      <div>
        <h3>Items</h3>
        <ul>
          <li> {data && data.Username && data.Username.S} </li>
        </ul> 
      </div>
      </header>
    </div>
  );
}

export default App;
