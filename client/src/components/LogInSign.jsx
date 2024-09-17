import Link from "next/link";
import React from "react";
import { Log } from "./Log";

export const LogInSign = () => {
  const routers = [
    {
      title: "SignUp",
      href: "signup",
    },
    {
      title: "LogIn",
      href: "login",
    },
  ];

  return (
    <div>
      <Log />
      <div className="h-[24px] flex gap-10">
        {routers.map(({ href, title }) => (
          <Link href={href} key={title}>
            {title}
          </Link>
        ))}
      </div>
    </div>
  );
};
