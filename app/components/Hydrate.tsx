'use client';

import { ReactNode, useEffect, useState } from 'react';
import { ImSpinner9 } from 'react-icons/im';

const Hydrate = ({ children }: { children: ReactNode }) => {
  const [isHydrated, setisHydrated] = useState(false);

  useEffect(() => {
    setisHydrated(true);
  }, []);

  return (
    <>
      {isHydrated ? (
        children
      ) : (
        <main className="min-h-screen flex justify-center items-center">
          <div className="animate-spin">
            <ImSpinner9 size={50} />
          </div>
        </main>
      )}
    </>
  );
};

export default Hydrate;