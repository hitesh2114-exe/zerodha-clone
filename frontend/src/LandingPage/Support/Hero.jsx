import React from 'react';
import "./Hero.css";

function Hero() {
    return (
        <div style={{ marginTop: "1.3rem" }}>
            <div className='Hero-support'>
                <div className="support-myTickets">
                    <h1 style={{ display: "inline-block", color: "#424242", fontSize: "2.3rem" }}>Support Portal</h1>
                    <button type="button" className="btn btn-primary myTickets-button" style={{ display: "inline-block", backgroundColor: "#397DD0" }}>My tickets</button>
                </div>
                <div className='search-support'>
                    <button className='searach-button-support'><i class="fa-solid fa-magnifying-glass"></i></button>
                    <input type="text" className='input-support' placeholder='Eg: How do I open my account, How do i activate F&O...'/>
                </div>
            </div>
        </div>
    );
}

export default Hero;