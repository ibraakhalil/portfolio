'use client';

import { AnimatedText } from '../ui/animated-text';
import { Button } from '../ui/button';

export default function AboutSection() {
  const techStack = [
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'Express',
    'MongoDB',
    'PostgreSQL',
    'Docker',
    'AWS',
    'Git',
  ];

  return (
    <section id="about" className="bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-4xl font-bold">About Me</h2>
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <AnimatedText
                className="mb-6 text-xl leading-relaxed"
                text="I'm a passionate Full Stack Developer with a love for creating elegant solutions to complex problems. With years of experience in web development, I specialize in building high-performance applications that provide exceptional user experiences."
              />
              <AnimatedText
                className="text-muted-foreground mb-8"
                text="My journey in tech has led me to work with various technologies and frameworks, always staying current with the latest industry trends and best practices."
              />
              <Button size="lg" variant="outline">
                Download Resume
              </Button>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-semibold">Tech Stack</h3>
              <div className="grid grid-cols-2 gap-4">
                {techStack.map((tech) => (
                  <div
                    key={tech}
                    className="bg-card hover:bg-accent rounded-lg p-4 transition-colors"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
