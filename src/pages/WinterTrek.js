// src/pages/WinterTrek.js
import React from 'react';
import TrekCard from '../components/TrekCard/TrekCard';

const winterTreks = [
  { id: 1, name: 'Kedarkantha Trek', image: require('../assets/winterTreks/kedarkantha.jpg'), summary: 'A beautiful winter trek in the Himalayas.' },
  { id: 2, name: 'Har Ki Dun Trek', image: require('../assets/winterTreks/harkidun.jpg'), summary: 'A scenic trek in the Garhwal Himalayas.' },
  { id: 3, name: 'Brahmatal Trek', image: require('../assets/winterTreks/brahmatal.jpg'), summary: 'A picturesque trek with stunning views.' },
  { id: 4, name: 'SarPass Trek', image: require('../assets/winterTreks/sarpass.jpg'), summary: 'A picturesque trek with stunning views.' },
];
const WinterTrek = () => (
  <div className="container">
    <div className="content">
      <h1 className='text-align-center'>Winter Treks</h1>
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

export default WinterTrek;