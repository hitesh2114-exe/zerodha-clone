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
        </div>
    );
}

export default SignUp;