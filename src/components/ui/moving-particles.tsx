'use client';

import { motion } from 'motion/react';
import React, { useEffect, useState } from 'react';

export const MovingParticles = React.memo(function MovingParticles() {
  const [particles, setParticles] = useState<
    Array<{ id: number; x: number; y: number; size: number }>
  >([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
      })),
    );
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 h-full w-full">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="bg-primary absolute h-1 w-1 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            x: [0, Math.random() * 50 - 25],
            y: [0, Math.random() * 50 - 25],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
});
