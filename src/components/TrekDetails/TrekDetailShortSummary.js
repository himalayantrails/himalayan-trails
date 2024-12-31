import React from 'react';

const TrekDetailShortSummary = ({ image,  detail}) => (
  <div className="col-2 col-md-3 col-sm-4 align-items-center">
    <img src={image} alt='region' width="50px" height="50px" />
    <div>{detail}</div>
  </div>
);

export default TrekDetailShortSummary;