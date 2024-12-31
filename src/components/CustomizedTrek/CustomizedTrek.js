import React from 'react';
import CustomizeTrekImage from '../../assets/customize_trek.jpg';

const CustomizedTrek = ({ trek }) => {
    return (
        <>
            <div className="margin-top-20">
                <div className="section-content">
                    <span className="section-title">Customize Treks</span>
                </div>
            </div>
            <div className="flex">
                <img src={require('../../assets/vision.png')} alt="" width="120px" height="80px" />
                <p style={{ marginLeft: "10px" }}>Your vision, our expertise. Let's craft a trekking adventure that's truly unforgettable!</p>
            </div>
            <div className="trek-card">
                <img src={CustomizeTrekImage} alt="cutomized trek" height="600px" className="cutomized-trek"/>
            </div>
        </>

    );
};

export default CustomizedTrek;