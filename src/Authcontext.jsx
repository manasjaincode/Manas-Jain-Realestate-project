import React, { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(null);

  
  const login = (jwtToken, expiresInSeconds) => {

    setToken(jwtToken);
    setIsAuthenticated(true);

    console.log(`User logged in. Token expires in ${expiresInSeconds} seconds (in-memory only).`);
  };

  const logout = () => {
   
    setToken(null);
    setIsAuthenticated(false);
    console.log("User logged out (in-memory state cleared).");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};