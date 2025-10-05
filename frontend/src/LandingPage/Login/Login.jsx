import React, { useState } from "react";
import axios from "axios";
import "./Login.css";

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://zerodha-clone-3-t58v.onrender.com/login", formData);
      if (res.status === 200) {
        // Redirect to App 2
        window.location.href = "https://zerodha-clone-5-aris.onrender.com";
      }
      setFormData({ username: "", email: "" });
    } catch (e) {
      if (e.response && e.response.status === 401) {
        setMessage("Invalid Credentials");
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div className="container" style={{ marginTop: "5rem" }}>
      <div className="row">
        <div className="col">
          <img
            style={{ width: "80%", marginLeft: "10rem", marginTop: "5rem" }}
            src="/Media/image/signup.png"
            alt="signin image"
          />
        </div>
        <div className="col" style={{ marginLeft: "5rem" }}>
          <div style={{ marginTop: "5rem" }}>
            <h2 style={{marginBottom : "2rem"}}>Signin</h2>
            <form onSubmit={handleSubmit} className="Login-form">

              <div class="input-group mb-3">
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

            <div class="input-group mb-3">
              <input
                type="password"
                class="form-control"
                name="password"
                placeholder="Password"
                aria-label="password"
                aria-describedby="basic-addon1"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

              {/* <input
                className="Login-element"
                name="username"
                type="text"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
              /> */}
              {/* <input
                className="Login-element"
                name="password"
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              /> */}
              <button type="submit" class="btn btn-outline-primary">Sign in</button>
              {/* <button type="submit">sign in</button> */}
            </form>
            {message && <p style={{ marginTop: "10px" }}>{message}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
