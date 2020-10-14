import React from 'react'
import Axios from "axios";
import "./App.css";



function App() {

  
  const APP_ID = "165be659";
  const APP_KEY = "66153f4a87d0c67abcf2a11be725d17c	";
  const url = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
 
 const getData = async() => {
  const result = await Axios.get(url);

  console.log(result);

 };
 
  return (
    <div className="App">
      <h1 onClick={getData}>Food Searching App</h1>
    </div>
  );
};

export default App
