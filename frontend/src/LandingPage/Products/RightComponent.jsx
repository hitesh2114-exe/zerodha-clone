import React from 'react';

function RightComponenet({ imageURL, productTitle, productDescription, learnMoreURL }) {
    return (
        <div className="container" style={{ paddingLeft: "7rem", paddingRight: "1.5rem", marginTop: "5.5rem" , marginBottom : "3rem"}}>
            <div className="row" >
                <div className="col-4" style={{ paddingRight: "3rem", display: "flex", alignItems : "center"}}>
                    <div>
                        <h2 style={{ fontSize: "1.6rem", marginBottom: "1.5rem" }}>{productTitle}</h2>
                        <p style={{ lineHeight: "1.8rem", fontSize: "1.1rem" }}>{productDescription}</p>
                        <a href={learnMoreURL} style={{ color: "blue" }}>Learn More<i class="fa-solid fa-arrow-right" style={{ paddingLeft: "0.7rem" }}></i></a>
                    </div>
                </div>
                <div className="col-8">
                    <img src={imageURL} alt="product image" style={{ paddingRight: "2rem", paddingLeft: "4.5rem" }} />
                </div>
            </div>
        </div>
    );
}

export default RightComponenet;