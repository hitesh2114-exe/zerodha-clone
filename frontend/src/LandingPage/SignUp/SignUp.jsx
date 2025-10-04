import React from 'react';
import OpenFreeDemate from './OpenFreeDemate';
import SignUpNow from './SignUpNow';
import InvestmentOptions from './InvestmentOptions';
import Steps from './Steps';
import Benefits from './Benefits';
import Explore from './Explore';
import FAQs from './FAQs';

function SignUp() {
    return (
        <div style={{marginTop : "5rem"}}>
            <OpenFreeDemate />
            <SignUpNow />
            {/* <InvestmentOptions />
            <Steps />
            <Benefits />
            <Explore />
            <FAQs /> */}
        </div>
    );
}

export default SignUp;