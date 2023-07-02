import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
import BG from '../images/BG(up).png'

export default function Section3() {
  return (
    <div className='sec3OuterMost' id='About'>
        <div className='sec3SideCon'>
            <img src={BG} alt="" />
        </div>
        <div className='sec3Con'>
            <div>
                <h1 className='sec3Head'>HOW WE WORK?</h1>
            </div>
            <div className='sec3Outer'>
            <div className='lottieCon'>
            <Player src='https://assets7.lottiefiles.com/packages/lf20_tVT3vG.json' className="player" loop autoplay />
            </div>
            
            <div className='sec3ParaCon'>
                <p className='sec3Para'>Our weather forecasting website operates by collecting <span className='sec3Span'>real-time weather data</span> from reliable sources through an <span className='sec3Span'>API integration</span> . We process and analyze the data using advanced algorithms to generate <span className='sec3Span'>accurate forecasts</span>. Our user-friendly interface allows users to easily search for weather information for specific locations. We <span className='sec3Span'>continuously update</span> our forecasts to reflect the latest data, ensuring accuracy. Quality assurance measures are in place to maintain the reliability of our information.</p>
            </div>        
            </div>
            
        </div>
        <div className='sec3SideCon'>
            <img src={BG} alt="" />
        </div>
    </div>
  )
}
