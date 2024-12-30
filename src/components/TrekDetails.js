// src/components/TrekDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

const TrekDetails = ({ treks }) => {
  const { id } = useParams();
  const trek = treks.find(t => t.id === parseInt(id));

  if (!trek) return <p>Trek not found</p>;

  return (
    <div>
      <h2>{trek.name}</h2>
      <p>{trek.details}</p>
    </div>
  );
};

export default TrekDetails;