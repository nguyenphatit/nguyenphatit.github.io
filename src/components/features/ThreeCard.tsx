"use client";

import { motion, MotionConfig, useMotionValue } from "framer-motion";
import { Suspense, useState } from "react";
import useMeasure from "react-use-measure";
import { Shapes } from "./Shapes";

const transition = {
  type: "spring",
  duration: 0.7,
  bounce: 0.2,
};

export default function ThreeCard({ text, onClick }: { text: string, onClick: () => void }) {
  const [ref, bounds] = useMeasure({ scroll: false });
  const [isHover, setIsHover] = useState<boolean>(false);
  const [isPress, setIsPress] = useState<boolean>(false);
  const mouseX = useMotionValue<number>(0);
  const mouseY = useMotionValue<number>(0);

  const resetMousePosition = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <MotionConfig transition={transition}>
      <motion.div
        className="three-card select-none bg-light-primary dark:bg-dark-primary"
        ref={ref}
        initial={false}
        animate={isHover ? "hover" : "rest"}
        whileTap="press"
        variants={{
          rest: { scale: 1 },
          hover: { scale: 1.5 },
          press: { scale: 1.4 },
        }}
        onHoverStart={() => {
          resetMousePosition();
          setIsHover(true);
        }}
        onHoverEnd={() => {
          resetMousePosition();
          setIsHover(false);
        }}
        onTapStart={() => setIsPress(true)}
        onTap={() => {
          setIsPress(false)
          onClick()
        }}
        onTapCancel={() => setIsPress(false)}
        onPointerMove={(e) => {
          mouseX.set(e.clientX - bounds.x - bounds.width / 2);
          mouseY.set(e.clientY - bounds.y - bounds.height / 2);
        }}
      >
        <motion.div
          className="shapes"
          variants={{
            rest: { opacity: 0 },
            hover: { opacity: 1 },
          }}
        >
          <div className="pink blush" />
          <div className="blue blush" />
          <div className="container">
            <Suspense fallback={null}>
              <Shapes
                isHover={isHover}
                isPress={isPress}
                mouseX={mouseX}
                mouseY={mouseY}
              />
            </Suspense>
          </div>
        </motion.div>
        <motion.div
          variants={{ hover: { scale: 0.85 }, press: { scale: 1.1 } }}
          className="label text-3xl text-light dark:text-dark-secondary"
        >
          {text}
        </motion.div>
      </motion.div>
    </MotionConfig>
  );
}
