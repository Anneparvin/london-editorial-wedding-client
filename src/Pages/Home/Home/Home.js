import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import TopImage from '../TopImage/TopImage';
import Divider from '../Divider/Divider';
import useTitle from '../../../hooks/useTitle';


const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <TopImage></TopImage>
            <Divider></Divider>
            <Services></Services>
        </div>
    );
};

export default Home;