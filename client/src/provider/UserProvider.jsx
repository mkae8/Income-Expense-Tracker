"use client";

import { useRouter } from "next/navigation";
import { children, createContext, useEffect, useState } from "react";
import axios from "axios";

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  const loginHandlerFunc = async (email, password) => {
    try {
      const result = await axios.post(
        "http://localhost:8000/api/user/login",
        isLoggedIn
      );
      console.log(result);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      push("/");
    } else {
    }
  });
};
