import React from 'react';
import { Terminal } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, hoverScale } from '../utils/animations';

interface CommandExampleProps {
  command: string;
  description: string;
  usage?: string;
}

export function CommandExample({ command, description, usage }: CommandExampleProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="initial"
      animate="animate"
      {...hoverScale}
      className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-green-500/20"
    >
      <div className="flex items-start gap-4">
        <div className="bg-green-500/10 rounded-lg p-3">
          <Terminal className="w-6 h-6 text-green-400" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-green-400 mb-2">${command}</h3>
          <p className="text-gray-300 mb-3">{description}</p>
          {usage && (
            <div className="bg-black/30 rounded p-3 font-mono text-sm text-green-300">
              {usage}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}