import '@/styles/globals.css';

import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'Next Boilerplate',
  description: 'A minimal boilerplate for Next.js applications.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="antialiased" lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
