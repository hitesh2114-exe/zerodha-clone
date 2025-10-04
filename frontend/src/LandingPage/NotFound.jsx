import React from 'react';

function NotFound() {
    return (
        <div className="container p-5 container-hero" style={{marginTop : "5rem"}}>
            <h1 className='mt-5' style={{ fontSize: "1.6rem", fontWeight: "500", marginBottom: "2rem" }}>404 Page Not Found</h1>
            <p style={{ fontSize: "1.05rem", color: "#666666" }}>Sorry, the page that yor are looking for do not exist.</p>
        </div>
    );
}

export default NotFound;