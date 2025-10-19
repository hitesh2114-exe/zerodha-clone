import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const HoldingsContext = createContext();

export const HoldingProvider = ({ children }) => {
  const [holdings, setHoldings] = useState([]);
  const [totalAvgPrice, setTotalAvgPrice] = useState("0.00");
  const [totalLTP, setTotalLTP] = useState("0.00");
  const [totalPAndL, setTotalPAndL] = useState("0.00");
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [error, setError] = useState([]);
  const triggerHoldingsRefresh = () => setRefreshTrigger((prev) => prev + 1);

  const lengthHolding = Array.isArray(holdings) ? holdings.length : 0;

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8080/holdings", { withCredentials: true })
  //     .then((res) => setHoldings(res.data.holdings || []))
  //     .catch((err) => console.error("Fetch error:", err));
  // }, [refreshTrigger]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setError("No token found. Please log in.");
      return;
    }

    axios
      .get("https://zerodha-clone-3-t58v.onrender.com/holdings", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const data = response.data;
        if (Array.isArray(data?.holdings)) {
          setHoldings(data.holdings);
        } else {
          console.warn("Unexpected holdings format:", data);
          setHoldings([]);
        }
      })
      .catch((err) => {
        console.error("Error fetching holdings:", err);
        setHoldings([]);
      });
  },[]);

  //avg price
  useEffect(() => {
    const total = holdings.length
      ? holdings
          .reduce((acc, stock) => acc + (stock.avg || 0) * stock.qty, 0)
          .toFixed(2)
      : "0.00";
    setTotalAvgPrice(total);
  }, [holdings]);

  //updating the setTotalLTP of dashboard
  useEffect(() => {
    const totalLTP = holdings.length
      ? holdings
          .reduce((acc, stock) => acc + (stock.price || 0) * stock.qty, 0)
          .toFixed(2)
      : "0.00";

    setTotalLTP(totalLTP);
  }, [holdings]);

  //updating the setTotalPAndL of dashboard
  useEffect(() => {
    const pAndL = (parseFloat(totalLTP) - parseFloat(totalAvgPrice)).toFixed(2);
    setTotalPAndL(pAndL);
  }, [totalLTP, totalAvgPrice]);

  return (
    <HoldingsContext.Provider
      value={{
        totalLTP,
        totalPAndL,
        totalAvgPrice,
        triggerHoldingsRefresh,
        lengthHolding,
      }}
    >
      {children}
    </HoldingsContext.Provider>
  );
};
