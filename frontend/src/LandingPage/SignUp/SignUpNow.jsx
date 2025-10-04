import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./SignUpNow.css";

function SignUpNow() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:8080/signup", formData);
        window.location.href = 'http://localhost:5174/';
      setMessage("✅ Registration successful!");
      setFormData({ username: "", email: "", password: "" });
    } catch (error) {
      if (error.response && error.response.status === 409) {
        setMessage("User already exists. Try logging in.");
      } else {
        setMessage("Registration failed. Please try again.");
      }
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <img
            src="/Media/image/signup.png"
            alt="signup image"
            style={{ width: "80%", marginLeft: "10rem" }}
          />
        </div>
        <div className="col">
          <h2 style={{ paddingLeft: "5rem", fontSize: "1.7rem" }}>
            Signup now
          </h2>
          <form onSubmit={handleSubmit} className="SUN">
            <div class="input-group mb-3 SUN-comp">
              <span class="input-group-text" id="basic-addon1">
                @
              </span>
              <input
                type="text"
                class="form-control"
                name="username"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                value={formData.username}
                onChange={handleChange}
              />
            </div>

            <div class="input-group mb-3 SUN-comp">
              <input
                type="email"
                name="email"
                class="form-control"
                placeholder="Email Id"
                aria-label="Username"
                aria-describedby="basic-addon1"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div class="input-group mb-3 SUN-comp">
              <input
                type="password"
                name="password"
                class="form-control"
                placeholder="Password"
                aria-label="Username"
                aria-describedby="basic-addon1"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            {/* <input
              className="SUN-comp"
              name="username"
              type="text"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
            /> */}
            {/* <input
              className="SUN-comp"
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            /> */}
            {/* <input
              className="SUN-comp"
              name="password"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            /> */}
            <button class="btn btn-outline-primary" type="submit">
              Register
            </button>
          </form>
          {message && (
            <p style={{ marginTop: "10px", marginLeft: "5rem" }}>{message}</p>
          )}
        </div>
      </div>

      <div className="row login-box">
        <h3 style={{ fontSize: "2rem" }}>Already a user, sign in here...</h3>
        <Link to={"/login"} style={{ marginLeft: "3rem", marginTop: "2rem" }}>
          <button
            type="button"
            class="btn btn-primary"
            style={{ padding: "0.5rem 8rem 0.5rem 8rem", fontWeight: "600" }}
          >
            Sign in
          </button>
        </Link>
      </div>
    </div>
  );
}

export default SignUpNow;
