import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { HoldingsContext } from "./HoldingContext";
import axios from "axios";

const Summary = () => {
  const { totalLTP } = useContext(HoldingsContext);
  const { totalPAndL } = useContext(HoldingsContext);
  const { totalAvgPrice } = useContext(HoldingsContext);
  const { lengthHolding } = useContext(HoldingsContext);

  const [username, setUsername] = useState("");
  const [error, setError] = useState("");


  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setError("No token found. Please log in.");
      return;
    }

    axios
      .get("https://zerodha-clone-3-t58v.onrender.com/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUsername(response.data.username);
      })
      .catch((err) => {
        console.error("Error fetching username:", err);
      });
  }, []);

  return (
    <>
      <div className="username">
        <span>
          <p style={{ fontSize: "1.5rem" }}>Hey {username}...!</p>
        </span>
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
              }).format(totalLTP)}
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
          <p>Holdings ({lengthHolding})</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 style={{
              color: totalPAndL > 0 ? "green" : "red",
            }}>
              {new Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: "INR",
              }).format(totalPAndL)}{" "}
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
                }).format(totalLTP)}
              </span>{" "}
            </p>
            <p>
              Investment{" "}
              <span>
                {new Intl.NumberFormat("en-IN", {
                  style: "currency",
                  currency: "INR",
                }).format(totalAvgPrice)}
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
