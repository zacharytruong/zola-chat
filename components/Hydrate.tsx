'use client';

import { HeaderWrapper, FooterWrapper } from '@/app/styles/homepage';
import useStore from '@/customHooks/store';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import Link from 'next/link';
import { ReactNode, useEffect, useState } from 'react';
import {
  AiOutlineContacts,
  AiOutlineMessage,
  AiOutlinePlus
} from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import { ThemeProvider } from 'styled-components';
import CustomLoading from './CustomLoading';

const Hydrate = ({ children }: { children: ReactNode }) => {
  const [isHydrated, setisHydrated] = useState(false);
  const theme = useStore((state) => state.theme);

  useEffect(() => {
    setisHydrated(true);
  }, []);

  return (
    <>
      {isHydrated ? (
        <ThemeProvider theme={theme}>
          <UserProvider>
            <div className='flex flex-col h-screen'>
              <HeaderWrapper className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Search"
                  className="flex-1 bg-transparent p-4 focus-visible:outline-none placeholder:text-white"
                />
                <div className="p-4">
                  <AiOutlinePlus />
                </div>
              </HeaderWrapper>
              {children}
              <FooterWrapper className="p-4">
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
              </FooterWrapper>
            </div>
          </UserProvider>
        </ThemeProvider>
      ) : (
        <div className="min-h-screen flex justify-center items-center">
          <CustomLoading />
        </div>
      )}
    </>
  );
};

export default Hydrate;
