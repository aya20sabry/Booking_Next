"use client"
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [token, setEmail] = useState("");


  const login = (userEmail) => {
    setEmail(userEmail);
    localStorage.setItem("token", userEmail);
  };

  const logout = () => {
    setEmail("");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};