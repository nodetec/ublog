"use client";
import { useEffect, useState } from "react";
import { ChevronUp } from "@/app/icons";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let prevY = 0;

    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > 150 && currentY < prevY) {
        setVisible(true);
      } else {
        setVisible(false);
      }
      prevY = currentY;
    };

    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      className={`fixed right-4 btn btn-sm btn-circle btn-ghost btn-active transition-transform bottom-4 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
      onClick={() => window.scrollTo(0, 0)}
    >
      <ChevronUp />
    </button>
  );
};

export default ScrollToTop;
