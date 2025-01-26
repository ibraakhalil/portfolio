import Header from '@/components/global/header';
import { routing } from '@/i18n/routing';
import RootProvider from '@/provider/root-provider';
import type { Metadata } from 'next';
import { Cabin } from 'next/font/google';
import '../../styles/globals.css';

const cabinFont = Cabin({
  variable: '--font-cabin',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
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
      <body className={`${cabinFont.variable} font-[Cabin] antialiased`}>
        <RootProvider>
          <Header />
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
