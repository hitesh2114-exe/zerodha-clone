import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";


import Funds from "./Funds";
import Holdings from "./Holdings";
import { HoldingProvider } from "./HoldingContext";

import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";
import Logout from "./Logout";

const Dashboard = () => {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tokenFromURL = params.get("token");

    if (tokenFromURL) {
      localStorage.setItem("token", tokenFromURL); 
      window.history.replaceState({}, "", location.pathname); 
    }
  }, [location]);

  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />
        <HoldingProvider>
          <div className="content">
            <Routes>
              <Route exact path="/" element={<Summary />} />
              <Route path="/holdings" element={<Holdings />} />
              <Route path="/positions" element={<Positions />} />
              <Route path="/funds" element={<Funds />} />
              <Route path="/logout" element={<Logout />} />
            </Routes>
          </div>
        </HoldingProvider>
      </GeneralContextProvider>
    </div>
  );
};

export default Dashboard;
