import React, { useState } from 'react';
import './TrendingTreks.css';
import TrekCard from '../TrekCard/TrekCard';

const trendingTreks = [
  { id: 1, name: 'Kedarkantha Trek', image: require('../../assets/trendingTreks/kedarkantha.jpg'), summary: 'A beautiful winter trek in the Himalayas.' },
  { id: 2, name: 'Har Ki Dun Trek', image: require('../../assets/trendingTreks/brahmatal.jpg'), summary: 'A scenic trek in the Garhwal Himalayas.' },
  { id: 3, name: 'Brahmatal Trek', image: require('../../assets/trendingTreks/harkidun.jpg'), summary: 'A picturesque trek with stunning views.' },
  { id: 4, name: 'SarPass Trek', image: require('../../assets/trendingTreks/sarpass.jpg'), summary: 'A picturesque trek with stunning views.' },
];

const TrendingTreks = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesPerPage = window.innerWidth <= 768 ? 1 : 3;
  const totalPages = Math.ceil(trendingTreks.length / slidesPerPage);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
  };

  return (
    <>
      <div className="section-header">
        <h2 className='section-title glowing-text'>Trending Treks</h2>
        <div className="line"></div>
      </div>
      <div className="card-slider-container">
        <button className="prev" onClick={prevSlide}>&#10094;</button>
        <div className="card-slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {trendingTreks.map((trek, index) => (
            <TrekCard trek={trek} style={{ flex: `0 0 ${100 / slidesPerPage}%` }} overlayCss="treding-card-overlay" cardCss="trending-card"/>
          ))}
        </div>
        <button className="next" onClick={nextSlide}>&#10095;</button>
      </div>
    </>
  );
};

export default TrendingTreks;