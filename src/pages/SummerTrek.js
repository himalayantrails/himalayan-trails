import React from 'react';
import TrekCard from '../components/TrekCard/TrekCard';

const summerTreks = [
  { id: 1, name: 'Roopkund Trek', image: require('../assets/summerTreks/roopkund.jpg'), summary: 'A beautiful summer trek in the Himalayas.' },
  { id: 2, name: 'Valley of Flowers Trek', image: require('../assets/summerTreks/valleyofflowers.jpeg'), summary: 'A scenic trek in the Garhwal Himalayas.' },
  { id: 3, name: 'Kashmir Great Lakes Trek', image: require('../assets/summerTreks/kashmirgreatlake.jpeg'), summary: 'A picturesque trek with stunning views.' },
  { id: 4, name: 'Bhrigu Lake Trek', image: require('../assets/summerTreks/bhrigulake.jpeg'), summary: 'A picturesque trek with stunning views.' },
];
const SummerTrek = () => (
  <div className="container">
    <div className="content">
      <h1 className='text-align-center'>Summer Treks</h1>
      <div className="row">
        {summerTreks.map(trek => (
          <div key={trek.id} className="col-4 col-md-6 col-sm-12 align-items-center">
            <TrekCard trek={trek} />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default SummerTrek;