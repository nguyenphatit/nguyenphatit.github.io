"use client";

import { useTheme } from "@/context/theme.context";
import { useEffect } from "react";

export default function ToggleTheme() {
  const { mode, changeMode } = useTheme();

  useEffect(() => {
    if (mode === "light") {
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
    }
  }, [mode]);

  return (
    <>
      {mode && mode === "light" ? (
        <span
          onClick={() => changeMode("dark")}
          className="material-icons text-4xl cursor-pointer"
        >
          dark_mode
        </span>
      ) : (
        <span
          onClick={() => changeMode("light")}
          className="material-icons text-4xl cursor-pointer"
        >
          light_mode
        </span>
      )}
    </>
  );
}
