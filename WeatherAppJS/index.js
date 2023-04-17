import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//impoting the dependencies needed for routing
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

//Imporing all the screens used
import Weather1 from './Weather1';
import WeatherIndex from './WeatherIndex';
import WeatherIndex2 from './WetaherIndex2';
import WeatherIndex3 from './WeatherIndex3';
import WeatherIndex4 from './WeatherIndex4';
import WeatherIndex5 from './WeatherIndex5';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  /* Route takes a path and element and uses the list created in Navbar.js to allow for the user to switcch between multiple screees.*/
    <Router>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/Weather1' element={<App/>}/>
        <Route path='/WeatherIndex' element={<WeatherIndex/>}/>
        <Route path='/WeatherIndex2' element={<WeatherIndex2/>}/>
        <Route path='/WeatherIndex3' element={<WeatherIndex3/>}/>
        <Route path='/WeatherIndex4' element={<WeatherIndex4/>}/>
        <Route path='/WeatherIndex5' element={<WeatherIndex5/>}/>
      </Routes>
    </Router>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
