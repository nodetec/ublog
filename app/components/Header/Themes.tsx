"use client";
import { FC, useEffect, useState } from "react";
import { Check, Themes as ThemesIcon } from "@/app/icons";
import ChevronDown from "@/app/icons/ChevronDown";
import { themes, customThemes } from "@/ublog.config";

const themesWithType: string[] = themes;

const allThemes = themesWithType.concat(
  ...customThemes.map((theme) => Object.keys(theme))
);

interface ThemesProps {}

const Themes: FC<ThemesProps> = ({}) => {
  const [active, setActive] = useState(allThemes[0]);

  useEffect(() => {
    const stored = localStorage.getItem("_theme");
    if (!!stored) {
      setActive(JSON.parse(stored));
    } else {
      setActive(allThemes[0]);
    }
  }, []);

  const handleThemeChange = (theme: string) => {
    localStorage.setItem("_theme", JSON.stringify(theme));
    setActive(theme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", active);
  }, [active]);

  if (allThemes.length <= 1) return null;

  return (
    <div className="dropdown dropdown-end" title="Change Theme">
      <div className="btn gap-1 normal-case btn-ghost flex-nowrap" tabIndex={0}>
        <ThemesIcon />
        <ChevronDown />
      </div>
      <div className="dropdown-content bg-base-200 text-base-content rounded-t-box rounded-b-box top-px max-h-96 w-52 overflow-y-auto shadow-2xl mt-16">
        <div className="grid grid-cols-1 gap-3 p-3" tabIndex={0}>
          {allThemes.map((theme, i) => (
            <button
              key={i}
              className="outline-base-content overflow-hidden rounded-lg text-left [&_svg]:visible"
              data-set-theme={theme}
              data-act-class="[&_svg]:visible"
              onClick={() => handleThemeChange(theme)}
            >
              <div
                data-theme={theme}
                className="bg-base-100 text-base-content w-full cursor-pointer font-sans"
              >
                <div className="grid grid-cols-5 grid-rows-3">
                  <div className="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
                    <Check
                      size={12}
                      className={active === theme ? "opacity-100" : "opacity-0"}
                    />
                    <div className="flex-grow text-sm font-bold">{theme}</div>
                    <div className="flex flex-shrink-0 flex-wrap gap-1 h-full">
                      <div className="bg-primary w-2 rounded" />
                      <div className="bg-secondary w-2 rounded" />
                      <div className="bg-accent w-2 rounded" />
                      <div className="bg-neutral w-2 rounded" />
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
