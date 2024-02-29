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

        {/* <span style={{ '--h': 1 }}><b>1</b></span>
        <span style={{ '--h': 2 }}><b>2</b></span> */}
        <span style={{ '--h': 3 }}><b>3</b></span>
        {/* <span style={{ '--h': 4 }}><b>4</b></span>
        <span style={{ '--h': 5 }}><b>5</b></span> */}
        <span style={{ '--h': 6 }}><b>6</b></span>
        {/* <span style={{ '--h': 7 }}><b>7</b></span>
        <span style={{ '--h': 8 }}><b>8</b></span> */}
        <span style={{ '--h': 9 }}><b>9</b></span>
        {/* <span style={{ '--h': 10 }}><b>10</b></span>
        <span style={{ '--h': 11 }}><b>11</b></span> */}
        <span style={{ '--h': 12 }}><b>12</b></span>
{/*
        <span className='clock-dots' style={{ '--h': 1 }}><i>.</i></span>
        <span className='clock-dots' style={{ '--h': 1.2 }}><i>.</i></span>
        <span className='clock-dots' style={{ '--h': 1.4 }}><i>.</i></span>
        <span className='clock-dots' style={{ '--h': 1.6 }}><i>.</i></span>
        <span className='clock-dots' style={{ '--h': 1.8 }}><i>.</i></span>
        <span className='clock-dots' style={{ '--h': 2 }}><i>.</i></span>
        <span className='clock-dots' style={{ '--h': 2.2 }}><i>.</i></span>
        <span className='clock-dots' style={{ '--h': 2.4 }}><i>.</i></span>
        <span className='clock-dots' style={{ '--h': 2.6 }}><i>.</i></span>
        <span className='clock-dots' style={{ '--h': 2.8 }}><i>.</i></span>
        <span className='clock-dots' style={{ '--h': 3 }}><i>.</i></span>
        <span className='clock-dots' style={{ '--h': 3.2 }}><i>.</i></span>
        <span className='clock-dots' style={{ '--h': 3.4 }}><i>.</i></span>
        <span className='clock-dots' style={{ '--h': 3.6 }}><i>.</i></span>
        <span className='clock-dots' style={{ '--h': 3.8 }}><i>.</i></span>
        <span className='clock-dots' style={{ '--h': 4 }}><i>.</i></span>
        <span className='clock-dots' style={{ '--h': 4.2 }}><i>.</i></span>
        <span className='clock-dots' style={{ '--h': 4.4 }}><i>.</i></span>
        <span className='clock-dots' style={{ '--h': 4.6 }}><i>.</i></span>
        <span className='clock-dots' style={{ '--h': 4.8 }}><i>.</i></span>
        <span className='clock-dots' style={{ '--h': 5 }}><i>.</i></span>
        <span className='clock-dots' style={{ '--h': 5.2 }}><i>.</i></span>
        <span className='clock-dots' style={{ '--h': 5.4 }}><i>.</i></span>
        <span className='clock-dots' style={{ '--h': 5.6 }}><i>.</i></span>
        <span className='clock-dots' style={{ '--h': 5.8 }}><i>.</i></span>
        <span className='clock-dots' style={{ '--h': 6 }}><i>.</i></span>
        <span className='clock-dots' style={{ '--h': 6.2 }}><i>.</i></span>
        <span className='clock-dots' style={{ '--h': 6.4 }}><i>.</i></span>
        <span className='clock-dots' style={{ '--h': 6.6 }}><i>.</i></span>
        <span className='clock-dots' style={{ '--h': 6.8 }}><i>.</i></span>
        <span className='clock-dots' style={{ '--h': 7 }}><i>.</i></span>
        <span className='clock-dots' style={{ '--h': 7.2 }}><i>.</i></span>
        <span className='clock-dots' style={{ '--h': 7.4 }}><i>.</i></span>
        <span className='clock-dots' style={{ '--h': 7.6 }}><i>.</i></span>
        <span className='clock-dots' style={{ '--h': 7.8 }}><i>.</i></span>
        <span className='clock-dots' style={{ '--h': 8 }}><i>.</i></span>
        <span className='clock-dots' style={{ '--h': 8.2 }}><i>.</i></span>
        <span className='clock-dots' style={{ '--h': 8.4 }}><i>.</i></span>
        <span className='clock-dots' style={{ '--h': 8.6 }}><i>.</i></span>
        <span className='clock-dots' style={{ '--h': 8.8 }}><i>.</i></span>
        <span className='clock-dots' style={{ '--h': 9 }}><i>.</i></span>
        <span className='clock-dots' style={{ '--h': 9.2 }}><i>.</i></span>
        <span className='clock-dots' style={{ '--h': 9.4 }}><i>.</i></span>
        <span className='clock-dots' style={{ '--h': 9.6 }}><i>.</i></span>
        <span className='clock-dots' style={{ '--h': 9.8 }}><i>.</i></span>
        <span className='clock-dots' style={{ '--h': 10 }}><i>.</i></span>
        <span className='clock-dots' style={{ '--h': 10.2 }}><i>.</i></span>
        <span className='clock-dots' style={{ '--h': 10.4 }}><i>.</i></span>
        <span className='clock-dots' style={{ '--h': 10.6 }}><i>.</i></span>
        <span className='clock-dots' style={{ '--h': 10.8 }}><i>.</i></span>
        <span className='clock-dots' style={{ '--h': 11 }}><i>.</i></span>
        <span className='clock-dots' style={{ '--h': 11.2 }}><i>.</i></span>
        <span className='clock-dots' style={{ '--h': 11.4 }}><i>.</i></span>
        <span className='clock-dots' style={{ '--h': 11.6 }}><i>.</i></span>
        <span className='clock-dots' style={{ '--h': 11.8 }}><i>.</i></span>
        <span className='clock-dots' style={{ '--h': 12 }}><i>.</i></span>
        <span className='clock-dots' style={{ '--h': 12.2 }}><i>.</i></span>
        <span className='clock-dots' style={{ '--h': 12.4 }}><i>.</i></span>
        <span className='clock-dots' style={{ '--h': 12.6 }}><i>.</i></span>
        <span className='clock-dots' style={{ '--h': 12.8 }}><i>.</i></span>
         */}
      </div>
    </div>
  )
}

export default Clock