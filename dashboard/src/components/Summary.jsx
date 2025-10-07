import React from "react";
import { useContext } from "react";
import { HoldingsContext } from "./HoldingContext";

const Summary = () => {
  const { totalLTP } = useContext(HoldingsContext);
  const { totalPAndL } = useContext(HoldingsContext);
  const { ordersLTP } = useContext(HoldingsContext);
  const { ordersPAndL } = useContext(HoldingsContext);
  const { combinedAvg } = useContext(HoldingsContext);

  const combinedLTP = parseInt(ordersLTP) + parseInt(totalLTP);
  const combinedPAndL = parseFloat(totalPAndL) + parseFloat(ordersPAndL);

  return (
    <>
      <div className="username">
        <h6>Hi, User!</h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>
              {new Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: "INR",
              }).format(combinedLTP)}
              {console.log(combinedLTP)}
            </h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used <span>0</span>{" "}
            </p>
            <p>
              Opening balance <span>3.74k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings (13)</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className="profit">
              {new Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: "INR",
              }).format(combinedPAndL)}{" "}
              {console.log(combinedPAndL)}
              <small>+5.20%</small>{" "}
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value{" "}
              <span>
                {new Intl.NumberFormat("en-IN", {
                  style: "currency",
                  currency: "INR",
                }).format(combinedLTP)}
              </span>{" "}
            </p>
            <p>
              Investment{" "}
              <span>
                {new Intl.NumberFormat("en-IN", {
                  style: "currency",
                  currency: "INR",
                }).format(combinedAvg)}
              </span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;
