"use client"
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [email, setEmail] = useState("");

  const login = (userEmail) => {
    setEmail(userEmail);
    localStorage.setItem("email", userEmail);
  };

  const logout = () => {
    setEmail("");
    localStorage.removeItem("email");
  };

  return (
    <AuthContext.Provider value={{ email, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};