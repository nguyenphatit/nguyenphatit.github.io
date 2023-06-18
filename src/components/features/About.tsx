"use client";

import AnimationTextCharacter from "../animation/animation-text-character";
import AnimationTextFade from "../animation/animation-fade";

export default function About() {
  return (
    <section className="flex flex-col justify-center items-center relative pb-60">
      <div className="container mx-auto">
        <h1 className="font-heading text-9xl text-light-primary dark:text-dark-primary mb-12 px-4 md:px-0 select-none cursor-default">
          <AnimationTextCharacter text="About" />
        </h1>
        <div className="text-2xl md:text-3xl md:leading-[60px] text-light-secondary dark:text-dark-secondary">
          <AnimationTextFade>
            <p className="px-4 md:px-0 select-none">
              I am currently employed as a software engineer at TMA Solutions in
              Ho Chi Minh City. Combining my keen interest in web programming
              and successful completion of several personal projects, I have
              made the decision to extend my services to clients in exchange for
              compensation. My primary objective is to deliver an exceptional
              web experience to users. With a deep passion for both design and
              development, I am committed to crafting products that not only
              possess stunning aesthetics but also operate efficiently across
              diverse functionalities.
            </p>
          </AnimationTextFade>
        </div>
      </div>
    </section>
  );
}
