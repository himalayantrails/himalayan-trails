import React from 'react';
import CustomizeTrekImage from '../../assets/customize_trek1.webp';
import './CustomizedTrek.css';

const CustomizedTrek = () => {
    return (
        <div className='align-items-center'>
            <div className="margin-top-20">
                <div className="section-content">
                    <span className="section-title">Customize Treks</span>
                </div>
            </div>
            <div className="flex">
                <img src={require('../../assets/vision.png')} alt="" width="110px" height="70px" />
                <p className="margin-left-10">
                    Your vision, our expertise. Let's craft a trekking adventure that's truly unforgettable
                </p>
            </div>
            <div className="cutomized-trek-card">
                <img src={CustomizeTrekImage} alt="cutomized trek" height="400px"/>
            </div>
        </div>
    );
};

export default CustomizedTrek;