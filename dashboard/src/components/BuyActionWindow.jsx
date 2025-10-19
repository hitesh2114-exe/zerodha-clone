import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import GeneralContext from "./GeneralContext";
import axios from "axios";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid}) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const {
    triggerHoldingsRefresh,
    closeBuyWindow
  } = useContext(GeneralContext);


  const handleBuyClick = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("No token found. Please log in.");
      return;
    }

    if (
      !stockQuantity ||
      stockQuantity <= 0 ||
      !stockPrice ||
      stockPrice <= 0
    ) {
      alert("Please enter valid quantity and price.");
      return;
    }

    try {
      await axios.post(
        "https://zerodha-clone-3-t58v.onrender.com/buy",
        {
          name: uid,
          qty: Number(stockQuantity),
          price: Number(stockPrice),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert(`Purchased ${stockQuantity} share(s) of ${uid}`);
      console.log("Triggering holdings refresh");
      triggerHoldingsRefresh();
      closeBuyWindow();
    } catch (err) {
      console.error("Buy failed:", err);
      alert("Purchase failed. Please try again.");
    }
  };

  const handleCancelClick = () => {
    closeBuyWindow(); 
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <Link className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
