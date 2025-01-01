import React from 'react';

const TrekCard = ({ trek, handleImageClick}) => {
  return (
    <div>
    <div className="card front-card" key={trek.id} onClick={handleImageClick}>
      <img src={trek.image} alt={trek.name} width="300" height="400" className="sec2_img"/>
      <div className="overlay">
        <div>{trek.name}</div>
      </div>
    </div>
    </div>
  );
};

export default TrekCard;