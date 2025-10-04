import React from 'react';

function Hero() {
    return ( 
        <div style={{marginTop : "7.5rem"}}>

        <div className="container">
            <div className="row text-center" style={{paddingTop : "2.7rem"}}>
                <h1 style={{ fontSize : "1.8rem"}}>Zerodha Products</h1>
                <p style={{fontSize : "1.3rem", marginTop : "0.5rem"}}>Sleek, modern, and intuitive trading platforms</p>
                <p style={{fontSize : "1.09rem"}}>Check out our <a href="/" style={{textDecoration : "none"}}>investment offerings <i class="fa-solid fa-arrow-right" style={{paddingLeft : "0.1rem"}}></i></a></p>
                <div style={{paddingLeft : "7rem", paddingRight : "7rem"}}><hr style={{marginTop : "6.5rem", color : "#9B9B9B"}}/></div>
            </div>
            
        </div>

        </div>
     );
}

export default Hero;