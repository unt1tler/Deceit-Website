import React from 'react';
import { Bot, Server, MessageCircle, Shield, Zap, BarChart } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../components/Button';
import { TiltCard } from '../components/TiltCard';
import { Header } from '../components/Header';
import { AnimatedSection } from '../components/AnimatedSection';
import { FadeInUp } from '../components/FadeInUp';
import { FloatingIcon } from '../components/FloatingIcon';
import { scaleInSpring, hoverScale, hoverGlow } from '../utils/animations';

const features = [
  { icon: Shield, title: 'AI-Powered Detection', delay: 0 },
  { icon: Zap, title: 'Real-time Monitoring', delay: 0.1 },
  { icon: BarChart, title: 'Detailed Analytics', delay: 0.2 }
];

export function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-green-900">
      <Header />
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 py-24">
          <div className="flex flex-col items-center text-center space-y-8 pt-16">
            <FloatingIcon>
              <motion.div
                initial="initial"
                animate="animate"
                variants={scaleInSpring}
              >
                <Bot className="w-20 h-20 text-green-400" />
              </motion.div>
            </FloatingIcon>
            
            <FadeInUp delay={0.3}>
              <motion.h1 
                className="text-6xl font-bold text-white"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                Deceit<span className="text-green-400">Bot</span>
              </motion.h1>
            </FadeInUp>

            <FadeInUp delay={0.5}>
              <p className="text-xl text-gray-300 max-w-2xl">
                Advanced AI-powered Discord bot for detecting deception and maintaining trust in your community
              </p>
            </FadeInUp>

            <FadeInUp delay={0.7}>
              <div className="flex gap-4">
                <motion.div {...hoverScale} {...hoverGlow}>
                  <Button>
                    <Server className="w-5 h-5 mr-2 inline" />
                    Add to Server
                  </Button>
                </motion.div>
                <motion.div {...hoverScale}>
                  <Button variant="secondary">
                    <MessageCircle className="w-5 h-5 mr-2 inline" />
                    Join Support Server
                  </Button>
                </motion.div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-24">
        <FadeInUp>
          <h2 className="text-4xl font-bold text-center text-white mb-16">Features</h2>
        </FadeInUp>
        <AnimatedSection className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map(({ icon: Icon, title, delay }, i) => (
            <FadeInUp key={i} delay={delay}>
              <motion.div {...hoverScale}>
                <TiltCard className="bg-black/30 backdrop-blur-lg rounded-xl p-8 border border-green-500/20">
                  <FloatingIcon delay={i * 0.2}>
                    <Icon className="w-12 h-12 text-green-400 mb-4" />
                  </FloatingIcon>
                  <h3 className="text-2xl font-bold text-green-400 mb-4">{title}</h3>
                  <p className="text-gray-300">
                    Advanced algorithms to keep your community safe and trustworthy.
                  </p>
                </TiltCard>
              </motion.div>
            </FadeInUp>
          ))}
        </AnimatedSection>
      </div>
    </div>
  );
}