import React ,{useState,useEffect} from 'react'
import DailyForecast from './DailyForecast'

import Navbar from './Navbar'




function WeatherIndex3() {

    const [weatherData, setWeatherData] = useState()

    useEffect(() => {
        const API = 'https://api.open-meteo.com/v1/forecast?latitude=40.71&longitude=-74.01&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max&current_weather=true&timeformat=unixtime&timezone=America%2FNew_York'
        fetch(API) //fetches information form API
        .then(res => res.json()) //converts response to json format
        .then(data => {
            //console.log(data); // checking to see if data fro api is paased and recieved in inspect window
            setWeatherData(data)
        })
        .catch(err => console.log(err))
    }, [])

if(weatherData) console.log(weatherData);


  return (
    <div className='app'>
    <Navbar/> 
        <div className='container'>
            <div className='top'>
                <h2 className='Title'>Weather Forecast</h2>
                <h3 className='location'>New York</h3>
                {/** This takes information from the api link and slices through the data (iterates) given the amount of days we want to display, 
                we use i as and index to keep track of what element in the array we are gaining data from, then we pass the infomation to daily forecast*/}
                {weatherData ? weatherData.daily.time.slice(0,3).map((day ,i) => {
                    return <DailyForecast key={i}
                        dateNum={day}
                        tempHigh={weatherData.daily.temperature_2m_max[i]}
                        tempLow={weatherData.daily.temperature_2m_min[i]}
                        sunrise={weatherData.daily.sunrise[i]}
                        sunset={weatherData.daily.sunset[i]}
                        UV={weatherData.daily.uv_index_max[i]}
                    /> 
                })
                : <h2>Loading</h2>
                }
                {/**Will show the Loading if its on a slow device or is unable to load the data */}
            </div>
        </div>
    </div>
  )
}

export default WeatherIndex3