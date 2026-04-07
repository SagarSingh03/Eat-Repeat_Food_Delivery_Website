import React, { useState } from 'react';
import './Navbar.css';
import { Link as ScrollLink } from 'react-scroll';
import { useNavigate, useLocation } from 'react-router-dom';

const NAV_ITEMS = [
  { label: 'Home', target: 'home' },
  { label: 'Menu', target: 'menu' },
  { label: 'About', target: 'about' },
  { label: 'Contact', target: 'contact' },
];

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigationAndScroll = (target) => {
    setMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      sessionStorage.setItem('scrollTo', target);
    }
  };

  return (
    <div className="Navbar">
      <div className="nav-logo">Eat&amp;Repeat</div>

      <button
        className={`nav-hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(prev => !prev)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>

      <ul className={`nav-menu ${menuOpen ? 'nav-menu--open' : ''}`}>
        {NAV_ITEMS.map(({ label, target }) => (
          <li key={target}>
            {location.pathname === '/' ? (
              <ScrollLink
                to={target}
                smooth={true}
                duration={500}
                offset={-80}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </ScrollLink>
            ) : (
              <span onClick={() => handleNavigationAndScroll(target)}>{label}</span>
            )}
          </li>
        ))}

        <li className="nav-cart">
          <span onClick={() => { navigate('/cart'); setMenuOpen(false); }}>Cart</span>
        </li>
        <li className="nav-login">
          <span onClick={() => { navigate('/login'); setMenuOpen(false); }}>Login</span>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;