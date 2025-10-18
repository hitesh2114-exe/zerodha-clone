import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Menu = () => {
  const [username, setUsername] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      // setError("No token found. Please log in.");
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
    <div className="menu-container">
      <img src="logo.png" style={{ width: "30px" }} />
      <div className="menus">
        <ul style={{paddingTop : "2rem"}}>
          <li>
            <Link className="nav-link active" aria-current="page" to={"/"} style={{ color: "#666666" }}>Dashboard</Link>
          </li>
          <li>
            <Link className="nav-link active" aria-current="page" to={"/holdings"} style={{ color: "#666666" }}>Holdings</Link>
          </li>
          <li>
            <Link className="nav-link active" aria-current="page" to={"/positions"} style={{ color: "#666666" }}>Positions</Link>
          </li>
          <li>
            <Link className="nav-link active" aria-current="page" to={"/funds"} style={{ color: "#666666" }}>Funds</Link>
          </li>
          <li>
            <Link className="nav-link active" aria-current="page" to={"/logout"} style={{ color: "#666666" }}>Logout</Link>
          </li>
        </ul>
        <hr />
        <div className="profile" style={{marginTop : "0.8rem"}}>
          <div className="avatar">ZU</div>
          <p className="username mt-3" style={{fontSize : "1.2rem"}}>{username}</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;