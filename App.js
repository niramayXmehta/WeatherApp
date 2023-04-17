import React, {useState, useEffect}from "react";
import axios from "axios"
import Weather1 from "./Weather1";
import Weather2 from "./Weather2";

import WeatherIndex from "./WeatherIndex";
import Navbar from "./Navbar";



function App() {



  return (
    <div className="app">
    {/**Renders the home screen and the navigation bar on top */}
      <Navbar/> 
      <Weather1/>

    </div>

  


  );
}

export default App;
