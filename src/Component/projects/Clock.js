import React, { useEffect, useState } from 'react'
import "./Clock.css"

const Clock = () => {

  const [hrPosition, setHrPosition] = useState(0);
  const [minPosition, setMinPosition] = useState(0);
  const [secPosition, setSecPosition] = useState(0);

  const displayTime = () => {
    let date = new Date();

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRotation = 30*hh + mm/2;
    let mRotation = 6*mm;
    let sRotation = 6*ss;

    setHrPosition(hRotation);
    setMinPosition(mRotation);
    setSecPosition(sRotation);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      displayTime();
    }, 1000);

    return () => clearInterval(interval);
  }, [hrPosition, minPosition, secPosition]);

  return (
    <div className='container'>
      <div className='clock'>

        <div style={{ '--clr': '#ffb510', transform: `rotate(${hrPosition}deg)`, '--wd': '4px', '--ht': '50px' }} className='hand' id="hr"><i></i></div>
        <div style={{ '--clr': '#8b8b8b', transform: `rotate(${minPosition}deg)`, '--wd': '4px', '--ht': '75px' }} className='hand' id="min"><i></i></div>
        <div style={{ '--clr': '#e5e5e5', transform: `rotate(${secPosition}deg)`, '--wd': '1px', '--ht': '115px' }} className='hand' id="sec"><i></i></div>
        <span style={{ '--h': 3 }}><b>3</b></span>
        <span style={{ '--h': 6 }}><b>6</b></span>
        <span style={{ '--h': 9 }}><b>9</b></span>
        <span style={{ '--h': 12 }}><b>12</b></span>
      </div>
    </div>
  )
}

export default Clock