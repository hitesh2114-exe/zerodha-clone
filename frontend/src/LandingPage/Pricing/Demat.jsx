import React from 'react';

function Demate() {
    return (
        <div>
            <div className="container" style={{ marginTop: "5rem", marginBottom: "3rem" }}>
                <h2 style={{ marginLeft: "6rem", fontSize: "1.58rem", marginBottom: "1.2rem" }}>Demat AMC (Annual Maintenance Charge)</h2>

                <table className='charge-table' style={{ marginLeft: "6rem" }}>
                    <tbody>
                        <tr className='row-price' style={{ borderBottom: "0.5px solid #E8E8E8" }}>
                            <td className='text-charges' style={{fontSize : "0.97rem", fontWeight : "500"}}>Value of holdings</td>
                            <td className='text-price' style={{paddingLeft : "17rem", paddingRight : "40.6rem",fontSize : "0.97rem", fontWeight : "500"}}>AMC</td>
                        </tr>
                        <tr className='row-price'>
                            <td className='text-charges'>Up to ₹4 lakh</td>
                            <td className='text-price' style={{paddingLeft : "17rem", paddingRight : "40.6rem"}}><span class="badge text-bg-success" style={{ borderRadius: "2px", padding: "0.4rem 0.9rem 0.4rem 0.9rem" }}>FREE*</span></td>
                        </tr>
                        <tr className='row-price' style={{ backgroundColor: "#FAFAFA" }}>
                            <td className='text-charges'>&#8377;4 lakh - &#8377;10 lakh</td>
                            <td className='text-price' style={{paddingLeft : "17rem", paddingRight : "20.6rem"}}>&#8377; 100 per year, charged quarterly*</td>
                        </tr>
                        <tr className='row-price'>
                            <td className='text-charges'>Above ₹10 lakh</td>
                            <td className='text-price' style={{paddingLeft : "17rem", paddingRight : "20.6rem"}}>&#8377; 300 per year, charged quarterly</td>
                        </tr>
                    </tbody>
                </table>

                <p style={{fontSize : "0.83rem", paddingLeft : "6rem", paddingTop : "1rem", paddingRight : "4rem"}}>* Lower AMC is applicable only if the account qualifies as a Basic Services Demat Account (BSDA). BSDA account holders cannot hold more than one demat account. To learn more about BSDA,<a href="/" style={{textDecoration : "none"}}> click here.</a></p>
            </div>
        </div>
    );
}

export default Demate;