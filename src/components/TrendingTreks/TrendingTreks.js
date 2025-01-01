import React, {useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import TrekCard from '../TrekCard/TrekCard';
import './TrendingTreks.css';

const trendingTreks = [
  { id: 1, name: 'Friendship Peak', trekDetail: 'friendshipPeak', image: require('../../assets/expedition/friendshippeak.jpeg'), summary: 'A beautiful winter expedition in the Himalayas.' },
  { id: 2, name: 'Beas Kund Trek', trekDetail: 'beasKund', image: require('../../assets/winterTreks/beaskund.png'), summary: 'A scenic trek in the stunning Himalayas.' },
  { id: 3, name: 'Bhrigu Lake Trek', trekDetail: 'bhriguLake', image: require('../../assets/summerTreks/bhrigulake.jpg'), summary: 'A picturesque trek with stunning views.' }
];

const TrendingTreks = () => {
  const navigate = useNavigate();
  const handleImageClick = (trekDetail) => {
    navigate(`/trekDetail/${trekDetail}`);
  };

  const sliderRef = useRef(null);

  const moveRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 100, behavior: "smooth" });
    }
  };

  const moveLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -100, behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="section-content">
        <h2 className='section-title glowing-text'>Trending Treks</h2> 
      </div>
      <div className="p-relative">
        <div className='slider-container' ref={sliderRef}>
          {trendingTreks.map((trek, index) => (
            <TrekCard key={index}
              trek={trek}
              handleImageClick={() => handleImageClick(trek.trekDetail)}
            />
          ))}
        </div>
        <button className="slider-btn slider-btn-left" onClick={moveLeft}>&#10094;</button>
        <button className="slider-btn slider-btn-right" onClick={moveRight}>&#10095;</button>
      </div>
    </>
  );
};

export default TrendingTreks;