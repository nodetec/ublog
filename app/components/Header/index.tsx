"use client";
import { FC, useEffect, useState } from "react";
import { logo, title } from "@/ublog.config";
import Link from "next/link";
import Login from "./Login";
import Write from "./Write";
import Themes from "./Themes";
import Relays from "./Relays";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let prevY = 0;

    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY <= 150 || currentY < prevY) {
        setVisible(true);
      } else {
        setVisible(false);
      }
      prevY = currentY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar bg-base-100 sticky z-30 top-0 transition-all ${
        visible ? "" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="flex-1">
        <Link href="/" className="font-bold text-xl flex gap-2">
          {logo ? (
            <div className="w-8">
              <img src={logo} alt="" />
            </div>
          ) : null}
          {title ? <span>{title}</span> : null}
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <Write />
        <Relays />
        <Themes />
        <Login />
      </div>
    </nav>
  );
};

export default Header;
