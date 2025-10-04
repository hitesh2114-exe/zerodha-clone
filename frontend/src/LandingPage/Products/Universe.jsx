import React from 'react';
import "./Universe.css";

function Universe() {
    return (
        <div>
            <div className="container text-center" style={{ marginTop: "6rem", marginBottom: "4rem" }}>
                <h2 style={{ fontSize: "1.6rem", marginBottom: "1.4rem" }}>The Zerodha Universe</h2>
                <p style={{ fontSize: "1.09rem" }}>Extend your trading and investment experience even further with our partner platforms</p>
            </div>

            <div className="container" style={{ paddingLeft: "10rem", paddingRight: "10rem" }}>
                <div className="row">
                    <div className="col col-image">
                        <img className="image" src="Media/image/zerodhaFundhouse.png" alt="img" />
                        <p className='paragraph'>Our asset management venture
                            that is creating simple and transparent index
                            funds to help you save for your goals.
                        </p>
                    </div>
                    <div className="col col-image">
                        <img className="image" src="Media/image/sensibullLogo.svg" alt="img" />
                        <p className='paragraph'>Options trading platform that lets you
                            create strategies, analyze positions, and examine
                            data points like open interest, FII/DII, and more.
                        </p>
                    </div>
                    <div className="col col-image">
                        <img className="image" style={{ width: "45%" }} src="Media/image/tijori.svg" alt="img" />
                        <p className='paragraph'>Investment research platform
                            that offers detailed insights on stocks,
                            sectors, supply chains, and more.
                        </p>
                    </div>
                </div>
                <div className="row" style={{ marginTop: "3rem" }}>
                    <div className="col col-image">
                        <img className="image" style={{ width: "47%" }} src="Media/image/streakLogo.png" alt="img" />
                        <p className='paragraph'>Systematic trading platform
                            that allows you to create and backtest
                            strategies without coding.</p>
                    </div>
                    <div className="col col-image">
                        <img className="image" src="Media/image/smallcaseLogo.png" alt="img" />
                        <p className='paragraph'>Thematic investing platform
                            that helps you invest in diversified
                            baskets of stocks on ETFs.</p>
                    </div>
                    <div className="col col-image">
                        <img className="image" style={{ width: "45%" }} src="Media/image/dittoLogo.png" alt="img" />
                        <p className='paragraph'>Personalized advice on life
                            and health insurance. No spam
                            and no mis-selling.
                            Sign up for free</p>
                    </div>
                </div>

                <div className='text-center' style={{marginBottom : "5rem"}}>
                    <button type="button" className="btn btn-primary btn-hero" style={{ width: "20%" }}>Sign up for free</button>
                </div>
            </div>

        </div>


    );
}

export default Universe;