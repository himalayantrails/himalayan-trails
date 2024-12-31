import React from 'react';

const Iternary = ({ shortItinerary }) => (
  <div className="itinerary-container">
    {shortItinerary.map((itinerary, index) => (
      <div key={index}>
        <ul>
          {Object.entries(itinerary).map(([day, description]) => (
            <li key={day}>
              <strong style={{fontSize: "1rem"}}>{day}: </strong>
              {description.split('|').map((desc, idx) => (
                idx === 0 ? (
                  <span key={idx} dangerouslySetInnerHTML={{ __html: desc }} />
                ) : (
                  <div key={idx} className="margin-top-10" dangerouslySetInnerHTML={{ __html: desc }} />
                )
              ))}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

export default Iternary;
