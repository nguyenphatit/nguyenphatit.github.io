'use client';

import { useEffect } from "react";

interface Props {
  text: string;
  className?: string;
}

// 🔡 Characters to cycle trough
let allowedCharacters = ["X", "$", "Y", "#", "?", "*", "0", "1", "+"];

export default function RandomTextEffect({ text, className }: Props) {
  useEffect(() => {
    const textHoverEffect = document.querySelectorAll(".text-hover-effect");

    textHoverEffect.forEach((element: any) => {
      const eventHandler = createEventHandler();
      element.addEventListener("mouseover", eventHandler);
    });

    return () => {
      textHoverEffect.forEach((element: any) => {
        const eventHandler = createEventHandler();
        element.removeEventListener("mouseover", eventHandler);
      });
    };
  });

  // 🎁 Function to return random character
  const getRandomCharacter = () => {
    const randomIndex = Math.floor(Math.random() * allowedCharacters.length);
    return allowedCharacters[randomIndex];
  };

  const createEventHandler = () => {
    // 🏃‍♂️ Keep track of event in progress
    let isInProgress = false;

    // ⏱ Delay between text updates
    const BASE_DELAY = 70;

    // 👇 Event handler implementation
    return function handleHoverEvent(
      e: React.MouseEvent<HTMLSpanElement, MouseEvent>
    ) {
      if (isInProgress) {
        return;
      }

      const target = e.target as HTMLElement;
      const text = target.innerHTML;
      const randomizedText = text.split("").map(getRandomCharacter).join("");

      for (let i = 0; i < text.length; i++) {
        isInProgress = true;

        setTimeout(() => {
          const nextIndex = i + 1;
          const currentTarget = e.target as HTMLElement;
          currentTarget.innerHTML = `${text.substring(
            0,
            nextIndex
          )}${randomizedText.substring(nextIndex)}`;

          if (nextIndex === text.length) {
            isInProgress = false;
          }
        }, i * BASE_DELAY);
      }
    };
  };

  return (
    <span
      className={`text-hover-effect ${className || ""}`}
      data-testid="text-hover-effect"
    >
      {text}
    </span>
  );
}
