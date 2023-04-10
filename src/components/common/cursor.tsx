import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Cursor() {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [cursorVariants, setCursorVariants] = useState("default");

  const variants = {
    default: {
      x: mousePosition.x - 11,
      y: mousePosition.y - 11,
    },
    hover: {
      height: 80,
      width: 80,
      backgroundColor: "rgba(255, 255, 255, 1)",
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
    }
  };

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseEnter = (e: MouseEvent) => {
      setCursorVariants("hover");
    };

    const onMouseLeave = (e: MouseEvent) => {
      setCursorVariants("default");
    };

    window.addEventListener("mousemove", onMouseMove);

    const links = document.querySelectorAll("a");

    links.forEach((link) => {
      link.addEventListener("mouseenter", onMouseEnter);
      link.addEventListener("mouseleave", onMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);

      links.forEach((link) => {
        link.removeEventListener("mouseenter", onMouseEnter);
        link.removeEventListener("mouseleave", onMouseLeave);
      });
    };
  });

  return (
    <motion.div
      variants={variants}
      animate={cursorVariants}
      className="cursor"
      data-testid="cursor"
    />
  );
}
