import React from 'react';
import "./Features.css";

function Features() {
    return (
        <div className="container container-Features">
            <div className="row row-Features">
                <div className="col col-5 p-5 colLeft-Features">
                    <h2 className='fs-3 mb-5 main-heading'>Trust with confidence</h2>

                    <h3 className='fs-5 mb-2 sub-head-features'>Customer-first always</h3>
                    <p className='fs-6 mb-4 para-features'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>

                    <h3 className='fs-5 mb-2 sub-head-features'>No spam or gimmicks</h3>
                    <p className='fs-6 mb-4 para-features'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>

                    <h3 className='fs-5 mb-2 sub-head-features'>The Zerodha universe</h3>
                    <p className='fs-6 mb-4 para-features'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                    <h3 className='fs-5 mb-2 sub-head-features'>Do better with money</h3>
                    <p className='fs-6 mb-4 para-features'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>

                <div className="col col-7">
                    <img src="Media/image/ecosystem.png" alt="ecosystem-img" className='ecosystem-image'/>
                    <div className='anchor-container-feature'>
                        <a href="/" className='anchor-feature arrow1'>Explore our products<i class="fa-solid fa-arrow-right" style={{paddingLeft : "0.4rem"}}></i></a>
                        <a href="/" className='anchor-feature arrow2'>Try kite demo<i class="fa-solid fa-arrow-right" style={{paddingLeft : "0.7rem"}}></i></a>
                    </div>
                </div>
            </div>

            <div className='row row-pressLogos'>
                <img src="Media/image/pressLogos.png" alt="press logo image" className='pressLogo' />
            </div>
        </div>
    );
}

export default Features;