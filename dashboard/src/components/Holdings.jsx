import React from "react";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";
import GeneralContext from "./GeneralContext";

const Holdings = () => {
  const [holdings, setHoldings] = useState([]);
  const { refreshHoldingsTrigger } = useContext(GeneralContext);

  useEffect(() => {
    const fetchHoldings = async () => {
      try {
        const response = await axios.get("http://localhost:8080/holdings", {
          withCredentials: true,
        });
        setHoldings(response.data.holdings);
      } catch (err) {
        console.error("Error fetching holdings:", err);
      }
    };
    fetchHoldings();
  }, []);

  useEffect(() => {
    // Refresh on trigger change
    const fetchHoldings = async () => {
      try {
        const response = await axios.get("http://localhost:8080/holdings", {
          withCredentials: true,
        });
        setHoldings(response.data.holdings);
      } catch (err) {
        console.error("Error refreshing holdings:", err);
      }
    };
    console.log("Refresh trigger changed:", refreshHoldingsTrigger);
    fetchHoldings();
  }, [refreshHoldingsTrigger]);

  const totalAvgPrice = holdings.length
    ? holdings
        .reduce((acc, stock) => acc + (stock.avg || 0) * stock.qty, 0)
        .toFixed(2)
    : "0.00";

  const currentPrice = holdings.length
    ? holdings
        .reduce((acc, stock) => acc + (stock.price || 0) * stock.qty, 0)
        .toFixed(2)
    : "0.00";

  const data = {
    labels: holdings.map((stock) => stock.name),
    datasets: [
      {
        label: "Price",
        data: holdings.map((stock) => stock.price),
        backgroundColor: "#008080", // same color for all bars
      },
    ],
  };

  return (
    <>
      <h3 className="title">Holdings ({holdings.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>

          {holdings.map((stock, index) => {
            const currVal = stock.price * stock.qty;
            const isProfit = currVal - stock.avg * stock.qty >= 0.0;
            const profClass = isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit";
            return (
              <tr>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td>{currVal.toFixed(2)}</td>
                <td className={profClass}>
                  {(currVal - stock.avg * stock.qty).toFixed(2)}
                </td>
                <td className={profClass}>{stock.net}</td>
                <td className={dayClass}>{stock.day}</td>
              </tr>
            );
          })}
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            {new Intl.NumberFormat("en-IN", {
              style: "currency",
              currency: "INR",
            }).format(totalAvgPrice)}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            {new Intl.NumberFormat("en-IN", {
              style: "currency",
              currency: "INR",
            }).format(currentPrice)}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5
            style={{
              color: currentPrice - totalAvgPrice > 0 ? "green" : "red",
            }}
          >
            {new Intl.NumberFormat("en-IN", {
              style: "currency",
              currency: "INR",
            }).format(currentPrice - totalAvgPrice)}
          </h5>
          <p>P&L</p>
        </div>
      </div>
      <VerticalGraph data={data} />
    </>
  );
};

export default Holdings;
