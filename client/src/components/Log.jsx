/** @format */

"use client";

import React, { useState } from "react";

export const Log = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLoginClick = () => {
    console.log(formData);
  };

  return (
    <div className="flex ">
      <div className="bg-white w-[708px] h-full flex flex-col items-center justify-center">
        <div className="text-xl font-semibold">Geld</div>
        <br />
        <div className="text-2xl font-semibold">Welcome back</div>
        <div>Welcome back, Please enter your details</div>
        <br />
        <div>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-[384px] h-12 bg-gray-200 rounded-lg"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-[384px] h-12 bg-gray-200 rounded-lg mt-5"
          />
        </div>
        <br />
        <div>
          <button
            className="bg-blue-500 w-[384px] h-12 text-white rounded-lg"
            onClick={handleLoginClick}
          >
            Log in
          </button>
        </div>
        <br />
        <div className="flex gap-2 justify-center">
          <div className="gap-5">Don’t have an account?</div>
          <div>
            <button className="text-blue-500">Sign in</button>
          </div>
        </div>
      </div>
      <div className="bg-blue-500 w-1/2 h-full"></div>
    </div>
  );
};
