import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
}

export default function AnimationFade({ children, delay }: Props) {
  const variants = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        delay: delay || 0.5,
        type: "spring",
        stiffness: 100,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: delay || 0.5,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div variants={variants} initial="hidden" whileInView="visible">
      {children}
    </motion.div>
  );
}
