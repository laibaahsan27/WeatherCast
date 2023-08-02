import React from 'react'
import Rain from '../images/Rain Cloud.png'

export default function Section2() {
  return (
    <div className='sec2Con' id='Cities'>
      <h1 className='sec2Head'>CURRENT <span style={{color:'rgba(161, 250, 225, 1)'}}>&nbsp;WEATHER&nbsp;</span>  GENERATED ACROSS SOME MAJOR CITIES</h1>
      <div className='sec2Cards'> 

        <div className='sec2Outer'>
          <div className='sec2City'>Noida, <span style={{
            color:'rgba(34, 52, 25, 0.52)', fontSize:'25px'}}>India</span> </div>
          <div className='allCON'>
          <div className='sec2Icon'>
            <img style={{display:'inline-block'}} src={Rain} alt="" />
          </div>
          <div style={{display:'inline-block'}}>
            <div className='sec2Temp'>23&deg;c</div>
            <button className='feels-btn'>Real feel - 27&deg;c</button>
          </div>
          </div>
          <div className='sec2Last'>06/06/2023 &#x2022; Tuesday &#x2022; 01:15 AM</div>
        </div>

        <div className='sec2Outer'>
          <div className='sec2City'>Mumbai, <span style={{
            color:'rgba(34, 52, 25, 0.52)', fontSize:'25px'}}>India</span> </div>
          <div className='allCON'>
          <div className='sec2Icon'>
            <img style={{display:'inline-block'}} src={Rain} alt="" />
          </div>
          <div style={{display:'inline-block'}}>
            <div className='sec2Temp'>23&deg;c</div>
            <button className='feels-btn'>Real feel - 27&deg;c</button>
          </div>
          </div>
          <div className='sec2Last'>06/06/2023 &#x2022; Tuesday &#x2022; 01:15 AM</div>
        </div>

        <div className='sec2Outer'>
          <div className='sec2City'>Kolkata, <span style={{
            color:'rgba(34, 52, 25, 0.52)', fontSize:'25px'}}>India</span> </div>
          <div className='allCON'>
          <div className='sec2Icon'>
            <img style={{display:'inline-block'}} src={Rain} alt="" />
          </div>
          <div style={{display:'inline-block'}}>
            <div className='sec2Temp'>23&deg;c</div>
            <button className='feels-btn'>Real feel - 27&deg;c</button>
          </div>
          </div>
          <div className='sec2Last'>06/06/2023 &#x2022; Tuesday &#x2022; 01:15 AM</div>
        </div>
      </div>
      
    </div>
  )
}
