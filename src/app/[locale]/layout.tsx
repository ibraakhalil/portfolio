import Header from '@/components/global/header';
import { routing } from '@/i18n/routing';
import RootProvider from '@/provider/root-provider';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

import '../../styles/globals.css';

const cabinFont = localFont({
  src: [
    {
      path: '../../../public/fonts/cabin-regular.ttf',
      style: 'normal',
    },
  ],
  variable: '--font-cabin',
});

export const metadata: Metadata = {
  title: 'Ibrahim Khalil',
  description: 'Ibrahim Khalil Portfolio',
};

type LayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={`${cabinFont.variable} antialiased`}>
        <RootProvider>
          <Header />
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
