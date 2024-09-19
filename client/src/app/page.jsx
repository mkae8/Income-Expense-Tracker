import { HeadLogoText } from "@/components/HeadLogoText";
import Link from "next/link";
import React from "react";

export default function Home() {
  const routers = [
    {
      title: "SignUp",
      href: "auth/signup",
    },
    {
      title: "LogIn",
      href: "auth/login",
    },
  ];

  return (
    <div>
      <div className="flex flex-col justify-center items-center py-48 gap-10">
        <HeadLogoText />
        <div className="h-[24px] flex gap-16">
          {routers.map(({ href, title }) => (
            <Link href={href} key={title}>
              {title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
