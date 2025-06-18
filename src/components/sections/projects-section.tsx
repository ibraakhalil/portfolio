'use client';

import { motion } from 'motion/react';
import { Button } from '../ui/button';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
}

const projects: Project[] = [
  {
    title: 'iHadith.com',
    description:
      'A comprehensive hadith platform developed collaboratively at Maxxcode, offering advanced search, categorization, and user-friendly UI.',
    image: '/images/projects/ihadith.jpg',
    tags: ['Next.js', 'Team Collaboration', 'SEO'],
    github: 'https://github.com/ihadith/ihadith',
    demo: 'https://ihadith.com',
  },
  {
    title: 'Quranmazid.com',
    description:
      'A modern Quran platform with translation, tafsir, and recitation features, built with a focus on accessibility and performance.',
    image: '/images/projects/quranmazid.jpg',
    tags: ['Next.js', 'Team Collaboration', 'Accessibility'],
    github: 'https://github.com/quranmazid/quranmazid',
    demo: 'https://quranmazid.com',
  },
  {
    title: 'DuaRuqyah.com',
    description:
      'A resourceful site for authentic duas and ruqyah, developed with a collaborative team at Maxxcode.',
    image: '/images/projects/duaruqyah.jpg',
    tags: ['Next.js', 'Team Collaboration'],
    github: 'https://github.com/duaruqyah/duaruqyah',
    demo: 'https://duaruqyah.com',
  },
  {
    title: 'Messefy',
    description:
      'Mess and meal management app for students and mess managers, built with React.js and Node.js.',
    image: '/images/projects/messefy.jpg',
    tags: ['React.js', 'Node.js', 'MongoDB'],
    github: 'https://github.com/ibrahimkhalilpro/messefy',
    demo: 'https://messefy.com',
  },
  {
    title: 'IKBlog',
    description: 'A blog site with full CRUD operations, built using Next.js and MongoDB.',
    image: '/images/projects/ikblog.jpg',
    tags: ['Next.js', 'MongoDB', 'CRUD'],
    github: 'https://github.com/ibrahimkhalilpro/ikblog',
    demo: 'https://ikblog.com',
  },
  {
    title: 'Modern E-Commerce Platform',
    description:
      'A full-featured e-commerce platform built with Next.js, featuring real-time inventory management, secure payments, and an intuitive admin dashboard.',
    image: '/images/projects/ecommerce.jpg',
    tags: ['Next.js', 'Prisma', 'Stripe', 'TypeScript'],
    github: 'https://github.com/username/ecommerce',
    demo: 'https://ecommerce-demo.com',
  },
  {
    title: 'AI-Powered Task Manager',
    description:
      'Smart task management application that uses AI to prioritize and categorize tasks, with natural language processing for task creation.',
    image: '/images/projects/ai-task-manager.png',
    tags: ['React', 'Node.js', 'OpenAI', 'MongoDB'],
    github: 'https://github.com/username/taskmanager',
    demo: 'https://taskmanager-demo.com',
  },
  {
    title: 'Real-time Chat Application',
    description:
      'Feature-rich chat application with real-time messaging, file sharing, and video calls, built with WebSocket technology.',
    image: '/images/projects/chat.jpg',
    tags: ['React', 'Socket.io', 'WebRTC', 'Redis'],
    github: 'https://github.com/username/chatapp',
    demo: 'https://chatapp-demo.com',
  },
];

export default function ProjectsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
      },
    },
  };

  return (
    <section id="projects" className="bg-background py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-bold">Projects</h2>
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              className="bg-card hover:bg-accent overflow-hidden rounded-xl transition-colors"
              variants={itemVariants}
            >
              <div className="bg-muted aspect-video" />
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-primary/10 text-primary rounded-full px-2 py-1 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
