import React from 'react';
import Hero from './Hero';
import Price from './Price';
import Table from './Table';
import Charges from './Charges';
import Demate from './Demat';
import ChargesExplained from './ChargesExplained';
import Options from './Options';
import NavBar from '../NavBar';
import Footer from '../Footer';

function Pricing() {
    return (
        <>
            <h1>Pricing</h1>
            
            <Hero />
            {/* <Price />
            <Table /> */}
            <Charges/>
            <Demate/>
            <Options/>
            <ChargesExplained/>
            
        </>
    );
}

export default Pricing;