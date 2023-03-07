import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const directions = [1, -1] as const

type Props = { 
  children: React.ReactNode;
  isActive: Boolean;
  direction?: typeof directions[number]
};

const Slide = ({ children, isActive, direction = 1 }: Props) => {
  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          exit={{ x: direction * 200, opacity: 0 }}
          initial={{ x: direction * -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Slide;
