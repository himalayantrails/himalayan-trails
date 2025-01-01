import React from 'react';

const WhyChooseUs = () => {
    return (
        <div className='align-items-center'>
            <div className="margin-top-20">
                <div className="section-content">
                    <span className="section-title">Why Choose Us</span>
                </div>
            </div>
            <div>
                <ul>
                    <li><strong>Expert Guidance:</strong> Experienced guides ensure your safety and enhance your journey.</li>
                    <li><strong>Tailored Adventures:</strong> Create your dream trek with our customizable itineraries.</li>
                    <li><strong>Unforgettable Experiences:</strong> Explore breathtaking landscapes and immerse yourself in local culture.</li>
                    <li><strong>Safety First:</strong> Prioritize safety with our experienced team and comprehensive support.</li>
                    <li><strong>Customer Focus:</strong> Personalized service and dedicated support every step of the way.</li>
                </ul>
            </div>

            <div className="row">
                <iframe
                    width="400"
                    height="400"
                    className="margin-bottom-20 col-md-4 col-sm-12"
                    src="https://www.youtube.com/embed/LA_lV-6JND8" title="Basic Sking Course 2023 | ABVIMAS MANALI, SUB Centre Jispa" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                </iframe>
                <iframe
                    width="400"
                    height="400"
                    className="margin-bottom-20 col-md-4 col-sm-12"
                    src="https://www.youtube.com/embed/Gyq1V6vXVDA" title="Alpine Style Friendship Peak Expedition | MANALI |HIMACHAL PRADESH" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                </iframe>
            </div>
        </div>
    );
};

export default WhyChooseUs;