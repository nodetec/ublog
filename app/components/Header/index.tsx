"use client";
import { FC } from "react";
import { logo, title } from "@/ublog.config";
import Link from "next/link";
import Login from "./Login";
import Write from "./Write";
import Themes from "./Themes";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => (
  <div className="navbar bg-base-100">
    <div className="flex-1">
      <Link href="/" className="font-bold text-xl flex gap-2">
        <div className="w-8 rounded-full bg-white">
          <img src={logo} alt="" />
        </div>
        {title}
      </Link>
    </div>
    <div className="flex items-center gap-2">
      <Write />
      <Themes />
      <Login />
    </div>
  </div>
);

export default Header;
