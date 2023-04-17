//This script essentially carries the same functionality as the Weather1, and so is used for generating a second weather component after the  user has pressed the add location button
import React, {useState, useEffect}from "react";
import axios from "axios"
import locationImage from './assets/marker(3).png'

//importing all the image s that will be shown alongside current weather data
import Sunrise from './assets/sunrise-alt.png'
import Sunset from './assets/sunset.png'
import Wind from './assets/wind.png'
import Humidity from './assets/raindrops.png'
import TempHigh from './assets/temperature-high.png'
import TempLow from './assets/temperature-low.png'


function Weather2 () {

    const [data,setData] =useState({})
    const [cityName, setLocation2] =useState('')

    const API_KEYS = '6a2dbc7a83cbc824c715fad97a9dcaed';

    const url =`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEYS}&units=metric` //variables city name is sued so we can when the user types in what 
    //city they want its passed through this API link


    const searchLocation2 = (event) => {
        if(event.key === 'Enter'){
        axios.get(url).then((response) =>{
            setData(response.data)
            //console.log(response.data)
        })
        setLocation2('')
      } 
    }

    const [backgroundImage, setBackgroundImage] = useState(''); //intisales background variables

    useEffect(() => {
        //initilases varibles used to show the data of a current location
        if (data.sys) {
          const sunrise = data.sys.sunrise;
          const sunset = data.sys.sunset;
          const current = data.dt;
          if (current >= sunrise && current < sunset) {  //checks if the current time more than or equal to the sunrise vlaue and the current time is less than the sunset
            setBackgroundImage(require('./assets/The-Cliffsg-4-dragged.jpg'));
          } else { //sets setBackgroundImages to either one of these image files.
            setBackgroundImage(require('./assets/The-Cliffsa-2-dragged.jpg'));
          }
        }
      }, [data]);

  return (
    <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover'}}> {/** sets the image for page  */}

    <div className="app">
    <div className="Margin">
    <div className="Search">
        <input
            value={cityName}
            onChange={event => setLocation2(event.target.value)}
            onKeyPress={searchLocation2}
            placeholder='City Name'
            type="text"
        />

        {/** take in the users location input and waits until they press enter on thier keyboard before fetching data, */}
    </div>
    <div className="container">
      <div className="top">
        <div className="temp">
        {data.main ? <h1 >{Math.round(data.main.temp)}°C</h1> : <h1 className="notemp">Temperature°C</h1>} {/**Displays temperature roundeed */}
        </div>
        <div className="description">
          {data.weather ? <h2>{data.weather[0].main}</h2> : <h2>Weather</h2>}  {/**Displays weather description*/}
        </div>
        <div className="location">
          <h3>{data.name ? data.name : <h3>Location</h3>}</h3> {/**Displays location entered  */}
        <div className="imageloc">
        <img src={locationImage} alt="locationImage" style={{width:'30px', height: '30px'}}></img>
        </div>
        </div>
      </div>

    <div className="extrainfo">
        <div className="info">
            <div className="Sunrise">
            <div className="extraInfoImg">
                <img src={Sunrise} alt="SunriseImage" style={{width:'50px', height: '50px'}}></img>
            </div>
                <p>Sunrise</p>
                {data.sys ? <p>{new Date((data.sys.sunrise+data.timezone)*1000).toLocaleTimeString()}</p> : <p>-</p>} {/**Displays the sunrise time and formats to show hour minute seconds */}
            </div>
        </div>
        <div className="info">
            <div className="Sunset">
            <div className="extraInfoImg">
                <img src={Sunset} alt="SunsetImage" style={{width:'50px', height: '50px'}}></img>
            </div>
                <p>Sunset</p>
                {data.sys ? <p>{new Date((data.sys.sunset+data.timezone)*1000).toLocaleTimeString()}</p> : <p>-</p>}  {/**Displays the sunset time and formats to show hour minute seconds */}
            </div>
        </div>

        <div className="info">
            <div className="Wind">
            <div className="extraInfoImg">
                <img src={Wind} alt="WindImage" style={{width:'50px', height: '50px'}}></img>
            </div>
                <p>Wind</p>
                {data.wind ? <p>{Math.round(data.wind.speed)}m/s</p> : <p>-</p>} {/**Displays the speed of wind rounded */}
            </div>
        </div>

    </div>

        <div className="extrainfo">
        <div className="info">
            <div className="TempMax">
            <div className="extraInfoImg">
                <img src={TempHigh} alt="TempHighImg" style={{width:'50px', height: '50px'}}></img>
            </div>
                <p>Temp-Max</p>
                {data.main ? <p>{Math.round(data.main.temp_max)}°C</p> : <p>-</p>} {/**Displays the max temp rounded */}
            </div>
        </div>
        <div className="info">
            <div className="TempMin">
            <div className="extraInfoImg">
                <img src={TempLow} alt="TempHighImg" style={{width:'50px', height: '50px'}}></img>
            </div>
                <p>Temp-Min</p>
                {data.main ? <p>{Math.round(data.main.temp_min)}°C</p> : <p>-</p>}  {/**Displays the min temp rounded */}
            </div>
        </div>

        <div className="info">
            <div className="Humidity">
            <div className="extraInfoImg">
                <img src={Humidity} alt="HumidityImg" style={{width:'50px', height: '50px'}}></img>
            </div>
                <p>Humidity</p>
                {data.main ? <p>{Math.round(data.main.humidity)}%</p> : <p>-</p>}  {/**Displays the Humidiity rounded */}
            </div>
        </div>

    </div>

    </div>
    </div>
 
 {/**these if statements takes the current temperature of the location enetered and if the temperature fits within one of these categories then a clothing suggestion will be shown*/}
    {(() => {
            if (data.main && data.main.temp <=5) return <p className="Suggestion">Looks Cold Wear a Coat</p>;
            if (data.main && data.main.temp <=15) return <p className="Suggestion">A Bit Chilly Wear A Sweater</p>;
            if (data.main && data.main.temp >=15 <=23) return <p className="Suggestion">A Bit Warm Wear A Shirt</p>;
            if (data.main && data.main.temp >=23) return <p className="Suggestion">Quite Warm Wear a shirt and make sure to bring some water</p>;
    })()}
    
  </div>

  
  </div>
  
  )
}

export default Weather2