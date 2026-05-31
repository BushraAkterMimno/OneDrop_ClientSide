import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [token, setToken] = useState(() => {
    return localStorage.getItem("token") || null;
  });

  // ======================
  // REGISTER USER (NEW FIX)
  // ======================
  const registerUser = async (name, email, password, photoURL) => {
    try {
      // backend API call example 
      const newUser = {
        name,
        email,
        password,
        photoURL,
      };

      
      // await axios.post("http://localhost:5000/register", newUser);

      // demo purpose: local save
      setUser(newUser);
      localStorage.setItem("user", JSON.stringify(newUser));

      return newUser;
    } catch (error) {
      throw error;
    }
  };

  // ======================
  // LOGIN USER
  // ======================
  const loginUser = (userData, jwt = "") => {
    setUser(userData);
    setToken(jwt);

    localStorage.setItem("user", JSON.stringify(userData));

    if (jwt) {
      localStorage.setItem("token", jwt);
    }
  };

  // ======================
  // LOGOUT USER
  // ======================
  const logoutUser = () => {
    setUser(null);
    setToken(null);

    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  // ======================
  // RESTORE USER ON REFRESH
  // ======================
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    const savedToken = localStorage.getItem("token");

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }

    if (savedToken) {
      setToken(savedToken);
    }
  }, []);

  const authInfo = {
    user,
    token,
    registerUser, 
    loginUser,
    logoutUser,
    setUser,
    setToken,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;