'use client';

import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';
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
    <section id="about" className="from-background to-accent/10 bg-gradient-to-b py-24">
      <div className="container mx-auto px-4">
        <div className="bg-card/80 border-accent/10 mx-auto max-w-4xl rounded-3xl border p-10 shadow-2xl backdrop-blur-md md:p-16">
          <h2 className="text-primary mb-10 text-center text-4xl font-extrabold tracking-tight drop-shadow-lg">
            About Me
          </h2>
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div>
              <AnimatedText
                className="text-foreground/90 mb-6 text-xl leading-relaxed"
                text="I'm a passionate Full Stack Developer with a love for creating elegant solutions to complex problems. With years of experience in web development, I specialize in building high-performance applications that provide exceptional user experiences."
              />
              <AnimatedText
                className="text-muted-foreground mb-10"
                text="My journey in tech has led me to work with various technologies and frameworks, always staying current with the latest industry trends and best practices."
              />
              <Button size="lg" variant="default" className="gap-2 font-semibold shadow-md" asChild>
                <a href="/resume.pdf" download>
                  <ArrowDownTrayIcon className="h-5 w-5" />
                  Download Resume
                </a>
              </Button>
            </div>
            <div>
              <h3 className="text-primary mb-6 text-xl font-semibold">Tech Stack</h3>
              <div className="grid grid-cols-2 gap-4">
                {techStack.map((tech) => (
                  <div
                    key={tech}
                    className="from-primary/10 to-accent/10 text-foreground/90 flex items-center gap-2 rounded-xl bg-gradient-to-r p-4 font-medium shadow transition-transform hover:scale-105"
                  >
                    <span className="bg-primary/60 inline-block h-2 w-2 rounded-full" />
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
