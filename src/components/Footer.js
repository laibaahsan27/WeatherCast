import React from 'react'
import L from '../images/linkedln.png'
import G from '../images/git.png'
import { Link } from 'react-scroll';
import Heart from '../images/Two Hearts.png'

export default function Footer() {
  return (
    <div className='FooterCon'>
      <div className='Footer-Icons'>
        <a href="https://www.linkedin.com/in/laiba-ahsan-8a913a23a/">
            <img style={{margin:'5px'}} src={L} alt="" />
        </a>
        <a href="https://github.com/laibaahsan27/WeatherCast">
            <img style={{margin:'5px'}} src={G} alt="" />
        </a>
      </div>
      <div className='Footer-Links'>
      <Link
              to="about"
              className="Footer-btn"
              spy={true}
              smooth={true}
              duration={200}
            >
              Home
            </Link>
           {/* <span style={{color:'#FFF', paddingTop:'20px'}}>&#x2022;</span>
            <Link
              to="Services"
              className="Footer-btn"
              spy={true}
              smooth={true}
              duration={200}
            >
              Get Weather
            </Link> */}
            <span style={{color:'#FFF', paddingTop:'20px'}}>&#x2022;</span>
            <Link
              to='Cities'
              className="Footer-btn"
              spy={true}
              smooth={true}
              duration={200}
            >
              Citites
            </Link>
            <span style={{color:'#FFF', paddingTop:'20px'}}>&#x2022;</span>
            <Link
              to='About'
              className="Footer-btn"
              spy={true}
              smooth={true}
              duration={200}
            >
              About
            </Link>
            <span style={{color:'#FFF', paddingTop:'20px'}}>&#x2022;</span>
            <Link
              to="FAQ"
              className="Footer-btn"
              spy={true}
              smooth={true}
              duration={200}
            >
              Get Weather
            </Link>
      </div>
      <div style={{display:'flex', justifyContent:'center'}}>
        <img src={Heart} alt="" />
        <p className='LastLine'>Designed & Developed by Laiba</p>
        <img src={Heart} alt="" />
      </div>
    </div>
  )
}
