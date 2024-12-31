import React from 'react';
import ImageSlider from '../components/ImageSlider/ImageSlider';
import TrendingTreks from '../components/TrendingTreks/TrendingTreks';
import CustomizedTrek from '../components/CustomizedTrek/CustomizedTrek';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';

const Home = () => (
    <div className="container">
        <div className="content">
            <ImageSlider />
        </div>
        <TrendingTreks />
        <CustomizedTrek />
        <WhyChooseUs />
    </div>
);

export default Home;