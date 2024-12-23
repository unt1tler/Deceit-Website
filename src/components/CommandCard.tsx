import React from 'react';
import { TiltCard } from './TiltCard';
import type { Command } from '../types/commands';

export function CommandCard({ name, description, usage }: Command) {
  return (
    <TiltCard className="bg-black/30 backdrop-blur-lg rounded-xl p-6 border border-green-500/20">
      <h3 className="text-green-400 text-xl font-bold mb-2">${name}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      {usage && (
        <div className="bg-black/40 rounded-lg p-3">
          <code className="text-green-300 text-sm">{usage}</code>
        </div>
      )}
    </TiltCard>
  );
}