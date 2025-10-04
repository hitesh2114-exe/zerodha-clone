import React from 'react';
import "./Varsity.css";

function Varsity() {
    return ( 
        <div className="container container-varsity">
            <div className="row">
                <div className="col col-6 varsity-image">
                    <img src="Media/image/education.svg" alt="varsity image" className='var-img'/>
                </div>
                <div className="col col-6 varsity-text">
                    <h2 style={{ fontSize: "1.6rem" }} className='mb-4'>Free and open market education</h2>
                    <p style={{ fontSize: "1.1rem" }}>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href="/" style={{textDecoration : "none"}}>Varsity<i class="fa-solid fa-arrow-right arrow-pricing"></i></a>
                    <p style={{ fontSize: "1.1rem" }} className='mt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href="/" style={{textDecoration : "none"}}>TradingQ&A<i class="fa-solid fa-arrow-right arrow-pricing"></i></a>
                </div>
            </div>
        </div>
     );
}

export default Varsity;