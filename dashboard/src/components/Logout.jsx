import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.get("/logout", {
        withCredentials: true, // 🔑 ensures cookies are sent
      });
      window.location.href = 'http://localhost:5173/';
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <>
      <h1 style={{marginTop : "10rem", marginLeft : "14rem"}}>Do you wish to signout?</h1>
      <p style={{marginLeft : "16rem", fontSize : "1.4rem"}}>You will be redirected to Homepage.</p>
      <button onClick={handleLogout} type="button" class="btn btn-outline-primary" style={{marginLeft : "22.5rem", padding : "0.5rem 3rem 0.5rem 3rem"}}>sign out</button>
    </>
  );
}

export default Logout;
