import React from 'react';

function LeftComponent({ imageURL, productTitle, productDesc, tryDemo, learnMore, googlePlay, appStore }) {
    return (
        <div className="container" style={{ paddingLeft: "9rem", marginTop: "3rem", marginBottom: "2rem" }}>
            <div className="row">
                <div className="col-6" >
                    <img src={imageURL} alt="image" />
                </div>
                <div className="col-6" style={{ paddingLeft: "9rem", paddingRight: "8rem", lineHeight: "1.8rem", fontSize: "1.02rem" , display : "flex", alignItems : "center"}}>
                    <div>
                        <h2 style={{ fontSize: "1.6rem", marginBottom: "1.5rem" }}>{productTitle}</h2>
                        <p>{productDesc}</p>
                        <div style={{ color: "blue" }}>
                            <a href={tryDemo} style={{ marginRight: "4.5rem" }}>Try demo <i class="fa-solid fa-arrow-right" style={{ paddingLeft: "0.7rem" }}></i></a>
                            <a href={learnMore}>Learn More <i class="fa-solid fa-arrow-right" style={{ paddingLeft: "0.7rem" }}></i></a>
                        </div>
                        <div style={{ marginTop: "1.3rem" }}>
                            <a href={googlePlay} style={{ paddingRight: "1rem" }}><img style={{ width: "48%" }} src="Media/image/googlePlayBadge.svg" alt="image" /></a>
                            <a href={appStore}><img style={{ width: "43%" }} src="Media/image/appstoreBadge.svg" alt="image" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftComponent;