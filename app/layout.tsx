import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import {
  AiOutlineContacts,
  AiOutlineMessage,
  AiOutlinePlus
} from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
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
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Hydrate>
          <header className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Search"
              className="flex-1 bg-transparent p-4 focus-visible:outline-none"
            />
            <div className="p-4">
              <AiOutlinePlus />
            </div>
          </header>
          {children}
          <footer className="p-4">
            <nav>
              <ul className="flex justify-between gap-2">
                <li>
                  <Link href="/">
                    <div className="flex justify-center p-2">
                      <AiOutlineMessage size={30} />
                    </div>
                    <div className="flex justify-center">Messages</div>
                  </Link>
                </li>
                <li>
                  <Link href="/contacts">
                    <div className="flex justify-center p-2">
                      <AiOutlineContacts size={30} />
                    </div>
                    <div className="flex justify-center">Contacts</div>
                  </Link>
                </li>
                <li>
                  <Link href="/me">
                    <div className="flex justify-center p-2">
                      <BsFillPersonFill size={30} />
                    </div>
                    <div className="flex justify-center">Me</div>
                  </Link>
                </li>
              </ul>
            </nav>
          </footer>
        </Hydrate>
      </body>
    </html>
  );
}
