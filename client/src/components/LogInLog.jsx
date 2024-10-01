/** @format */

"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { HeadLogoText } from "./HeadLogoText";
import { HeadText } from "./HeadText";
import { Button } from "./Button";
import { Bottom } from "./Bottom";
import { Inputt } from "./Inputt";
import axios from "axios";
import Link from "next/link";
import { Loading } from "./Loading";

export const LogInLog = () => {
  const { push } = useRouter();
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const result = await axios.post(
        "http://localhost:8000/api/user/login",
        userData
      );

      typeof window !== "undefined" &&
        localStorage.setItem("token", result.data.token);

      push("/auth/step");
    } catch (error) {
      console.log(error);

      setLoading(false);
      setError("error");
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="flex  justify-center items-center w-1/2 h-screen ">
          <div className="w-[384px] h-[554px] flex flex-col justify-center items-center gap-10">
            <HeadLogoText />

            <HeadText
              headtext={"Welcome Back"}
              desc={"Welcome back, Please enter your details"}
            />

            <div className="w-[384px] flex flex-col h-[304px] gap-4 ">
              <form
                className="w-[384px] flex flex-col h-[176px] gap-4"
                onSubmit={handleSubmit}
              >
                <Inputt
                  type="email"
                  name="email"
                  value={userData.email}
                  placeholder="Email"
                  onChange={handleChange}
                />
                <Inputt
                  type="password"
                  name="password"
                  value={userData.password}
                  placeholder="Password"
                  onChange={handleChange}
                />
                <h1 className="text-red-700 flex justify-center items-center ">
                  {error}
                </h1>
                <Button text={"Log In"} type="submit" />
              </form>
            </div>
            <Link href={"/auth/signup"}>
              <Bottom text={"Don’t have account?"} login={"Sign up"} />
            </Link>
          </div>
        </div>
        <div className="bg-[#0166FF] w-1/2 h-screen"></div>
      </div>
    </>
  );
};
