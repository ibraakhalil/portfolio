'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { GithubIcon, LinkedinIcon, TwitterIcon } from '@/components/svg-icons/social-icons';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { cn } from '@/utils/cn';

const paths = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/projects', label: 'Projects' },
  { path: '/blog', label: 'Blog' },
  { path: '/contact', label: 'Contact' },
  { path: '/theme', label: 'Theme' },
];

export default function Header({ className }: { className?: string }) {
  const currentPath = usePathname();

  return (
    <header className={cn('fixed left-0 top-0 z-50 w-full backdrop-blur-sm', className)}>
      <div className="container mx-auto flex min-h-[--header-height] items-center justify-between">
        <Link href="/" className="text-2xl font-extrabold transition-colors hover:text-primary">
          IK
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium">
          {paths.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={cn('transition-colors hover:text-primary', {
                'font-semibold': link.path === currentPath,
              })}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <div className="flex items-center gap-4 [&>svg]:size-5">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-primary"
            >
              <GithubIcon />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-primary"
            >
              <LinkedinIcon />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-primary"
            >
              <TwitterIcon />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
