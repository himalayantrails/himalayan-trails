import React from 'react';
import { useNavigate } from 'react-router-dom';
import TrekCard from '../components/TrekCard/TrekCard';

const summerTreks = [
  { id: 1, name: 'Bhrigu Lake Trek', trekDetail: 'bhriguLake', image: require('../assets/summerTreks/bhrigulake.jpg'), summary: 'A picturesque trek with stunning views.' },
  { id: 1, name: 'Kheerganga Trek', trekDetail: 'kheerganga', image: require('../assets/trek-details/kheerganga.jpg'), summary: 'A picturesque trek with stunning views.' }
];

const SummerTrek = () => {
  const navigate = useNavigate();
  const handleImageClick = (trekDetail) => {
    navigate(`/trekDetail/${trekDetail}`);
  };
  return (
  <div className="container">
    <div className="content">
      <h1 className='text-align-center'>Summer Treks</h1>
      <div className="row">
        {summerTreks.map(trek => (
          <div key={trek.id} className="col-4 col-md-6 col-sm-12 align-items-center" onClick={() => handleImageClick(trek.trekDetail)}>
            <TrekCard trek={trek} />
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default SummerTrek;