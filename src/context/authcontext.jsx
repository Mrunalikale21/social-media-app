import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const [error, setError] = useState(null);

  const login = async (inputs) => {
    try {
      const res = await axios.post("http://localhost:8800/api/auth/login", inputs, {
        withCredentials: true,
      });

      setCurrentUser(res.data);
      setError(null); // clear any previous errors
    } catch (err) {
      console.error("Login error:", err);
      setError(err.response?.data || err.message);
    }
  };

  const register = async (inputs) => {
    try {
      const res = await axios.post("http://localhost:8800/api/auth/register", inputs);
      setCurrentUser(res.data);
      setError(null); // clear any previous errors
    } catch (err) {
      console.error("Registration error:", err);
      setError(err.response?.data || err.message);
    }
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, register, error }}>
      {children}
    </AuthContext.Provider>
  );
};
