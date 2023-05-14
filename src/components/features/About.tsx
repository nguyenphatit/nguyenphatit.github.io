"use client";

import AnimationTextCharacter from "../animation/animation-text-character";
import AnimationTextFade from "../animation/animation-fade";

export default function About() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative">
      <div className="container mx-auto">
        <h1 className="font-heading text-9xl text-light-primary dark:text-dark-primary mb-12 px-4 md:px-0">
          <AnimationTextCharacter text="About" />
        </h1>
        <div className="text-2xl md:text-3xl md:leading-[60px] text-light-secondary dark:text-dark-secondary">
          <AnimationTextFade>
            <p className="px-4 md:px-0">
              Currently work as a software engineer at TMA Solutions in Ho Chi
              Minh City. Due to my interest in web programming and after
              completing a few hobby projects, I have decided to offer my
              services to paying customers. My goal is to provide users with a
              fantastic web experience. I am passionate about both design and
              development and strive to create products that not only look
              amazing but also function effectively in various ways.
            </p>
          </AnimationTextFade>
        </div>
      </div>
    </section>
  );
}
