import React from 'react';
import CustomizeTrekImage from '../../assets/customize_trek.jpg';

const CustomizedTrek = ({ trek }) => {
    return (
        <>
            <div className="section-header margin-bottom-1">
                <div className="section-content">
                    <span className="section-title">Customize Treks</span>
                </div>
            </div>
            <p>Your vision, our expertise. Let's craft a trekking adventure that's truly unforgettable !</p>
            <div className="trek-card">
                <img src={CustomizeTrekImage} alt="" width="600px" height="600px" />
            </div>
        </>

    );
};

export default CustomizedTrek;