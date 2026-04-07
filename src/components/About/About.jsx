import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className="about" id='about'>

      <div className="about-badge">Who We Are</div>
      <h1 className="about-title">About Eat&Repeat</h1>
      <p className="about-intro">
        "Eat&Repeat delivers your favorite meals fresh and fast — right to your doorstep, every time."
      </p>

      <div className="about-cards">
        <div className="about-card">
          <div className="about-card-icon">🎯</div>
          <h2>Our Mission</h2>
          <p>To support local kitchens while providing customers with a seamless food ordering experience.</p>
        </div>

        <div className="about-card">
          <div className="about-card-icon">📖</div>
          <h2>Our Story</h2>
          <p>Our journey began with a simple idea — to make delicious food more accessible and enjoyable for everyone.
            From local kitchens to your doorstep, we deliver comfort, convenience, and unforgettable flavors.</p>
        </div>

        <div className="about-card">
          <div className="about-card-icon">🤝</div>
          <h2>Get Involved</h2>
          <p>Connect with us through our <a href="/contact">contact page</a> or follow us online.</p>
        </div>
      </div>

      <div className="about-stats">
        <div className="stat">
          <span className="stat-number">50K+</span>
          <span className="stat-label">Happy Customers</span>
        </div>
        <div className="stat-divider"></div>
        <div className="stat">
          <span className="stat-number">200+</span>
          <span className="stat-label">Local Restaurants</span>
        </div>
        <div className="stat-divider"></div>
        <div className="stat">
          <span className="stat-number">30 min</span>
          <span className="stat-label">Avg. Delivery Time</span>
        </div>
        <div className="stat-divider"></div>
        <div className="stat">
          <span className="stat-number">4.8★</span>
          <span className="stat-label">Average Rating</span>
        </div>
      </div>

    </div>
  )
}

export default About