// src/components/TrekSummary.js
import React from 'react';
import { Link } from 'react-router-dom';


const TrekSummary = ({ trek }) => (
  <Link to={`/trek/${trek.id}`} className="trek-card">
    <h2>{trek.name}</h2>
    <p>{trek.summary}</p>
  </Link>
);

export default TrekSummary;