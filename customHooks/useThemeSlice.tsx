import { ThemeProps } from '@/types/interfaces';

interface ThemeStoreProps {
  theme: ThemeProps;
  setTheme: () => void;
}

const darkTheme = {
  primary: '#D9A273',
  secondary: '#94E1F2',
  text: '#fff',
  background: '#000'
};

const lightTheme = {
  ...darkTheme,
  text: '#000',
  background: '#fff'
};

const createThemeSlice = (set: any): ThemeStoreProps => ({
  theme: darkTheme,
  setTheme: () => set((theme: ThemeProps) => ({ theme }))
});

export type { ThemeStoreProps };
export { darkTheme, lightTheme, createThemeSlice };
