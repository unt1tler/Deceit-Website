import React from 'react';
import { motion } from 'framer-motion';
import { float } from '../utils/animations';

interface FloatingIconProps {
  children: React.ReactNode;
  delay?: number;
}

export function FloatingIcon({ children, delay = 0 }: FloatingIconProps) {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={float.animate}
      transition={{ ...float.animate.transition, delay }}
    >
      {children}
    </motion.div>
  );
}