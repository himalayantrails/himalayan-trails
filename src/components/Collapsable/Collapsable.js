import React, { useState } from 'react';
import './Collapsible.css';

const Collapsible = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapsible-container">
      <div className="collapsible-header" onClick={toggleCollapse}>
        <h3>{title}</h3>
        <button className="toggle-button">{isOpen ? '-' : '+'}</button>
      </div>
      <div className={`collapsible-content ${isOpen ? 'open' : 'closed'}`}>
        {children}
      </div>
    </div>
  );
};

export default Collapsible;
