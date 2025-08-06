import React from 'react';
import './Navbar.css';
import { Link as ScrollLink } from 'react-scroll';
import { useNavigate, useLocation } from 'react-router-dom';

function Navbar() {

  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigationAndScroll = (target) => {
    if (location.pathname !== '/') {
      navigate('/', { replace: false });
      sessionStorage.setItem('scrollTo', target);
    }
  };

  return (
    <div className="Navbar">
      <div className="nav-logo">Eat&Repeat</div>

      <ul className="nav-menu">

        <li>
          {location.pathname === '/' ? (
            <ScrollLink to="home" smooth={true} duration={500} offset={-80}>Home</ScrollLink>
          ) : (
            <span onClick={() => handleNavigationAndScroll('home')}>Home</span>
          )}
        </li>

        <li>
          {location.pathname === '/' ? (
            <ScrollLink to="menu" smooth={true} duration={500} offset={-80}>Menu</ScrollLink>
          ) : (
            <span onClick={() => handleNavigationAndScroll('menu')}>Menu</span>
          )}
        </li>

        <li>
          {location.pathname === '/' ? (
            <ScrollLink to="about" smooth={true} duration={500} offset={-80}>About</ScrollLink>
          ) : (
            <span onClick={() => handleNavigationAndScroll('about')}>About</span>
          )}
        </li>

        <li>
          {location.pathname === '/' ? (
            <ScrollLink to="contact" smooth={true} duration={500} offset={-80}>Contact</ScrollLink>
          ) : (
            <span onClick={() => handleNavigationAndScroll('contact')}>Contact</span>
          )}
        </li>

        <li className="nav-cart">
          <span onClick={() => navigate("/cart")}>Cart</span>
        </li>

        <li className="nav-login">
          <span onClick={() => navigate("/login")}>Login</span>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;



