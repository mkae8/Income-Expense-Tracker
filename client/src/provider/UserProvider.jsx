/** @format */

// "use client";

// import { useRouter } from "next/navigation";
// import { children, createContext, useEffect, useState } from "react";
// import axios from "axios";

// const UserContext = createContext(null);

// export const UserProvider = ({ children }) => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const router = useRouter();

//   const loginHandlerFunc = async (email, password) => {
//     try {
//       const result = await axios.post(
//         "http://localhost:8000/api/user/login",
//         isLoggedIn
//       );
//       console.log(result);
//     } catch (error) {
//       throw new Error(error.message);
//     }
//   };

//   useEffect(() => {
//     const token = window.localStorage.getItem("token");
//     if (token) {
//       setIsLoggedIn(true);
//       push("/");
//     } else {
//     }
//   });
// };

"use client";

import { useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  const loginHandlerFunc = async (email, password) => {
    try {
      const result = await axios.post("http://localhost:8000/api/user/login", {
        email,
        password,
      });
      console.log(result);
      if (result.data.token) {
        window.localStorage.setItem("token", result.data.token);
        setIsLoggedIn(true);
        router.push("/");
      }
    } catch (error) {
      console.error("Логин хийхэд алдаа гарлаа:", error.message);
    }
  };

  const logoutHandlerFunc = () => {
    window.localStorage.removeItem("token"); // Токеныг устгах
    setIsLoggedIn(false); // Логин статусыг өөрчлөх
    router.push("/login"); // Лог-аут хийсний дараа логин хуудас руу шилжих
  };

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      router.push("/");
    }
  }, [router]);

  return (
    <UserContext.Provider
      value={{ isLoggedIn, loginHandlerFunc, logoutHandlerFunc }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
