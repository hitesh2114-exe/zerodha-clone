import React from "react";
import { useNavigate } from "react-router-dom";

function OpenAccount() {
  const navigate = useNavigate();

  return (
    <div className="container p-5 container-hero">
      <div className="row text-center row-hero">
        <h1
          className="mt-5"
          style={{
            fontSize: "1.6rem",
            fontWeight: "500",
            marginBottom: "2rem",
          }}
        >
          Open a Zerodha account
        </h1>
        <p style={{ fontSize: "1.05rem", color: "#666666" }}>
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button
          onClick={() => navigate("/signup")}
          className="btn btn-primary btn-hero"
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
