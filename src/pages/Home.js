import React from 'react';
import ImageSlider from '../components/ImageSlider/ImageSlider';
import TrendingTreks from '../components/TrendingTreks/TrendingTreks';
import CustomizedTrek from '../components/CustomizedTrek/CustomizedTrek';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';

const Home = () => (
    <div className="container">
        <ImageSlider />
        <div className="content">
            <TrendingTreks />
            <CustomizedTrek />
            <WhyChooseUs />
        </div>
    </div>
);

export default Home;