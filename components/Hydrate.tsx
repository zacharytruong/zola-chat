'use client';

import { UserProvider } from '@auth0/nextjs-auth0/client';
import { ReactNode, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import CustomLoading from './CustomLoading';
import useStore from '@/customHooks/store';

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
          <UserProvider>{children}</UserProvider>
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
