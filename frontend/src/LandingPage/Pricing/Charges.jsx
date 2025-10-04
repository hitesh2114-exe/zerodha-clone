import React from 'react';
import "./Charges.css";

function Charges() {
    return (
        <div>
            <div className="container" style={{marginTop : "5rem", marginBottom : "3rem"}}>
                <h2 style={{ marginLeft : "6rem", fontSize : "1.58rem", marginBottom : "1.2rem"}}>Charges for account opening</h2>

                <table className='charge-table' style={{marginLeft : "6rem"}}>
                    <tbody>
                        <tr className='row-price' style={{borderBottom : "0.5px solid #E8E8E8"}}>
                            <td className='text-charges' style={{fontSize : "0.97rem", fontWeight : "500"}}>Type of account</td>
                            <td className='text-price' style={{fontSize : "0.97rem", fontWeight : "500"}}>Charges</td>
                        </tr>
                        <tr className='row-price'>
                            <td className='text-charges'>Online account</td>
                            <td className='text-price'><span class="badge text-bg-success" style={{borderRadius : "2px", padding : "0.4rem 0.9rem 0.4rem 0.9rem"}}>FREE</span></td>
                        </tr>
                        <tr className='row-price' style={{backgroundColor : "#FAFAFA"}}>
                            <td className='text-charges'>Offline account</td>
                            <td className='text-price'><span class="badge text-bg-success" style={{borderRadius : "2px", padding : "0.4rem 0.9rem 0.4rem 0.9rem"}}>FREE</span></td>
                        </tr>
                        <tr className='row-price'>
                            <td className='text-charges'>NRI account (offline only)</td>
                            <td className='text-price'>&#8377; 500</td>
                        </tr>
                        <tr className='row-price' style={{backgroundColor : "#FAFAFA"}}>
                            <td className='text-charges'>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
                            <td className='text-price'>&#8377; 500</td>
                        </tr>

                    </tbody>
                </table>



            </div>
        </div>
    );
}

export default Charges;