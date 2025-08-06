import React from 'react'
import './About.css'
const About = () => {
  return (
    <div className="about" id='about'>
      <h1>About Eat&Repeat </h1>
      <p className="intro">
        "Eat&Repeat delivers your favorite meals fresh and fast — right to your doorstep, every time."
      </p>

      <div className="about-section">
        <h2>Our Mission</h2>
        <p>To support local kitchens while providing customers with a seamless food ordering experience.</p>
      </div>

      <div className="about-section">
        <h2>Our Story</h2>
        <p>Our journey began with a simple idea — to make delicious food more accessible and enjoyable for everyone.
          From local kitchens to your doorstep, <br /> we’re here to deliver comfort, convenience, and unforgettable flavors.</p>
      </div>

      <div className="about-section">
        <h2>Get Involved</h2>
        <p>Connect with us through our <a href="/contact">contact page</a> or follow us online.</p>
      </div>
    </div>
  )
}

export default About


