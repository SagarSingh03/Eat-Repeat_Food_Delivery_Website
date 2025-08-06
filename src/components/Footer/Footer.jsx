import React from 'react'
import './Footer.css';

function Footer() {
  return (
    <>
    <div className="footer">
      <div className="Footer">
        <div className="Left">
          <h2>Eat&Repeat</h2>
          <p>Delicious food delivered fast, fresh, and hot — straight to your doorstep. <br />
            Whether it’s breakfast, lunch, dinner, or a midnight snack, <br />
            we’re here to satisfy your cravings anytime, anywhere. Eat happy!</p>
        </div>


        <div className="center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>


        <div className="Right">
          <h1>Subscribe to our newsletter</h1>
          <p>The tastiest deals, newest dishes, and kitchen stories — <br />
            delivered to your inbox weekly.</p>
          <div className="subscribe">
            <input className="email" type="text" placeholder="Enter your email" required />
            <button className="button">Subscribe</button>
          </div>
        </div>

      </div>

      <hr className="hr"/>

      
        <div className="footer-bottom">
          {/* <hr className="footer-line" /> */}
          <p>Copyright 2025 © Eat&Repeat. All Rights Reserved.</p>
        </div>
        </div>
      

    </>
  )
}

export default Footer;
