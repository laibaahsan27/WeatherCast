import React from 'react'
import Combo from '../images/Group 24.png'
import { Link } from "react-router-dom"
import Search from '../images/searchBar.png'

export default function Section1() {
  return (
    <div className='section1Con'>
      <div className='sec1Outer'>
        <div>
          <div className='sec1HeadDiv'>
            <p className='sec1Head'>THE DAILY WEATHER</p>
          </div>
          <div>
            <p className='sec1P1'>Weather forecasts, now casts and history in a fast and elegant way.</p>
          </div>
          <div className='sec1P2Con'>
            <p className='sec1P2'>With extreme weather on the rise, its so easy to receive weather conditions in your current location.</p>
          </div>
        </div>
        <div className='sec1Img'>
          <img className='sec1ImgDiv' src={Combo} alt="" />
        </div>  
      </div>
      <div>
        <Link to="/weather">
          <img className='sec1-btn'src={Search} alt="" />
        </Link>
      </div>
    </div>
  )
}
