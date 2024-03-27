/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { Outlet, Navigate } from 'react-router-dom';

function ProtectedRoutes() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // const token = localStorage.getItem('token')
    const token = 'mytoken';

    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return isAuthenticated ? <Outlet /> : <Navigate to='/login' />;
}

export default ProtectedRoutes;
