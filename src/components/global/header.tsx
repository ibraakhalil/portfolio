'use client';

import { cn } from '@/utils/cn';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '../svg-icons/social-icons';

export default function Header({ className }: { className?: string }) {
  return (
    <header className={cn('fixed left-0 top-0 z-50 w-full bg-gray-100', className)}>
      <div className="mx-auto flex min-h-[--header-height] w-[90%] max-w-[--container-width] items-center justify-between">
        <h1 className="text-2xl font-extrabold">IK</h1>
        <ul className="flex items-center gap-6">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Blog</li>
          <li>Resume</li>
        </ul>
        <div className="flex items-center gap-4 [&>svg]:size-5">
          <GithubIcon />
          <LinkedinIcon />
          <TwitterIcon />
        </div>
      </div>
    </header>
  );
}
