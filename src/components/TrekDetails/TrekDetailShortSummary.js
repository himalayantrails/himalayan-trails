import React from 'react';

const TrekDetailShortSummary = ({ image, detail, title }) => {
  return (
    detail && (
      <div className="col-2 col-md-3 col-sm-6 flex trek-detail-short-summary">
        {image && <img src={image} alt="region" width="50px" height="50px" />}
        {title ? (
          <strong className="margin-top-10">
            {title}:&nbsp;{detail}
          </strong>
        ) : (
          <strong className="margin-top-10">{detail}</strong>
        )}
      </div>
    )
  );
};

export default TrekDetailShortSummary;