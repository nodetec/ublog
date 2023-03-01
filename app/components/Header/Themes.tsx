"use client";
import { FC, useEffect, useState } from "react";
import { Themes as ThemesIcon } from "@/app/icons";
import ChevronDown from "@/app/icons/ChevronDown";
import { themes } from "@/ublog.config";

interface ThemesProps {}

const Themes: FC<ThemesProps> = ({}) => {
  const stored = JSON.parse(localStorage.getItem("_theme") || themes[0]);
  const [active, setActive] = useState(stored);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", active);
    localStorage.setItem("_theme", JSON.stringify(active));
  }, [active]);

  return (
    <div className="dropdown dropdown-end" title="Change Theme">
      <div className="btn gap-1 normal-case btn-ghost" tabIndex={0}>
        <ThemesIcon />
        <span>Themes</span>
        <ChevronDown />
      </div>
      <div className="dropdown-content bg-base-200 text-base-content rounded-t-box rounded-b-box top-px max-h-96 h-[70vh] w-52 overflow-y-auto shadow-2xl mt-16">
        <div className="grid grid-cols-1 gap-3 p-3" tabIndex={0}>
          {themes.map((theme, i) => (
            <button
              key={i}
              className="outline-base-content overflow-hidden rounded-lg text-left [&_svg]:visible"
              data-set-theme={theme}
              data-act-class="[&_svg]:visible"
              onClick={() => setActive(theme)}
            >
              <div
                data-theme={theme}
                className="bg-base-100 text-base-content w-full cursor-pointer font-sans"
              >
                <div className="grid grid-cols-5 grid-rows-3">
                  <div className="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className={`w-3 h-3 ${
                        active === theme ? "visible" : "hidden"
                      }`}
                    >
                      <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                    </svg>
                    <div className="flex-grow text-sm font-bold">{theme}</div>
                    <div className="flex flex-shrink-0 flex-wrap gap-1 h-full">
                      <div className="bg-primary w-2 rounded"></div>
                      <div className="bg-secondary w-2 rounded"></div>
                      <div className="bg-accent w-2 rounded"></div>
                      <div className="bg-neutral w-2 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Themes;
