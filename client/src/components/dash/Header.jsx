"use client";
import { useUser } from "@/provider/UserProvider";
import React from "react";
import Link from "next/link";
import { HeadLogoText } from "../HeadLogoText";

export default function Header() {
  const { logoutHandlerFunc } = useUser();
  const router = [
    {
      title: "Dashboard",
      href: "/auth/dashboard",
    },
    {
      title: "Record",
      href: "/auth/record",
    },
  ];
  return (
    <div>
      <div className="flex w-[1440px] h-[72px] justify-between items-center mx-auto">
        <div className="flex  justify-center items-center">
          <HeadLogoText />
          <div className="h-[24px] flex gap-7 ml-7">
            {router.map(({ href, title }) => (
              <Link href={href} key={title}>
                {title}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-5">
          <button
            className="bg-black rounded-md text-white"
            onClick={logoutHandlerFunc}
          >
            Log out
          </button>
          <img className="h-10 w-10" src="/image copy 4.png" alt="" />
        </div>
      </div>
    </div>
  );
}
