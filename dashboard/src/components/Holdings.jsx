import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";
// import { holdings } from "../data/data";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios.get("https://zerodha-clone-3-t58v.onrender.com/allHoldings").then((res) => {
      setAllHoldings(res.data);
    });
  }, []);

  useEffect(() => {
    axios.get("https://zerodha-clone-3-t58v.onrender.com/allOrders").then((res) => {
      setAllOrders(res.data);
    });
  });

  //calculating prices
  const totalAvgPrice = allHoldings.length
    ? allHoldings.reduce((acc, stock) => acc + (stock.avg || 0), 0).toFixed(2)
    : "0.00";

  const totalLTP = allHoldings.length
    ? allHoldings.reduce((acc, stock) => acc + (stock.price || 0), 0).toFixed(2)
    : "0.00";

  const totalAvgPriceOrders = allOrders.length
    ? allOrders.reduce((acc, stock) => acc + (stock.price || 0), 0).toFixed(2)
    : "0.00";

  const totalLTPOrders = allOrders.length
    ? allOrders
        .reduce((acc, stock) => acc + (stock.price + 150.47 || 0), 0)
        .toFixed(2)
    : "0.00";

  const combinedTotal = parseInt(totalAvgPrice) + parseInt(totalAvgPriceOrders);
  const combinedTotalLTP = parseInt(totalLTP) + parseInt(totalLTPOrders);

  // const labels = [
  //   "January",
  //   "February",
  //   "March",
  //   "April",
  //   "May",
  //   "June",
  //   "July",
  // ];

  // const labels = allHoldings.map((subArray) => subArray["name"]);

  // const data = {
  //   labels,
  //   datasets: [
  //     {
  //       label: "Stock Price",
  //       data: allHoldings.map((stock) => stock.price),
  //       backgroundColor: "#008080",
  //     },
  //   ],
  // };

  const combinedLabels = [
    ...allHoldings.map((stock) => stock.name),
    ...allOrders.map((order) => order.name),
  ];

  const combinedValues = [
    ...allHoldings.map((stock) => stock.price),
    ...allOrders.map((order) => order.price + 150.47), // your LTP logic
  ];

  const data = {
    labels: combinedLabels,
    datasets: [
      {
        label: "Price",
        data: combinedValues,
        backgroundColor: "#008080", // same color for all bars
      },
    ],
  };

  // export const data = {
  //   labels,
  //   datasets: [
  //     {
  //       label: "Dataset 1",
  //       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
  //       backgroundColor: "rgba(255, 99, 132, 0.5)",
  //     },
  //     {
  //       label: "Dataset 2",
  //       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
  //       backgroundColor: "rgba(53, 162, 235, 0.5)",
  //     },
  //   ],
  // };

  return (
    <>
      <h3 className="title">
        Holdings ({allHoldings.length + allOrders.length})
      </h3>

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

          {allHoldings.map((stock, index) => {
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

          {allOrders.map((stock, index) => {
            const LTP = stock.price + 150.47;
            const currVal = LTP * stock.qty;
            const avg = stock.price;
            const isProfit = currVal - avg * stock.qty >= 0.0;
            const profClass = isProfit ? "profit" : "loss";
            const percentage =
              ((currVal - stock.price * stock.qty) / currVal) * 100;
            const rand = 0.32;

            return (
              <tr>
                <td>{stock.name}</td>
                <td style={{ fontSize: "0.95rem" }}>{stock.qty}</td>
                <td style={{ fontSize: "0.95rem" }}>{avg.toFixed(2)}</td>
                <td style={{ fontSize: "0.95rem" }}>{LTP.toFixed(2)}</td>
                <td style={{ fontSize: "0.95rem" }}>{currVal.toFixed(2)}</td>
                <td className={profClass} style={{ fontSize: "0.95rem" }}>
                  {(currVal - avg * stock.qty).toFixed(2)}
                </td>
                <td className={profClass} style={{ fontSize: "0.95rem" }}>
                  {"+" + percentage.toFixed(2) + "%"}
                </td>
                <td className={profClass}>{"+" + rand + "%"}</td>
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
            }).format(combinedTotal)}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            {new Intl.NumberFormat("en-IN", {
              style: "currency",
              currency: "INR",
            }).format(combinedTotalLTP)}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>
            {new Intl.NumberFormat("en-IN", {
              style: "currency",
              currency: "INR",
            }).format(combinedTotalLTP - combinedTotal)}
          </h5>
          <p>P&L</p>
        </div>
      </div>
      <VerticalGraph data={data} />
    </>
  );
};

export default Holdings;
