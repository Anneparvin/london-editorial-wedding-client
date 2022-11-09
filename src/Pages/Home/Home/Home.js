import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import TopImage from '../TopImage/TopImage';

const Home = () => {
    return (
        <div>
            <TopImage></TopImage>
            <Banner></Banner>
            <Services></Services>
        </div>
    );
};

export default Home;