"use client";

import AnimationFade from "../animation/animation-fade";
import AnimationTextCharacter from "../animation/animation-text-character";
import { motion } from "framer-motion";

function Card({
  duration,
  position,
  location,
  description,
}: {
  duration: string;
  position: string;
  location: string;
  description: string;
}) {
  return (
    <AnimationFade>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="flex flex-col md:flex-row justify-between items-center px-4 md:px-0 mb-8 cursor-pointer select-none"
      >
        <div className="flex-1 w-full ltr:md:mr-3 rtl:md:ml-3 p-4 border-4 border-light-primary dark:border-dark-primary rounded-xl bg-gradient-to-r from-light-primary/30 dark:from-dark-primary/30">
          <div className="text-3xl font-bold text-gray-600 dark:text-gray-400">
            {duration}
          </div>
          <div className="text-4xl md:text-6xl font-bold text-light-primary dark:text-dark-primary">
            {position}
          </div>
          <div className="text-3xl font-bold text-gray-800 dark:text-gray-100">
            {location}
          </div>
        </div>
        <div className="flex-1">
          <p className="text-xl leading-relaxed">{description}</p>
        </div>
      </motion.div>
    </AnimationFade>
  );
}

export default function Experience() {
  return (
    <section className="flex flex-col justify-center items-center relative pb-60">
      <div className="container">
        <h1 className="font-heading text-9xl text-light-primary dark:text-dark-primary mb-12 px-4 md:px-0 select-none cursor-default">
          <AnimationTextCharacter text="Education" />
          <AnimationTextCharacter text="& Experience" />
        </h1>
        <Card
          duration="2014-2018"
          position="Student"
          location="Nong Lam University"
          description="I was a student at Nong Lam University Ho Chi Minh City."
        />
        <Card
          duration="2018-Present"
          position="Software Developer"
          location="TMA Solutions"
          description="I have been working as a software developer at TMA Solutions for
          over 4 years, during which time I have gained extensive
          experience in using remote data via REST APIs, JSON, and
          GraphQL. Additionally, I have expertise in integrating with
          third-party libraries."
        />
      </div>
    </section>
  );
}
