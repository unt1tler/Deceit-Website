import React from 'react';
import { Header } from '../components/Header';
import { CommandExample } from '../components/CommandExample';
import { AnimatedSection } from '../components/AnimatedSection';
import { FadeInUp } from '../components/FadeInUp';

const commandCategories = [
  {
    name: 'Moderation',
    commands: [
      { name: 'ban', description: 'Ban a user from the server.', usage: '$ban @user [reason]' },
      { name: 'mute', description: 'Traditional command mute' },
      { name: 'unmute', description: 'Unmute a user' },
      { name: 'purge', description: 'Purge messages with multiple filtering options' }
    ]
  },
  {
    name: 'Utility',
    commands: [
      { name: 'afk', description: 'Set your AFK status.' },
      { name: 'avatar', description: 'Displays the avatar of a user or the bot.' },
      { name: 'banner', description: 'Display user banner' },
      { name: 'ping', description: 'Check bot latency' }
    ]
  },
  {
    name: 'Search',
    commands: [
      { name: 'google', description: 'Perform a targeted search and return a summary' },
      { name: 'gsearch', description: 'Alternative Google search command' }
    ]
  },
  {
    name: 'Premium',
    commands: [
      { name: 'addpremium', description: 'Add a user to the premium users list with a specific plan' },
      { name: 'premiumlist', description: 'List all premium users.' },
      { name: 'removepremium', description: 'Remove a user from the premium users list.' }
    ]
  }
];

export function CommandsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-green-900">
      <Header />
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="text-center mb-16">
          <FadeInUp>
            <h1 className="text-4xl font-bold text-white mb-4">Bot Commands</h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Explore all available commands to help manage and moderate your Discord server
            </p>
          </FadeInUp>
        </div>

        <div className="space-y-16">
          {commandCategories.map((category, index) => (
            <div key={category.name}>
              <FadeInUp delay={index * 0.1}>
                <h2 className="text-2xl font-bold text-green-400 mb-6">{category.name}</h2>
              </FadeInUp>
              <AnimatedSection className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {category.commands.map((command) => (
                  <CommandExample
                    key={command.name}
                    command={command.name}
                    description={command.description}
                    usage={command.usage}
                  />
                ))}
              </AnimatedSection>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}