"use client";

import { motion } from "framer-motion";
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
        <motion.span
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.7 }}
          onClick={() => changeMode("dark")}
          className="material-icons text-4xl cursor-pointer"
        >
          dark_mode
        </motion.span>
      ) : (
        <motion.span
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.7 }}
          onClick={() => changeMode("light")}
          className="material-icons text-4xl cursor-pointer"
        >
          light_mode
        </motion.span>
      )}
    </>
  );
}
