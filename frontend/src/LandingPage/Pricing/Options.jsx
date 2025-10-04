import React from 'react';

function Options() {
    return (
        <div>
            <div className="container mt-5">
                <h2 style={{ marginLeft: "6rem", fontSize: "1.58rem", marginBottom: "1.2rem", marginTop : "6rem" }}>Charges for optional value added services
                </h2>

                <table className='charge-table' style={{ marginLeft: "6rem" }}>
                    <tbody>
                        <tr className='row-price' style={{ borderBottom: "0.5px solid #E8E8E8" }}>
                            <td className='text-charges' style={{fontSize : "0.97rem", fontWeight : "500"}}>Service</td>
                            <td className='text-price' style={{paddingLeft : "10rem",fontSize : "0.97rem", fontWeight : "500"}}>Billing Frquency</td>
                            <td style={{paddingLeft : "5rem", paddingRight : "10rem",fontSize : "0.97rem", fontWeight : "500"}}>Charges</td>
                        </tr>
                        <tr className='row-price'>
                            <td className='text-charges'>Tickertape</td>
                            <td className='text-price'  style={{paddingLeft : "10rem"}}>Monthly / Annual</td>
                            <td style={{paddingLeft : "5rem"}}>Free: 0 | Pro: 249/2399</td>
                        </tr>
                        <tr className='row-price' style={{ backgroundColor: "#FAFAFA" }}>
                            <td className='text-charges'>Smallcase</td>
                            <td className='text-price'  style={{paddingLeft : "10rem"}}>Per transaction</td>
                            <td style={{paddingLeft : "5rem", paddingRight : "19.6rem"}}>Buy & Invest More: 100 | SIP: 10</td>
                        </tr>
                        <tr className='row-price'>
                            <td className='text-charges'>Kite Connect</td>
                            <td className='text-price'  style={{paddingLeft : "10rem"}}>Monthly</td>
                            <td style={{paddingLeft : "5rem"}}>Connect: 500 | Personal: Free</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Options;