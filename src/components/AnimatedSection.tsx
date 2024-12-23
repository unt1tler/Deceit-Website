import React from 'react';
import { motion } from 'framer-motion';
import { staggerChildren } from '../utils/animations';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
}

export function AnimatedSection({ children, className = '' }: AnimatedSectionProps) {
  return (
    <motion.div
      variants={staggerChildren}
      initial="initial"
      animate="animate"
      className={className}
    >
      {children}
    </motion.div>
  );
}