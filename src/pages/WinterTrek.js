import React from 'react';
import { useNavigate } from 'react-router-dom';
import TrekCard from '../components/TrekCard/TrekCard';

const winterTreks = [
  { id: 1, name: 'Beas Kund Trek', trekDetail: 'beasKund', image: require('../assets/winterTreks/beaskund.png'), summary: 'A beautiful winter trek in the Himalayas.' }
];

const WinterTrek = () => {
  const navigate = useNavigate();
  const handleImageClick = (trekDetail) => {
    navigate(`/trekDetail/${trekDetail}`);
  };
  return (
    <div className="container">
      <div className="content">
        <h1 className='text-align-center'>Winter Treks</h1>
        <div className="row">
          {winterTreks.map(trek => (
            <div key={trek.id} className="col-4 col-md-6 col-sm-12 align-items-center" onClick={() => handleImageClick(trek.trekDetail)}>
              <TrekCard trek={trek} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
};

export default WinterTrek;