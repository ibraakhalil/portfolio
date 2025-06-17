'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { BackgroundBeamsWithCollision } from '../ui/background-beams';
import { Button } from '../ui/button';
import VariableFontCursorProximity from '../ui/font-cursor-proximity';
import { MovingParticles } from '../ui/moving-particles';

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <BackgroundBeamsWithCollision>
      <MovingParticles />
      <section
        id="home"
        className="container relative flex min-h-screen items-center justify-center overflow-hidden py-20"
      >
        <div className="relative flex flex-col items-start justify-center gap-6">
          <h2 className="font-medium uppercase">FullStack web Developer</h2>

          <motion.h1
            ref={containerRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold leading-tight md:text-7xl"
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
            className="max-w-[540px] text-lg text-muted-foreground md:text-xl"
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
            <Button size="lg" className="relative overflow-hidden">
              <span className="relative z-10">Explore My Work</span>
              <motion.div
                className="absolute inset-0 z-0 bg-primary/20"
                initial={{ scale: 0, x: '100%' }}
                animate={{ scale: 1.5, x: '-50%' }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'linear',
                }}
              />
            </Button>
            <Button variant="outline" size="lg">
              Get in Touch
            </Button>
          </motion.div>
        </div>
      </section>
    </BackgroundBeamsWithCollision>
  );
}
