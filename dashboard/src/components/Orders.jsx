import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios.get("https://zerodha-clone-3-t58v.onrender.com/allOrders").then((res) => {
      setAllOrders(res.data);
    });
  });

  return (
    <>
      <h3 className="title">Orders ({allOrders.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>Mode</th>
          </tr>

          {allOrders.map((stock, index) => {          
            return (
              <tr>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td style={{fontSize : "1rem"}}>{stock.price}</td>
                <td style={{fontSize : "1rem", color: stock.price === "BUY" ? "green" : "blue"}}>{stock.mode}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Orders;
