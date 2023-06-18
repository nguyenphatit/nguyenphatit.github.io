"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ToggleTheme() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex flex-row gap-4">
      {theme !== "system" && (
        <motion.div
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.7 }}
          onClick={() => setTheme("system")}
          className="text-4xl cursor-pointer relative group"
        >
          <span className="material-icons text-4xl">settings_suggest</span>
          <div className="opacity-0 group-hover:opacity-100 absolute bottom-[-50%] left-[-50%] text-xl font-normal">System</div>
        </motion.div>
      )}
      {theme !== "light" && (
        <motion.div
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.7 }}
          onClick={() => setTheme("light")}
          className="text-4xl cursor-pointer relative group"
        >
          <span className="material-icons text-4xl">light_mode</span>
          <div className="opacity-0 group-hover:opacity-100 absolute bottom-[-50%] left-[-16%] text-xl font-normal">Light</div>
        </motion.div>
      )}
      {theme !== "dark" && (
        <motion.div
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.7 }}
          onClick={() => setTheme("dark")}
          className="text-4xl cursor-pointer relative group"
        >
          <span className="material-icons text-4xl">dark_mode</span>
          <div className="opacity-0 group-hover:opacity-100 absolute bottom-[-50%] left-[-16%] text-xl font-normal">Dark</div>
        </motion.div>
      )}
    </div>
  );
}
