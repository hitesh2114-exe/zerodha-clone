import React from 'react';
import Hero from './Hero';
import Features from './Features';
import Pricing from './Pricing';
import Varsity from './Varsity';
import Footer from '../Footer';
import OpenAccount from '../OpenAccount';
import NavBar from '../NavBar';

function HomePage() {
    return (
        <>
            <Hero />
            <Features/>
            <Pricing/>
            <Varsity />
            <OpenAccount />
        </>

    );
}

export default HomePage;