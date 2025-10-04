import React from 'react';
import "./Footer.css";

function Footer() {
    return (
        <div className='border-top outside-container'>
            <div className="container container-footer">
                <div className="row" >
                    <div className="col col-3">
                        <img src="/Media/image/logo.svg" alt="logo" className='footer-img' />
                        <p style={{marginLeft : "1.4rem", fontSize : "13.5px", color:"#666666"}}>&copy; 2010 - 2025, Zerodha Broking Ltd.</p>
                        <p style={{marginLeft : "1.4rem", fontSize : "13.5px", color:"#666666"}}>All rights reserved.</p>
                    </div>
                    <div className="col list-container" style={{paddingLeft : "2rem"}}>
                        <p style={{marginTop:"1.9rem", fontSize : "1.2rem", fontWeight:"500", marginBottom:"1.5rem"}}>Account</p>
                        <a href="/" className='footer-text-list'>Open demat account</a><br />
                        <a href="/" className='footer-text-list'>NRI demat account </a><br />
                        <a href="/" className='footer-text-list'>Minor demat account</a><br />
                        <a href="/" className='footer-text-list'>Commodity</a><br />
                        <a href="/" className='footer-text-list'>Dematerialisation</a><br />
                        <a href="/" className='footer-text-list'>Fund transfer</a><br />
                        <a href="/" className='footer-text-list'>MTF</a><br />
                        <a href="/" className='footer-text-list'>Referral program</a><br />
                    </div>
                    <div className="col list-container">
                        <p style={{marginTop:"1.9rem", fontSize : "1.2rem", fontWeight:"500", marginBottom:"1.5rem"}}>Support</p>
                        <a href="/" className='footer-text-list'>Contact us </a><br />
                        <a href="/" className='footer-text-list'>Support portal</a><br />
                        <a href="/" className='footer-text-list'>How to file a complaint?</a><br />
                        <a href="/" className='footer-text-list'>Status of your complaints</a><br />
                        <a href="/" className='footer-text-list'>Bulletin</a><br />
                        <a href="/" className='footer-text-list'>Circular</a><br />
                        <a href="/" className='footer-text-list'>Z-Connect blog</a><br />
                        <a href="/" className='footer-text-list'>Downloads</a><br />
                    </div>
                    <div className="col list-container">
                        <p style={{marginTop:"1.9rem", fontSize : "1.2rem", fontWeight:"500", marginBottom:"1.5rem"}}>Company</p><br />
                        <a href="/"className='footer-text-list'>About </a><br />
                        <a href="/"className='footer-text-list'>Philosophy </a><br />
                        <a href="/"className='footer-text-list'>Press & media</a><br />
                        <a href="/"className='footer-text-list'>Careers</a><br />
                        <a href="/"className='footer-text-list'>Zerodha Cares (CSR)</a><br />
                        <a href="/"className='footer-text-list'>Zerodha.tech</a><br />
                        <a href="/"className='footer-text-list'>Open source</a><br />
                    </div>
                    <div className="col list-container">
                        <p style={{marginTop:"1.9rem", fontSize : "1.2rem", fontWeight:"500", marginBottom:"1.5rem"}}>Quick links</p>
                        <a href="/" className='footer-text-list'>Upcoming IPOs</a><br />
                        <a href="/" className='footer-text-list'>Brokerage charges</a><br />
                        <a href="/" className='footer-text-list'>Market holidays</a><br />
                        <a href="/" className='footer-text-list'>Economic calendar</a><br />
                        <a href="/" className='footer-text-list'>Calculators</a><br />
                        <a href="/" className='footer-text-list'>Markets</a><br />
                        <a href="/" className='footer-text-list'>Sectors</a><br />
                    </div>
                </div>
                <div className="row" style={{marginTop : "4rem"}}>
                    <p className='footer-text-para'>
                        Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
                    </p>
                    <p className='footer-text-para'>
                        Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances
                    </p>
                    <p className='footer-text-para'>
                        <a href="/" style={{textDecoration:"none"}}>Smart Online Dispute Resolution</a> | <a href="/" style={{textDecoration:"none"}}> Grievances Redressal Mechanism</a>
                    </p>
                    <p className='footer-text-para'>
                        Investments in securities market are subject to market risks; read all the related documents carefully before investing.
                    </p>
                    <p className='footer-text-para'>
                        Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
                    </p>
                    <p className='footer-text-para'>
                        India's largest broker based on networth as per NSE. <a href="/" style={{textDecoration:"none"}}>NSE broker factsheet</a>
                    </p>
                    <p className='footer-text-para'>
                        "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please <a href="/" style={{textDecoration:"none"}}>create a ticket here.</a>
                    </p>
                </div>
                <div className="row">
                    <ul className='ul-container'>
                        <div className=" endline-text-logo-col"><a href="/" className='endline-text'>NSE</a></div>
                        <div className=" endline-text-logo-col"><a href="/" className='endline-text'>BSE</a></div>
                        <div className=" endline-text-logo-col"><a href="/" className='endline-text'>MCX</a></div>
                        <div className=" endline-text-logo-col"><a href="/" className='endline-text'>Terms & conditions</a></div>
                        <div className=" endline-text-logo-col"><a href="/" className='endline-text'>Policies & procedures</a></div>
                        <div className=" endline-text-logo-col"><a href="/" className='endline-text'>Privacy policy</a></div>
                        <div className=" endline-text-logo-col"><a href="/" className='endline-text'>Disclosure</a></div>
                        <div className=" endline-text-logo-col"><a href="/" className='endline-text'>For investor's attention</a></div>
                        <div className=" endline-text-logo-col"><a href="/" className='endline-text'>Investor charter</a></div>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;