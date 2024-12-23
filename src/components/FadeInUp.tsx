import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../utils/animations';

interface FadeInUpProps {
  children: React.ReactNode;
  delay?: number;
}

export function FadeInUp({ children, delay = 0 }: FadeInUpProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="initial"
      animate="animate"
      transition={{ ...fadeInUp.transition, delay }}
    >
      {children}
    </motion.div>
  );
}