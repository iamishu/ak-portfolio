import React from 'react';
import "./intro.css";
import { Link } from 'react-scroll';
import bg from "../../Assets/bg-image.png";

const Intro = () => {
  return (
    <section id='intro'>
      <div className='introContent'>
        <span className='hello'>Hello,</span>
        <span className='introText'>I'm <span className='introName'>Ashish</span><br/> Website Designer</span>
        <p className='introPara'>
          I am a Web Developer.
        </p>
        <Link className='hireBtn'><button>Hire me</button></Link>
      </div>
      <div className='bg'>
        <img src={bg} alt='bg' />
      </div>
    </section>
  )
}

export default Intro