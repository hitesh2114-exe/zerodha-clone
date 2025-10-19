import React from "react";
import "./Hero.css";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <div className="container p-5 container-hero" style={{ marginTop: "5rem" }}>
      <div className="row text-center row-hero">
        <img
          src="Media/image/homeHero.png"
          alt="Hero Image"
          className="mb-5 heroImage"
        />
        <h1 className="mt-5" style={{ fontSize: "29px", fontWeight: "500" }}>
          Invest in everything
        </h1>
        <p style={{ fontSize: "21px" }}>
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
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

export default Hero;
