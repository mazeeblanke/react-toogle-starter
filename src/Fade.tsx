import React, { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  children: ReactNode;
  isActive: boolean;
};

const Fade = ({ children, isActive }: Props) => {
  return (
    <AnimatePresence>
      {isActive && (
        <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Fade;
