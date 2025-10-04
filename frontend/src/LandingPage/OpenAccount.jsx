import React from 'react';

function OpenAccount() {
    return ( 
        <div className="container p-5 container-hero">
            <div className="row text-center row-hero">
                <h1 className='mt-5' style={{ fontSize: "1.6rem", fontWeight: "500", marginBottom : "2rem" }}>Open a Zerodha account</h1>
                <p style={{ fontSize: "1.05rem", color : "#666666" }}>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <form action="/signup">
                    <button type="submit" className="btn btn-primary btn-hero">Sign up for free</button>
                </form>
            </div>
        </div>
     );
}

export default OpenAccount;