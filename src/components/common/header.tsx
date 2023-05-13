"use client";

import { useState } from "react";
import ToggleTheme from "./toggleTheme";
import Social from "./social";
import Logo from "./logo";
import { useTheme } from "@/context/theme.context";

export default function Header() {
  const [activeMenu, setActiveMenu] = useState<boolean>(false);
  const { mode } = useTheme();
  return (
    <header
      className={`header fixed flex justify-between items-center w-full h-[6.75rem] z-50 bg-light-primary dark:bg-dark ${
        activeMenu ? " activated" : ""
      }`}
    >
      <Logo />
      <div>
        <button
          type="button"
          aria-label="toggle menu"
          onClick={() => setActiveMenu(!activeMenu)}
          className="inline-block cursor-pointer fixed z-50 right-[16px] top-[16px] w-[70px] h-[70px] border-none rounded-full p-0 bg-light dark:bg-dark-primary text-center focus:outline-none group nav-tgl"
        >
          <span
            aria-hidden="true"
            className="inline-block relative h-[2px] w-[34px] rounded-sm bg-light-primary dark:bg-dark align-middle
              before:inline-block before:absolute before:content-[''] before:h-[2px] before:rounded-sm before:bg-light-primary dark:before:bg-dark before:transition-all before:top-[-11px] before:left-[6px] before:w-[22px] group-hover:before:w-[34px] group-hover:before:left-0 
              after:inline-block after:absolute after:content-[''] after:h-[2px] after:rounded-sm after:bg-light-primary dark:after:bg-dark after:transition-all after:top-[11px] after:left-[6px] after:w-[22px] group-hover:after:w-[34px] group-hover:after:left-0
          "
          ></span>
        </button>
        <nav
          className={`
          overflow-hidden
          before:block before:fixed before:top-0 before:left-0 before:content-[''] before:w-screen before:h-screen before:bg-light dark:before:bg-black before:transition-all ${
            activeMenu
              ? "before:duration-1000 before:visible"
              : "before:duration-300 before:invisible"
          } nav`}
        >
          <div
            className={`fixed z-40 h-screen bottom-0 flex justify-end items-end ${
              activeMenu
                ? "left-0 transition-all duration-200 delay-300"
                : "-left-full transition-all duration-200"
            }`}
          >
            <ul className="pl-4 pb-4 md:pl-40 md:pb-40">
              <li className="font-bold text-5xl md:text-8xl select-none dark:text-dark-secondary text-black hover:pl-12 transition-all duration-300 relative mb-8 after:content-['01'] after:text-9xl after:absolute after:bottom-[-10px] after:left-0 after:text-light-primary dark:after:text-dark-primary after:-z-[1] after:invisible hover:after:visible after:opacity-0 hover:after:opacity-60 after:transition-all after:duration-150">
                <a className="relative" href="">
                  Home
                </a>
              </li>
              <li className="font-bold text-5xl md:text-8xl select-none dark:text-dark-secondary text-black hover:pl-12 transition-all duration-300 relative mb-8 after:content-['02'] after:text-9xl after:absolute after:bottom-[-10px] after:left-0 after:text-light-primary dark:after:text-dark-primary after:-z-[1] after:invisible hover:after:visible after:opacity-0 hover:after:opacity-60 after:transition-all after:duration-150">
                <a className="" href="">
                  Blog
                </a>
              </li>
              <li className="font-bold text-5xl md:text-8xl select-none dark:text-dark-secondary text-black hover:pl-12 transition-all duration-300 relative mb-8 after:content-['03'] after:text-9xl after:absolute after:bottom-[-10px] after:left-0 after:text-light-primary dark:after:text-dark-primary after:-z-[1] after:invisible hover:after:visible after:opacity-0 hover:after:opacity-60 after:transition-all after:duration-150">
                <a className="" href="">
                  Labs
                </a>
              </li>
              <li className="font-bold text-5xl md:text-8xl select-none dark:text-dark-secondary text-black flex flex-row justify-start items-center">
                <ToggleTheme />
                <Social mode={mode} size="medium" />
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
