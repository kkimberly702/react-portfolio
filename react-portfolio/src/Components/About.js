import React from 'react';
import Home from '../Components/Home';
import { Link } from 'react-router-dom'

function About() {
  return (
    <div>About me!
        <p> I am a software developer living in Las Vegas, Nevada. I did a coding bootcamp.</p>
        <Link to="/" element={<Home />}>Home</Link>
    </div>
  )
}

export default About;