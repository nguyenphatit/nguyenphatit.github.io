'use client';

import { useEffect } from "react";

interface Props {
  text: string;
  className?: string;
}

export default function IncreaseTextEffect({ text, className }: Props) {
  let directorEffect = `hover:tracking-wider hover:scale-125 origin-center`;

  useEffect(() => {
    const letters = document.querySelectorAll(".effect__letter");

    letters.forEach((letter, index) => {
      letter.addEventListener("mouseover", () => {
        if (index > 0) {
          letter.previousElementSibling?.classList.add("scale-110");
          letter.previousElementSibling?.classList.add("tracking-wider");
        }

        if (index < letters.length - 1) {
          letter.nextElementSibling?.classList.add("scale-110");
          letter.nextElementSibling?.classList.add("tracking-wider");
        }
      });

      letter.addEventListener("mouseout", () => {
        if (index > 0) {
          letter.previousElementSibling?.classList.remove("scale-110");
          letter.previousElementSibling?.classList.remove("tracking-wider");
        }

        if (index < letters.length - 1) {
          letter.nextElementSibling?.classList.remove("scale-110");
          letter.nextElementSibling?.classList.remove("tracking-wider");
        }
      });
    });
  });

  const renderText = () => {
    let txt: Array<string> = text.toUpperCase().split("");
    return txt.map((c: string, index: number) => {
      if (c === " ")
        return (
          <span
            className={`effect__letter relative inline-block transition-all ${directorEffect}`}
            key={index}
          >
            &nbsp;
          </span>
        );
      return (
        <span
          className={`effect__letter relative inline-block transition-all ${directorEffect}`}
          key={index}
        >
          {c}
        </span>
      );
    });
  };

  return (
    <div className={`inline-block uppercase ${className || ""}`}>
      {renderText()} &nbsp;
    </div>
  );
}
