import { CommandCategory } from '../types/commands';

export const commandCategories: CommandCategory[] = [
  {
    name: 'Moderation',
    commands: [
      {
        name: 'ban',
        description: 'Ban a user from the server.',
        usage: '$ban @user [reason]'
      },
      {
        name: 'mute',
        description: 'Traditional command mute'
      },
      {
        name: 'unmute',
        description: 'Unmute a user'
      },
      {
        name: 'purge',
        description: 'Purge messages with multiple filtering options'
      }
    ]
  },
  {
    name: 'Utility',
    commands: [
      {
        name: 'afk',
        description: 'Set your AFK status.'
      },
      {
        name: 'avatar',
        description: 'Displays the avatar of a user or the bot.'
      },
      {
        name: 'banner',
        description: 'Display user banner'
      },
      {
        name: 'ping',
        description: 'Check bot latency'
      }
    ]
  },
  {
    name: 'Search',
    commands: [
      {
        name: 'google',
        description: 'Perform a targeted search and return a summary'
      },
      {
        name: 'gsearch',
        description: 'Alternative Google search command'
      }
    ]
  },
  {
    name: 'Premium',
    commands: [
      {
        name: 'addpremium',
        description: 'Add a user to the premium users list with a specific plan'
      },
      {
        name: 'premiumlist',
        description: 'List all premium users.'
      },
      {
        name: 'removepremium',
        description: 'Remove a user from the premium users list.'
      }
    ]
  },
  {
    name: 'Configuration',
    commands: [
      {
        name: 'reaction',
        description: 'Base command for managing reaction triggers.'
      },
      {
        name: 'pings',
        description: 'Configure your ping notification settings.'
      },
      {
        name: 'inbox',
        description: 'Manage inbox settings'
      }
    ]
  },
  {
    name: 'Other',
    commands: [
      {
        name: 'devrules',
        description: 'Send developer rules to a member for agreement'
      },
      {
        name: 'steal',
        description: 'Steal (add) up to 14 emojis to the current server'
      },
      {
        name: 'help',
        description: 'Shows help message'
      }
    ]
  }
];