import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./SignUpNow.css";

function SignUpNow() {
    const [ formData, setFormData ] = useState({
      username : '',
      email : '',
      password : ''
    });

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name] : e.target.value });
    };

    const handleEvent = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('https://zerodha-clone-3-t58v.onrender.com/signup', formData, {
          withCredentials : true
        } );
        alert(response.data.message); 
      } catch (err) {
        alert(err.response?.data?.message || 'Signup failed');
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
          <form onSubmit={handleEvent} className="SUN">
            <div class="input-group mb-3 SUN-comp">
              <span class="input-group-text" id="basic-addon1">
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

            <div class="input-group mb-3 SUN-comp">
              <input
                type="email"
                name="email"
                className="form-control"
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
                className="form-control"
                placeholder="Password"
                aria-label="Username"
                aria-describedby="basic-addon1"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <button className="btn btn-outline-primary" type="submit">
              Register
            </button>
          </form>
        </div>
      </div>

      <div className="row login-box">
        <h3 style={{ fontSize: "2rem" }}>Already a user, sign in here...</h3>
        <Link to={"/login"} style={{ marginLeft: "3rem", marginTop: "2rem" }}>
          <button
            type="button"
            className="btn btn-primary"
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
