"use client";

import AnimationFade from "../animation/animation-fade";
import AnimationTextCharacter from "../animation/animation-text-character";
import { motion } from "framer-motion";

function Card({ text }: { text: string }) {
  return (
    <AnimationFade delay={Math.random()}>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="p-4 border-4 border-light-primary dark:border-dark-primary rounded-xl bg-gradient-to-r from-light-primary/30 dark:from-dark-primary/30 cursor-pointer select-none"
      >
        <div className="text-4xl md:text-6xl font-bold text-light-primary dark:text-dark-primary text-center select-none">
          {text}
        </div>
      </motion.div>
    </AnimationFade>
  );
}

export default function HardSkill() {
  return (
    <section className="flex flex-col justify-center items-center relative pb-60">
      <div className="container">
        <h1 className="font-heading text-9xl text-light-primary dark:text-dark-primary mb-12 px-4 md:px-0 select-none cursor-default">
          <AnimationTextCharacter text="Hard Skills" />
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 md:p-0">
          <Card text="ReactJS" />
          <Card text="NextJS" />
          <Card text="GatsbyJS" />
          <Card text="Angular" />
          <Card text="NodeJS" />
          <Card text="VueJS" />
          <Card text="Figma" />
          <Card text="Adobe XD" />
        </div>
      </div>
    </section>
  );
}
