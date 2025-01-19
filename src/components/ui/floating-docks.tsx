import { cn } from '@/utils/cn';
import {
  AnimatePresence,
  motion,
  MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';
import React, { createContext, ReactNode, useContext, useRef, useState } from 'react';

// Context type
type FloatingDockContextType = {
  mouseX: MotionValue<number>;
};

// Create context
const FloatingDockContext = createContext<FloatingDockContextType | null>(null);

// Custom hook for using the context
const useFloatingDock = () => {
  const context = useContext(FloatingDockContext);
  if (!context) {
    throw new Error('FloatingDock.* components must be used within FloatingDock');
  }
  return context;
};

// Root component
const FloatingDock = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const mouseX = useMotionValue(Infinity);

  return (
    <FloatingDockContext.Provider value={{ mouseX }}>
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className={cn(
          'mx-auto hidden h-16 items-end gap-4 rounded-2xl bg-gray-50 px-4 pb-3 md:flex dark:bg-neutral-900',
          className,
        )}
      >
        {children}
      </motion.div>
    </FloatingDockContext.Provider>
  );
};

// Item component
const Item = ({ children, title }: { children: ReactNode; title: string }) => {
  const { mouseX } = useFloatingDock();
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
  const heightTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <motion.div
      ref={ref}
      style={{ width, height }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 2, x: '-50%' }}
            className="absolute -top-8 left-1/2 w-fit -translate-x-1/2 whitespace-pre rounded-md border border-gray-200 bg-gray-100 px-2 py-0.5 text-xs text-neutral-700 dark:border-neutral-900 dark:bg-neutral-800 dark:text-white"
          >
            {title}
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        style={{ width: widthIcon, height: heightIcon }}
        className="flex items-center justify-center"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

// Compose the compound component
FloatingDock.Item = Item;

export { FloatingDock };

// Example usage:
/*
import { FloatingDock } from './FloatingDock';
import { Home, Settings, User } from 'lucide-react';

export default function Example() {
  const items = [
    { title: 'Home', icon: <Home />, href: '/' },
    { title: 'Settings', icon: <Settings />, href: '/settings' },
    { title: 'Profile', icon: <User />, href: '/profile' },
  ];

  return (
    <FloatingDock>
      {items.map((item) => (
        <FloatingDock.Item
          key={item.title}
          title={item.title}
          icon={item.icon}
          href={item.href}
        />
      ))}
    </FloatingDock>
  );
}
*/
