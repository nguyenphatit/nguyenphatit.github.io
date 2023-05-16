"use client";

import { MouseEvent, useEffect, useRef, useState } from "react";

export default function Clock() {
  const [now, setNow] = useState<Date>(new Date());
  const containerRef = useRef<HTMLDivElement>(null);
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
  const [font, setFont] = useState<number>(0);
  const [background, setBackground] = useState<number>(0);

  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const fontLib = ["font-sans", "font-serif", "font-heading"];
  const bgLib = [
    "bg-light dark:bg-dark",
    "bg-light",
    "bg-dark",
    "bg-[url('/70159941-7026-4579-814a-6a84ceb7fd20.webp')] bg-cover bg-no-repeat bg-center",
  ];

  useEffect(() => {
    const time = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => {
      clearInterval(time);
    };
  }, []);

  useEffect(() => {
    function onFullscreenChange() {
      const isFS = Boolean(document.fullscreenElement);
      setIsFullScreen(isFS);
    }

    document.addEventListener("fullscreenchange", onFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", onFullscreenChange);
  }, []);

  const openFullScreen = () => {
    if (!isFullScreen) {
      if (containerRef.current?.requestFullscreen) {
        containerRef.current?.requestFullscreen();
        setIsFullScreen(true);
      }
    }

    if (isFullScreen) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullScreen(false);
      }
    }
  };

  const changeFont = () => {
    const availableFonts = fontLib.length;
    if (font === availableFonts) setFont(0);
    else setFont(font + 1);
  };

  const changeBackground = () => {
    const availableBg = bgLib.length;
    if (background === availableBg) setBackground(0);
    else setBackground(background + 1);
  };

  return (
    <div
      ref={containerRef}
      className={`border-4 border-light-primary dark:border-dark-primary flex flex-col justify-center items-center rounded-3xl select-none relative py-40 ${bgLib[background]} group`}
    >
      <div className="absolute bottom-3 right-3 flex flex-row-reverse justify-center items-center">
        <button
          type="button"
          onClick={openFullScreen}
          className={`text-light-primary dark:text-dark-primary focus:outline-none m-0 px-2 py-1 leading-3 ${isFullScreen ? 'visible opacity-30 hover:opacity-100' : 'invisible group-hover:visible'}`}
        >
          <span className="material-icons">
            {isFullScreen ? "fullscreen_exit" : "fullscreen"}
          </span>
        </button>
        <button
          type="button"
          onClick={changeFont}
          className={`text-light-primary dark:text-dark-primary focus:outline-none m-0 px-2 py-1 leading-3 ${isFullScreen ? 'visible opacity-30 hover:opacity-100' : 'invisible group-hover:visible'}`}
        >
          <span className="material-icons">text_fields</span>
        </button>
        <button
          type="button"
          onClick={changeBackground}
          className={`text-light-primary dark:text-dark-primary focus:outline-none m-0 px-2 py-1 leading-3 ${isFullScreen ? 'visible opacity-30 hover:opacity-100' : 'invisible group-hover:visible'}`}
        >
          <span className="material-icons">wallpaper</span>
        </button>
      </div>
      <div>
        <h2 className="w-full text-center text-3xl text-light-primary dark:text-dark-primary">
          {`${weekday[now.getDay()]}, ${
            months[now.getMonth()]
          } ${now.getDate()}, ${now.getFullYear()}`}
        </h2>
        <h1
          className={`w-full text-center ${fontLib[font]} text-[16rem] text-light-primary dark:text-dark-primary leading-none`}
        >
          <span>
            {now.getHours() < 10 ? `0${now.getHours()}` : now.getHours()}
          </span>
          <span className="mx-1">:</span>
          <span>
            {now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes()}
          </span>
          <span className="mx-1">:</span>
          <span>
            {now.getSeconds() < 10 ? `0${now.getSeconds()}` : now.getSeconds()}
          </span>
        </h1>
        <h2 className="w-full text-center text-3xl text-light-primary dark:text-dark-primary uppercase">
          {`${now.getHours() >= 12 ? "Past-Morning" : "After-Midnight"}`}
        </h2>
      </div>
    </div>
  );
}
