import React, { createContext, useState, useEffect, use } from "react";
import axios from "axios";

export const HoldingsContext = createContext();

export const HoldingProvider = ({ children }) => {
  const [allHoldings, setAllHoldings] = useState([]);
  const [totalAvgPrice, setTotalAvgPrice] = useState("0.00");
  const [totalLTP, setTotalLTP] = useState("0.00");
  const [totalPAndL, setTotalPAndL] = useState("0.00");

  const [allOrders, setAllOrders] = useState([]);
  const [avgPriceOrders, setAvgPriceOrders] = useState("0.0");
  const [ordersLTP, setOrdersLTP] = useState("0.0");
  const [ordersPAndL, setOrdersPAndL] = useState("0.0");

  useEffect(() => {
    axios
      .get("http://localhost:8080/allHoldings")
      .then((res) => setAllHoldings(res.data))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  //avg price
  useEffect(() => {
    const total = allHoldings.length
      ? allHoldings.reduce((acc, stock) => acc + (stock.avg || 0), 0).toFixed(2)
      : "0.00";
    setTotalAvgPrice(total);
  }, [allHoldings]);

  //updating the setTotalLTP of dashboard
  useEffect(() => {
    const totalLTP = allHoldings.length
      ? allHoldings
          .reduce((acc, stock) => acc + (stock.price || 0), 0)
          .toFixed(2)
      : "0.00";

    setTotalLTP(totalLTP);
  }, [allHoldings]);

  //updating the setTotalPAndL of dashboard
  useEffect(() => {
    const totalPAndL = totalLTP - totalAvgPrice;
    setTotalPAndL(totalPAndL);
  }, [allHoldings]);

  //for Orders
  useEffect(() => {
    axios
      .get("http://localhost:8080/allOrders")
      .then((res) => setAllOrders(res.data))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  //for avg
  useEffect(() => {
    const total = allOrders.length
      ? allOrders.reduce((acc, stock) => acc + (stock.price || 0), 0).toFixed(2)
      : "0.00";
    setAvgPriceOrders(total);
  }, [allOrders]);

  //for LTP
  useEffect(() => {
    const orderstotalLTP = allOrders.length
      ? allOrders
          .reduce((acc, stock) => acc + (stock.price + 150.47 || 0), 0)
          .toFixed(2)
      : "0.00";

    setOrdersLTP(parseFloat(orderstotalLTP));
  }, [allOrders]);

  //for P&L
  useEffect(() => {
    const totalPAndLOrders = ordersLTP - avgPriceOrders;
    setOrdersPAndL(totalPAndLOrders);
  }, [allOrders]);

  const combinedAvg = parseInt(totalAvgPrice) + parseInt(avgPriceOrders);

  return (
    <HoldingsContext.Provider
      value={{
        allHoldings,
        totalLTP,
        totalPAndL,
        avgPriceOrders,
        ordersLTP,
        ordersPAndL,
        combinedAvg,
      }}
    >
      {children}
    </HoldingsContext.Provider>
  );
};
