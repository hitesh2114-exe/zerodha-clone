import React, { useState, useContext } from "react";
import axios from "axios";
import "./BuyActionWindow.css";
import GeneralContext from "./GeneralContext";

function SellActionWindow({ uid, fetchHoldings }) {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const { triggerHoldingsRefresh, closeSellWindow } =
    useContext(GeneralContext);

  const handleSellClick = async () => {
    setLoading(true);
    try {
      await axios.post(
        "https://zerodha-clone-3-t58v.onrender.com/sell",
        {
          name: uid,
          qty: Number(stockQuantity),
        },
        {
          withCredentials: true,
        }
      );

      alert(`Sold ${stockQuantity} share(s) of ${uid}`);
      console.log("Triggering holdings refresh");
      triggerHoldingsRefresh();
      closeSellWindow(); 
    } catch (err) {
      console.error("Sell failed:", err);
      alert("Sell failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleCancelClick = () => {
    closeSellWindow();
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
              min="1"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <div>
          <button
            className="btn btn-blue"
            onClick={handleSellClick}
            disabled={loading}
          >
            {loading ? "Processing..." : "Sell"}
          </button>
          <button className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default SellActionWindow;
