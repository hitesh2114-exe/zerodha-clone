import React from 'react';
import "./Hero.css";

function Hero() {
    return (
        <div style={{ marginTop: "2rem" }}>
            <div className="container" style={{padding : "0 6rem 0 6rem"}}>
                <div className="row text-center" style={{ padding: "5rem 0 5rem 0" }}>
                    <h1 style={{ fontSize: "1.8rem" }}>Charges</h1>
                    <p style={{ fontSize: "1.4rem", color: "#9B9B9B" }}>List of all charges and taxes</p>
                </div>
                <div className="row" style={{marginTop : "6.8rem"}}>
                    <div className="col price-box">
                        <img style={{width : "69%"}} src="Media/image/pricingMF.svg" alt="image" />
                        <h1 style={{fontSize : "1.8rem",paddingTop : "1.6rem"}}>Free equity delivery</h1>
                        <p style={{fontSize : "1.08rem", padding : "1.6rem 1rem 0 1rem", color : "#666666"}}>
                            All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.
                        </p>
                    </div>
                    <div className="col price-box">
                        <img style={{width : "69%"}} src="Media/image/intradayTrades.svg" alt="image" />
                        <h1 style={{fontSize : "1.8rem", paddingTop : "1.6rem"}}>Intraday and F&O trades</h1>
                        <p style={{fontSize : "1.08rem", padding : "1.6rem 1rem 0 1rem", color : "#666666"}}>
                            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
                        </p>
                    </div>
                    <div className="col price-box">
                        <img style={{width : "69%"}} src="Media/image/pricingMF.svg" alt="image" />
                        <h1 style={{fontSize : "1.8rem",paddingTop : "1.6rem"}}>Free direct MF</h1>
                        <p style={{fontSize : "1.08rem", padding : "1.6rem 1rem 0 1rem", color : "#666666"}}>
                            All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;