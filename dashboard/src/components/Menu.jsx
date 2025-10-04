import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "30px" }} />
      <div className="menus">
        <ul style={{paddingTop : "2rem"}}>
          <li>
            <Link className="nav-link active" aria-current="page" to={"/"} style={{ color: "#666666" }}>Dashboard</Link>
          </li>
          <li>
            <Link className="nav-link active" aria-current="page" to={"/orders"} style={{ color: "#666666" }}>Orders</Link>
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
        <div className="profile" >
          <div className="avatar">ZU</div>
          <p className="username mt-3">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;