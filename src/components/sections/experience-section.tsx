'use client';

import { BriefcaseIcon, UserIcon } from '@heroicons/react/24/outline';
import { motion } from 'motion/react';

const experiences = [
  {
    role: 'Next.js Developer',
    company: 'Maxxcode',
    period: 'Feb 18, 2024 – Present',
    description:
      'Developed and maintained modern web applications using Next.js. Collaborated with a team to deliver high-quality products and features.',
    highlights: [
      'Developed iHadith.com, Quranmazid.com & duaruqyah.com with team collaboration',
      'Implemented scalable, SEO-friendly, and performant solutions',
      'Worked closely with designers and backend developers',
    ],
    icon: <BriefcaseIcon className="text-primary h-7 w-7" />,
  },
  {
    role: 'Personal Projects',
    company: '',
    period: '',
    description:
      'Built and launched several personal projects to solve real-world problems and learn new technologies.',
    highlights: [
      'Messefy: Mess and meal management app (React.js, Node.js, MongoDB)',
      'IKBlog: Blog site with CRUD operations (Next.js, MongoDB)',
      'Other web projects exploring modern stacks',
    ],
    icon: <UserIcon className="text-primary h-7 w-7" />,
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="from-background to-accent/10 bg-gradient-to-b py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-primary mb-16 text-center text-4xl font-extrabold tracking-tight drop-shadow-lg">
          Experience
        </h2>
        <div className="relative mx-auto max-w-3xl">
          <div className="from-primary/30 to-accent/10 absolute top-0 left-1/2 h-full w-1 -translate-x-1/2 rounded-full bg-gradient-to-b" />
          <ul className="space-y-16">
            {experiences.map((exp, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="relative flex items-start gap-6"
              >
                <div className="bg-card ring-primary/20 z-10 flex h-14 w-14 items-center justify-center rounded-full shadow-lg ring-4">
                  {exp.icon}
                </div>
                <div className="bg-card/80 border-accent/10 flex-1 rounded-xl border p-8 shadow-xl backdrop-blur-md transition-transform hover:scale-[1.02]">
                  <div className="mb-1 flex flex-wrap items-center gap-2">
                    <span className="text-primary/90 text-lg font-bold">{exp.role}</span>
                    {exp.company && (
                      <span className="text-accent font-semibold">@ {exp.company}</span>
                    )}
                  </div>
                  <div className="text-muted-foreground mb-2 text-xs font-medium tracking-wide uppercase">
                    {exp.period}
                  </div>
                  <div className="text-foreground/90 mb-4 text-base">{exp.description}</div>
                  <ul className="text-muted-foreground list-disc space-y-1 pl-5 text-sm">
                    {exp.highlights.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
