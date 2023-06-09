"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ToggleTheme from "./toggle-theme";
import Social from "./social";
import Logo from "./logo";

export default function AppHeader() {
  const [activeMenu, setActiveMenu] = useState<boolean>(false);
  return (
    <header
      className={`header fixed flex justify-between items-center w-full h-[6.75rem] z-50 bg-light-primary dark:bg-dark ${
        activeMenu ? " activated" : ""
      }`}
    >
      <Logo />
      <div>
        <motion.button
          type="button"
          aria-label="toggle menu"
          onClick={() => setActiveMenu(!activeMenu)}
          className="inline-block cursor-pointer fixed z-50 ltr:right-[16px] rtl:left-[16px] top-[16px] w-[70px] h-[70px] border-none rounded-full p-0 bg-light dark:bg-dark-primary text-center focus:outline-none group nav-tgl"
        >
          <span
            aria-hidden="true"
            className="inline-block relative h-[2px] w-[34px] rounded-sm bg-light-primary dark:bg-dark align-middle
              before:inline-block before:absolute before:content-[''] before:h-[2px] before:rounded-sm before:bg-light-primary dark:before:bg-dark before:transition-all before:top-[-11px] before:left-[6px] before:w-[22px] group-hover:before:w-[34px] group-hover:before:left-0 
              after:inline-block after:absolute after:content-[''] after:h-[2px] after:rounded-sm after:bg-light-primary dark:after:bg-dark after:transition-all after:top-[11px] after:left-[6px] after:w-[22px] group-hover:after:w-[34px] group-hover:after:left-0
          "
          ></span>
        </motion.button>
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
                ? "ltr:left-0 rtl:right-0 transition-all duration-200 delay-300"
                : "ltr:-left-full rtl:-right-full transition-all duration-200"
            }`}
          >
            <ul className="ltr:pl-4 rtl:pr-4 pb-4 ltr:md:pl-40 rtl:md:pr-40 md:pb-40">
              <motion.li
                whileTap={{ scale: 0.7 }}
                className={`font-bold text-5xl md:text-8xl select-none dark:text-dark-secondary text-black ltr:hover:pl-20 rtl:hover:pr-20 transition-all duration-300 relative mb-8
                  before:content-['01'] before:text-9xl before:absolute before:bottom-[-10px] ltr:before:left-0 rtl:before:right-0 before:text-light-primary dark:before:text-dark-primary before:-z-[1] before:invisible hover:before:visible before:opacity-0 hover:before:opacity-60 before:transition-all before:duration-150`}
              >
                <a className="relative" href={"/"}>
                  Home
                </a>
              </motion.li>
              <motion.li
                whileTap={{ scale: 0.7 }}
                className={`font-bold text-5xl md:text-8xl select-none dark:text-dark-secondary text-black ltr:hover:pl-20 rtl:hover:pr-20 transition-all duration-300 relative mb-8
                  before:content-['02'] before:text-9xl before:absolute before:bottom-[-10px] ltr:before:left-0 rtl:before:right-0 before:text-light-primary dark:before:text-dark-primary before:-z-[1] before:invisible hover:before:visible before:opacity-0 hover:before:opacity-60 before:transition-all before:duration-150`}
              >
                <a className="relative" href={"/blog"}>
                  Blog
                </a>
              </motion.li>
              <motion.li
                whileTap={{ scale: 0.7 }}
                className={`font-bold text-5xl md:text-8xl select-none dark:text-dark-secondary text-black ltr:hover:pl-20 rtl:hover:pr-20 transition-all duration-300 relative mb-8
                  before:content-['03'] before:text-9xl before:absolute before:bottom-[-10px] ltr:before:left-0 rtl:before:right-0 before:text-light-primary dark:before:text-dark-primary before:-z-[1] before:invisible hover:before:visible before:opacity-0 hover:before:opacity-60 before:transition-all before:duration-150`}
              >
                <a className="relative" href={"/my-lab"}>
                  Lab
                </a>
              </motion.li>
              <li className="font-bold text-5xl md:text-8xl select-none dark:text-dark-secondary text-black flex flex-row justify-start items-center mb-8">
                <Social size="medium" />
              </li>
              <li className="font-bold text-5xl md:text-8xl select-none dark:text-dark-secondary text-black flex flex-row justify-start items-center">
                <ToggleTheme />
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
