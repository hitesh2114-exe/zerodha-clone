import React from 'react';
import Hero from './Hero';
import LeftComponent from './LeftComponent';
import RightComponenet from './RightComponent';
import Universe from './Universe';
function Products() {
    return ( 
        <>
            <Hero/>
            <LeftComponent imageURL="Media/image/kite.png" productTitle="Kite" productDesc="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."/>
            
            <RightComponenet imageURL="Media/image/console.png" productTitle="Console" productDescription={"The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."}/>

            <LeftComponent imageURL="Media/image/coin.png" productTitle="Coin" productDesc="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."/>

            <RightComponenet imageURL="Media/image/kiteconnect.svg" productTitle="Kite Connect API" productDescription={"Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."}/>

             <LeftComponent imageURL="Media/image/varsity.png" productTitle="Varsity mobile" productDesc="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."/>

            <div className='container text-center' style={{marginTop : "6.2rem", fontSize : "1.34rem"}}>
                <p>Want to know more about our technology stack? Check out the <a href="/" style={{textDecoration : "none"}}>Zerodha.tech</a> blog.</p>
            </div>


            <Universe/>
        </>
     );
}

export default Products;