import { ThemeProps } from '@/types/interfaces';

interface ThemeStoreProps {
  theme: ThemeProps;
  setTheme: () => void;
}

const darkTheme: ThemeProps = {
  primary: '#D9A273',
  secondary: '#94E1F2',
  text: '#fff',
  background: '#000',
  accent: '#333333'
};

const lightTheme: ThemeProps = {
  ...darkTheme,
  text: '#000',
  background: '#fff',
  accent: '#f2f2f2'
};

const createThemeSlice = (set: any): ThemeStoreProps => ({
  theme: darkTheme,
  setTheme: () => set((theme: ThemeProps) => ({ theme }))
});

export type { ThemeStoreProps };
export { darkTheme, lightTheme, createThemeSlice };
