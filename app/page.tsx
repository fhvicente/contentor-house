import React from 'react';
import Header from './components/header';
import Features from './components/features';
import FeaturesSecond from './components/features-second';
import FeaturesThird from './components/features-third';
import ShelterList from './components/shelter';
import Testimonials from './components/testimonials';


const HomePage: React.FC = () => {
    return (
        <>
            <Header />
            <Features />
            <ShelterList />
            <FeaturesSecond />
            <FeaturesThird />
            <Testimonials />
        </>
    );
};

export default HomePage;