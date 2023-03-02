"use client";
import { FC, useContext } from "react";
import { logo, title } from "@/ublog.config";
import Link from "next/link";
import Login from "./Login";
import Write from "./Write";
import Themes from "./Themes";
import { ToastContext } from "@/app/context/toast-context";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const { createToast } = useContext(ToastContext);
  return (
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
        <button onClick={() => createToast({ message: "test", type: "info" })}>
          test toast
        </button>
        <Write />
        <Themes />
        <Login />
      </div>
    </div>
  );
};

export default Header;
