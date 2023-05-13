"use client";

import { useState } from "react";
import ThreeCard from "./ThreeCard";
import { motion } from "framer-motion";

export default function Contact() {
  const [open, setOpen] = useState(false);

  const variants = {
    initial: { opacity: 0, y: 60, scale: 0.5 },
    animate: {
      opacity: 1,
      x: 0,
      y: 0,
      translateX: '25%',
      translateY: '25%',
      scale: 1,
      transition: { type: "spring", stiffness: 300 },
    },
    exit: {
      opacity: 0,
      scale: 0.5,
      transition: { type: "spring", stiffness: 300 },
    },
  };

  return (
    <section className="flex flex-col justify-center items-center relative h-[60vh]">
      <ThreeCard text="Contact Me!" onClick={() => setOpen(!open)} />
      {open && (
        <motion.div
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="absolute top-0 left-0 bg-white dark:bg-dark dark:border-2 dark:border-dark-secondary rounded-3xl w-2/3 h-2/3 z-10 drop-shadow-2xl"
        >
          <div className="flex flex-col justify-center items-center h-full relative">
            <div className="absolute right-4 top-4">
              <span onClick={() => setOpen(false)} className="material-icons cursor-pointer text-light-primary dark:text-dark-secondary">close</span>
            </div>
            <div className="font-sans text-light-primary dark:text-dark-primary text-4xl">
              Email:{" "}
              <a href="mailto:nguyenphatit.nl@gmail.com">
                nguyenphatit.nl@gmail.com
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
}
