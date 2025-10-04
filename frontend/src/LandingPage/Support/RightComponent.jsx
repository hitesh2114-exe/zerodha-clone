import React from 'react';
import './RightComponent.css';

function RightComponents() {
    return (
        <div>
            <div className="container" style={{ paddingRight: "2.2rem" }}>
                <div className="row notification-support" >
                    <div style={{ backgroundColor: "#ff9404", width: "10px", paddingRight: "0.1rem" }}></div>
                    <div className="col notification-box">
                        <ul>
                            <li><a href="/" className='notification-line'>Latest Intraday leverages and Square-off timings</a></li>
                            <li style={{ paddingTop: "0.9rem" }}><a href="/" className='notification-line'>Settlement Holiday on account of Id-E-Milad on 5th and 8th September 2025</a></li>
                        </ul>
                    </div>
                </div>
                <div className="row quick-links">
                    <div style={{ backgroundColor: "#f6f6f6", marginLeft: "2.1rem", width: "92.2%", marginTop: "1.2rem" }}>
                        <p style={{ fontSize: "1.05rem", marginTop: "0.8rem", paddingLeft: "0.8rem" }}>Quick links</p>
                    </div>
                    <div className='quick-link-line'><a href="/" className='quick-text'>1. Track account opening</a></div>
                    <div className='quick-link-line'><a href="/" className='quick-text'>2. Track segment activation</a></div>
                    <div className='quick-link-line'><a href="/" className='quick-text'>3. Intraday margins</a></div>
                    <div className='quick-link-line'><a href="/" className='quick-text'>4. Kite user manual</a></div>
                </div>
            </div>
        </div>
    );
}

export default RightComponents;