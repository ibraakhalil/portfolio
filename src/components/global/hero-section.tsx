'use client';

import { motion } from 'motion/react';
import { useRef } from 'react';
import { BackgroundBeamsWithCollision } from '../ui/background-beams';
import VariableFontCursorProximity from '../ui/font-cursor-proximity';
import { MovingParticles } from '../ui/moving-particles';

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <BackgroundBeamsWithCollision>
      <MovingParticles />
      <section
        id="home"
        className="relative container flex min-h-screen justify-center overflow-hidden py-20"
      >
        <div className="relative flex flex-col items-start justify-center gap-6">
          <h2 className="font-medium uppercase">FullStack web Developer</h2>

          <motion.h1
            ref={containerRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl leading-tight font-bold md:text-7xl"
          >
            <VariableFontCursorProximity
              label={`IBRAHIM KHALIL`}
              fromFontVariationSettings="'wght' 400, 'slnt' 120"
              toFontVariationSettings="'wght' 900, 'slnt' -10"
              falloff="exponential"
              radius={120}
              containerRef={containerRef}
            />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground max-w-[540px] text-lg md:text-xl"
          >
            Crafting exceptional digital experiences with clean code and innovative solutions.
            Specializing in modern web applications and user-centric design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <button className="relative overflow-hidden">
              <span className="relative z-10">Explore My Work</span>
              <motion.div
                className="bg-primary/20 absolute inset-0 z-0"
                initial={{ scale: 0, x: '100%' }}
                animate={{ scale: 1.5, x: '-50%' }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'linear',
                }}
              />
            </button>
            <button>Get in Touch</button>
          </motion.div>
        </div>
      </section>
    </BackgroundBeamsWithCollision>
  );
}
