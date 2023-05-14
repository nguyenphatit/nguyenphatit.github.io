"use client";

import AnimationFade from "../animation/animation-fade";
import AnimationTextCharacter from "../animation/animation-text-character";

export default function Experience() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative">
      <div className="container">
        <h1 className="font-heading text-9xl text-light-primary dark:text-dark-primary mb-12 px-4 md:px-0">
          <AnimationTextCharacter text="Education" />
          <AnimationTextCharacter text="& Experience" />
        </h1>
        <AnimationFade>
          <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-0 mb-8">
            <div className="flex-1 w-full md:mr-3 p-4 border-4 border-light-primary dark:border-dark-primary rounded-xl">
              <div className="text-3xl font-bold text-gray-600 dark:text-gray-400">
                2014-2018
              </div>
              <div className="text-4xl md:text-6xl font-bold text-light-primary dark:text-dark-primary">
                Student
              </div>
              <div className="text-3xl font-bold text-gray-800 dark:text-gray-100">
                Nong Lam University
              </div>
            </div>
            <div className="flex-1">
              <p className="text-xl leading-relaxed">
                I was a student at Nong Lam University Ho Chi Minh City.
              </p>
            </div>
          </div>
        </AnimationFade>
        <AnimationFade>
          <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-0 mb-8">
            <div className="flex-1 w-full md:mr-3 p-4 border-4 border-light-primary dark:border-dark-primary rounded-xl">
              <div className="text-3xl font-bold text-gray-600 dark:text-gray-400">
                2018-Present
              </div>
              <div className="text-4xl md:text-6xl font-bold text-light-primary dark:text-dark-primary">
                Software Developer
              </div>
              <div className="text-3xl font-bold text-gray-800 dark:text-gray-100">
                TMA Solutions
              </div>
            </div>
            <div className="flex-1">
              <p className="text-xl leading-relaxed">
                I have been working as a software developer at TMA Solutions for
                over 4 years, during which time I have gained extensive
                experience in using remote data via REST APIs, JSON, and
                GraphQL. Additionally, I have expertise in integrating with
                third-party libraries.
              </p>
            </div>
          </div>
        </AnimationFade>
      </div>
    </section>
  );
}
