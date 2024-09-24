"use client";

import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  const loginHandlerFunc = async (email, password) => {
    try {
      const result = await axios.post("http://localhost:8000/api/user/login", {
        email,
        password,
      });

      if (result.data.token) {
        window.localStorage.setItem("token", result.data.token);
        setIsLoggedIn(true);
        router.push("/auth/dashboard");
      }
    } catch (error) {
      console.error("Логин хийхэд алдаа гарлаа:", error.message);
    }
  };

  const logoutHandlerFunc = () => {
    window.localStorage.removeItem("token");
    setIsLoggedIn(false);
    router.push("/auth/login");
  };

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      router.push("/auth/dashboard");
    } else {
      setIsLoggedIn(false);
      router.push("/auth/login");
    }
  }, []);

  return (
    <UserContext.Provider
      value={{ isLoggedIn, loginHandlerFunc, logoutHandlerFunc }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const user = useContext(UserContext);
  return user;
};
