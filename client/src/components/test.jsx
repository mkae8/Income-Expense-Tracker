"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { HeadLogoText } from "./HeadLogoText";
import { HeadText } from "./HeadText";
import { Button } from "./Button";
import { Bottom } from "./Bottom";
import { Inputt } from "./Inputt";
import Link from "next/link";
import { Loading } from "./Loading";

export const LogInSign = () => {
  const { push } = useRouter();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false); // Ачааллын төлөвийг удирдана
  const [userDetail, setUserDetail] = useState({
    name: "",
    email: "",
    password: "",
    rePassword: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserDetail({ ...userDetail, [name]: value });
  };

  const handleSignUpClick = async () => {
    if (userDetail.password !== userDetail.rePassword) {
      setError("Passwords do not match");
      return;
    }

    // Ачаалал эхлүүлнэ
    setLoading(true);

    try {
      const result = await axios.post("http://localhost:8000/api/user/signup", {
        name: userDetail.name,
        password: userDetail.password,
        email: userDetail.email,
      });

      // Ачаалал хийж дууссан ч зам солигдохыг хүлээнэ
      push("/auth/login");
    } catch (error) {
      setLoading(false);
      setError("Error occurred during sign-up");
    }
  };

  // Route солигдох үед ачааллыг гаргах
  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center w-1/2 h-screen">
          <div className="w-[384px] h-[554px] flex flex-col justify-center items-center gap-10">
            <HeadLogoText />

            <HeadText
              headtext={"Create Geld account"}
              desc={"Sign up below to create your Wallet account"}
            />

            <div className="w-[384px] flex flex-col h-[304px] gap-4">
              <Inputt
                type="text"
                placeholder={"Name"}
                name="name"
                onChange={handleChange}
              />
              <Inputt
                type={"text"}
                placeholder={"Email"}
                name="email"
                onChange={handleChange}
              />
              <Inputt
                type={"password"}
                placeholder={"Password"}
                name="password"
                onChange={handleChange}
              />
              <Inputt
                onChange={handleChange}
                type={"password"}
                placeholder={"Re-Password"}
                name="rePassword"
              />
              <h1 className="text-red-700 flex justify-center items-center">
                {error}
              </h1>
              <Button
                text={"Sign Up"}
                clickHandler={handleSignUpClick}
                disabled={loading} // Ачаалж байх үед товчийг идэвхгүй болгоно
              />
            </div>

            <Link href={"/auth/login"}>
              <Bottom text={"Already have account?"} login={"Log in"} />
            </Link>
          </div>
        </div>
        <div className="bg-[#0166FF] w-1/2 h-screen"></div>
      </div>
    </>
  );
};
