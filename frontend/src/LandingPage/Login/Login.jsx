import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import { useNavigate } from "react-router-dom";


function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await axios.post("https://zerodha-clone-3-t58v.onrender.com/login", formData, {
        withCredentials : true
      });
      alert(response.data.message); // "Login successful"
      // window.location.href = 'https://zerodha-clone-5-aris.onrender.com';

    } catch(err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  }

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
            <h2 style={{ marginBottom: "2rem" }}>Signin</h2>
            <form onSubmit={handleSubmit} className="Login-form">
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  @
                </span>
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>

              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  aria-label="password"
                  aria-describedby="basic-addon1"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="btn btn-outline-primary">
                Sign in
              </button>
            </form>
            {error && <p className="error">{error}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
