import React from 'react'
//import the link dependecy needed 
import { Link } from 'react-router-dom'
import Weather1 from './Weather1'

function Navbar() {
  return (
    <div className='body1'>
            <nav className='item'>
                <ul className='ul'>
                {/**These are links for the navigation bar at the top of the screen and the home takes them back to the main page 
                and the other take the user to the daily forecatst of those cities. */}
                    <li className='li'>
                        <Link to='/Weather1'>Home </Link>
                    </li>
                    <li className='li'>
                        <Link to='/WeatherIndex'>London </Link>
                    </li>
                    <li className='li'>
                        <Link to='/WeatherIndex2'>Paris </Link>
                    </li>
                    <li className='li'>
                        <Link to='/WeatherIndex3'>New York </Link>
                    </li>
                    <li className='li'>
                        <Link to='/WeatherIndex4'>Rome</Link>
                    </li>
                    <li className='li'>
                        <Link to='/WeatherIndex5'>Tokyo</Link>
                    </li>
                </ul>
            </nav>
    </div>
  )
}

export default Navbar