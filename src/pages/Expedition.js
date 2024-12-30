// src/pages/WinterTrek.js
import React from 'react';
import TrekCard from '../components/TrekCard/TrekCard';

const winterTreks = [
  { id: 1, name: 'Friendship Peak', image: require('../assets/expedition/friendshippeak.jpeg'), summary: 'A beautiful winter expedition in the Himalayas.' }
];
const Expedition = () => (
  <div className="container">
    <div className="content">
      <h1 className='text-align-center'>Expedition</h1>
      <div className="row">
        {winterTreks.map(trek => (
          <div key={trek.id} className="col-4 col-md-6 col-sm-12 align-items-center">
            <TrekCard trek={trek} />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Expedition;