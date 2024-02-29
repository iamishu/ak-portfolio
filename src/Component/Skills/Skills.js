import React from 'react';
import "./skills.css";
import { Link } from 'react-scroll';

const Skills = () => {
  return (
    <section id='skills'>
      <span className='skillTitle'>What I do</span>
      <span className='skillDesc'>I am a skilled and passionate web designer.</span>
      <div className='skillBars'>
        <div className='skillBar'>
          <div className='skillBarText'>
            <h2></h2>
            <p></p>
          </div>
        </div>
        <div className='skillBar'>
          <div className='skillBarText'>
            <h2></h2>
            <p></p>
          </div>
        </div>
        <div className='skillBar'>
          <div className='skillBarText'>
            <h2></h2>
            <p></p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills