// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header-container">
      <div className="logo-container">
        <img src={logo} alt="Company Logo" className="logo" />
        <h1>Himalayan Trails</h1>
      </div>
      <div className="menu">
        <span className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? '✖' : '☰'}
        </span>
        <nav className={`menu-links ${menuOpen ? 'active' : ''}`}>
          <Link to="/" className="menu-item" onClick={toggleMenu}>Home</Link>
          <Link to="/winter-trek" className="menu-item" onClick={toggleMenu}>Winter Trek</Link>
          <Link to="/summer-trek" className="menu-item" onClick={toggleMenu}>Summer Trek</Link>
          <Link to="/expedition" className="menu-item" onClick={toggleMenu}>Expedition</Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;