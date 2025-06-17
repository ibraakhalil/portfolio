import '../../styles/globals.css';

import Header from '@/components/global/header';
import { routing } from '@/i18n/routing';
import RootProvider from '@/provider/root-provider';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

const cabinFont = localFont({
  src: '../../../public/fonts/cabin-regular.ttf',
  variable: '--font-cabin',
});

export const metadata: Metadata = {
  title: 'Ibrahim Khalil',
  description: 'Ibrahim Khalil Portfolio',
};

interface LayoutProps {
  children: React.ReactNode;
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${cabinFont.variable} bg-background font-sans text-foreground antialiased`}>
        <RootProvider>
          <Header />
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
