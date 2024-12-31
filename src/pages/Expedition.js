import React from 'react';
import { useNavigate } from 'react-router-dom';
import TrekCard from '../components/TrekCard/TrekCard';

const expeditions = [
  { id: 1, name: 'Friendship Peak', trekDetail: 'friendshipPeak', image: require('../assets/expedition/friendshippeak.jpeg'), summary: 'A beautiful winter expedition in the Himalayas.' }
];

const Expedition = () => {
  const navigate = useNavigate();
  const handleImageClick = (trekDetail) => {
    navigate(`/trekDetail/${trekDetail}`);
  };

  return (
    <div className="container">
      <div className="content">
        <h1 className="text-align-center">Expedition</h1>
        <div className="row">
          {expeditions.map((trek) => (
            <div key={trek.id} className="col-4 col-md-6 col-sm-12 align-items-center" onClick={() => handleImageClick(trek.trekDetail)}>
              <TrekCard trek={trek} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Expedition;
