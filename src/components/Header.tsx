import React from 'react';
import { Bot } from 'lucide-react';
import { Button } from './Button';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-lg border-b border-green-500/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Bot className="w-6 h-6 text-green-400" />
            <span className="text-xl font-bold text-white">Deceit<span className="text-green-400">Bot</span></span>
          </div>
          <nav className="flex items-center gap-6">
            <a href="/" className="text-gray-300 hover:text-green-400 transition-colors">Home</a>
            <a href="/commands" className="text-gray-300 hover:text-green-400 transition-colors">Commands</a>
            <Button variant="secondary" size="sm">Add to Server</Button>
          </nav>
        </div>
      </div>
    </header>
  );
}