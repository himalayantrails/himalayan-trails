import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TrekCard from '../TrekCard/TrekCard';
import './TrendingTreks.css';

const trendingTreks = [
  { id: 1, name: 'Friendship Peak', trekDetail: 'friendshipPeak', image: require('../../assets/expedition/friendshippeak.jpeg'), summary: 'A beautiful winter expedition in the Himalayas.' },
  { id: 2, name: 'Beas Kund Trek', trekDetail: 'beasKund', image: require('../../assets/winterTreks/beaskund.png'), summary: 'A scenic trek in the stunning Himalayas.' },
  { id: 3, name: 'Bhrigu Lake Trek', trekDetail: 'bhriguLake', image: require('../../assets/summerTreks/bhrigulake.png'), summary: 'A picturesque trek with stunning views.' }
];

const TrendingTreks = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesPerPage = window.innerWidth <= 768 ? 1 : 3;
  const totalPages = Math.ceil(trendingTreks.length / slidesPerPage);

  const handleImageClick = (trekDetail) => {
    navigate(`/trekDetail/${trekDetail}`);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
  };

  return (
    <>
      <div className="section-content">
        <h2 className='section-title glowing-text'>Trending Treks</h2>
      </div>
      <div className="line"></div>
      <div className="card-slider-container">
        <button className="prev" onClick={prevSlide}>&#10094;</button>
        <div className="card-slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {trendingTreks.map((trek, index) => (
            <TrekCard key={index}
              style={{ flex: `0 0 ${100 / slidesPerPage}%` }}
              trek={trek}
              overlayCss="treding-card-overlay"
              cardCss="trending-card"
              handleImageClick={() => handleImageClick(trek.trekDetail)}
            />
          ))}
        </div>
        <button className="next" onClick={nextSlide}>&#10095;</button>
      </div>
    </>
  );
};

export default TrendingTreks;