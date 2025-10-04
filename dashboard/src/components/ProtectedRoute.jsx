import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('/auth/check', { withCredentials: true })
      .then(res => {
        setLoading(false); // user is authenticated
      })
      .catch(() => {
        navigate('/login'); // redirect to login if not authenticated
      });
  }, [navigate]);

  if (loading) return <div>Loading...</div>;
  return children;
}

export default ProtectedRoute;
