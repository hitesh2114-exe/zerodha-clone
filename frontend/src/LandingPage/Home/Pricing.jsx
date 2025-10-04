import React from 'react';
import "./Pricing.css";

function Pricing() {
    return (
        <div className="container container-pricing">
            <div className='row'>
                <div className="col col-5 col-pricing">
                    <h2 className='mb-4' style={{ fontSize: "1.6rem" }}>Unbeatable pricing</h2>
                    <p style={{ fontSize: "1.1rem" }}>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                </div>
                <div className='col col-image-pricing'>
                    <div className="row row-pricing-image">
                        <div className="col col-img">
                            <img src="Media/image/pricing0.svg" alt="pricing image" className='price-image' />
                            <p className='para-pricing'>Free account opening</p>
                        </div>
                        <div className="col col-img" >
                            <img src="Media/image/pricingEquity.svg" alt="pricing image" className='price-image' />
                            <p className='para-pricing'>Free equity delivery and direct mutual funds</p>
                        </div>
                        <div className="col col-img">
                            <img src="Media/image/intradayTrades.svg" alt="pricing image" className='price-image' />
                            <p className='para-pricing'>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <a href="/" style={{ textDecoration: "none", fontWeight: "500" }}>See pricing <i class="fa-solid fa-arrow-right arrow-pricing"></i></a>
                </div>
            </div>

        </div>
    );
}

export default Pricing;