import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Hydrate from '../components/Hydrate';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Zola',
  description: 'Powered by NextJS'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Hydrate>
          <main className="flex-grow overflow-y-auto">{children}</main>
        </Hydrate>
      </body>
    </html>
  );
}
