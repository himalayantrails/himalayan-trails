import React from 'react';

const TrekCard = ({ trek, style, overlayCss, cardCss, handleImageClick}) => {
  return (
    <div className={`${"card"} ${cardCss}`} key={trek.id} style={style} onClick={handleImageClick}>
      <img src={trek.image} alt={trek.name} />
      <div className={`${"overlay"} ${overlayCss}`}>
        <h3>{trek.name}</h3>
        <p>{trek.summary}</p>
      </div>
    </div>
  );
};

export default TrekCard;