import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import instagram from '../assets/instagram.webp';
import facebook from '../assets/facebook.svg';
import mail from '../assets/mail.png';
import whatsapp from '../assets/whatsapp.png';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const phoneNumber = "+919817875521";
  const message = "Hello! I am looking for a trek.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="header-container">
      <div className="logo-container">
        <img src={logo} alt="Company Logo" className="logo" onClick={() => navigate('/')} />
        <div>
          <h2 className="margin-bottom-0">Wild Frontier Explorers</h2>
          <div className="menu-icons col-sm-12 col-xs-10">
            <a href="https://www.instagram.com/wild_frontier_explorers/profilecard/?igsh=MXRkc3lmMWI5dWsxMA==" target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="Instagram" className="social-media" />
            </a>

            <a href="https://facebook.com/prashant.thakur.942" target="_blank" rel="noopener noreferrer">
              <img src={facebook} alt="Facebook" width="30px" height="30px" style={{ marginTop: "10px", marginRight: "20px" }} />
            </a>

            <a href="mailto:support@example.com" target="_blank" rel="noopener noreferrer">
              <img src={mail} alt="mail" width="35px" height="35px" style={{ marginTop: "8px", marginRight: "20px" }} />
            </a>

            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <img src={whatsapp} alt="whatsapp" width="30px" height="30px" style={{ marginTop: "10px", marginRight: "15px" }} />
            </a>

            <span className="menu-icon" onClick={toggleMenu}>
              {menuOpen ? '✖' : '☰'}
            </span>
          </div>
        </div>
      </div>
      <div className="menu">
        <nav className={`menu-links ${menuOpen ? 'active' : ''}`}>
          <Link to="/" className="menu-item" onClick={toggleMenu}>Home</Link>
          <Link to="/winter-trek" className="menu-item" onClick={toggleMenu}>Winter Trek</Link>
          <Link to="/summer-trek" className="menu-item" onClick={toggleMenu}>Summer Trek</Link>
          <Link to="/expedition" className="menu-item" onClick={toggleMenu}>Expedition</Link>
          <Link to="/contact-us" className="menu-item" onClick={toggleMenu}>Contact Us</Link>
        </nav>

      </div>
    </div>
  );
};

export default Header;
