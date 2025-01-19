'use client';

import { useRef } from 'react';
import { BackgroundBeamsWithCollision } from '../ui/background-beams';
import VariableFontCursorProximity from '../ui/font-cursor-proximity';

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <BackgroundBeamsWithCollision>
      <section className="flex min-h-screen max-w-[--container-width] items-center">
        <div className="max-w-[60%] space-y-4">
          <h1 ref={containerRef} className="text-7xl font-extrabold">
            <VariableFontCursorProximity
              label={`IBRAHIM KHALIL`}
              fromFontVariationSettings="'wght' 400, 'slnt' 120"
              toFontVariationSettings="'wght' 900, 'slnt' -10"
              falloff="exponential"
              radius={120}
              containerRef={containerRef}
            />
          </h1>
          <p className="text-xl">
            Frontend Developer with a love for turning creative concepts into functional websites,
            combining clean code and innovative design practices.
          </p>
          <button className="inline-block rounded-md border border-slate-200 px-4 py-2">
            Resume
          </button>
        </div>
      </section>
    </BackgroundBeamsWithCollision>
  );
}
