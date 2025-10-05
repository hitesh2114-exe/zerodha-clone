import { useEffect, useState } from "react";
import axios from "axios";

function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      window.location.href = "https://zerodha-clone-4-mk1z.onrender.com"; // your login app
      return;
    }

    axios
      .get("https://zerodha-clone-3-t58v.onrender.com/verify", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        setAuthenticated(true);
        setLoading(false);
      })
      .catch(() => {
        window.location.href = "https://zerodha-clone-4-mk1z.onrender.com"; // redirect if token invalid
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (!authenticated) return null;

  return children;
}

export default ProtectedRoute;