'use client';

import { UserProvider } from '@auth0/nextjs-auth0/client';
import { ReactNode, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import CustomLoading from './CustomLoading';

const lightTheme = {
  primary: '#D9A273',
  secondary: '#94E1F2',
  text: '#000',
  background: '#fff',
};

const darkTheme = {
  ...lightTheme,
  text: '#fff',
  background: '#000',
};

const Hydrate = ({ children }: { children: ReactNode }) => {
  const [isHydrated, setisHydrated] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(darkTheme);

  useEffect(() => {
    setisHydrated(true);
  }, []);

  return (
    <>
      {isHydrated ? (
        <ThemeProvider theme={currentTheme}>
          <UserProvider>{children}</UserProvider>
        </ThemeProvider>
      ) : (
        <CustomLoading currentTheme={currentTheme} />
      )}
    </>
  );
};

export default Hydrate;
