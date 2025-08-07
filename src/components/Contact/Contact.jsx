import React from 'react';
import './Contact.css';
import background from '../../assets/Contact-bg.jpg';



function Contact() {
  return (
    <div>

      <div className="contact-section" id='contactHiDo' style={{ backgroundImage: `url(${background})` }}>

        <div className="contact-overlay">
          <h1 className="contact-title" id="contact">Contact Us</h1>
          <p className="contact-subtext">"Craving connection? Let's talk!"</p>
          <p className="contact-subtext">Whether it's feedback, a question, or a complaint — we're here to listen.</p>

          <div className="contact-info">
            <p><strong>Email:</strong> Eat&Repeat@gmail.com</p>
            <p><strong>Phone:</strong> +91 74390 7*658</p>
            <p><strong>Address:</strong> North Carolina, City Of Blue Skies, Andaman Islands</p>
          </div>

          <div className="contact-socials">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="https://instagram.com/EatAndRepeat" target="_blank">Instagram</a>
              <a href="https://twitter.com/EatAndRepeat" target="_blank">Twitter</a>
              <a href="https://facebook.com/EatAndRepeat" target="_blank">Facebook</a>
              <a href="https://youtube.com/EatAndRepeat" target="_blank">YouTube</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;


