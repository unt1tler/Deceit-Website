import React from 'react';
import { CommandCard } from './CommandCard';
import type { CommandCategory as CommandCategoryType } from '../types/commands';

interface CommandCategoryProps {
  category: CommandCategoryType;
}

export function CommandCategory({ category }: CommandCategoryProps) {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold text-green-400 mb-6">{category.name}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.commands.map((command) => (
          <CommandCard key={command.name} {...command} />
        ))}
      </div>
    </div>
  );
}