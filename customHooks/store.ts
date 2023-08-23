import { create } from 'zustand';
import { createThemeSlice, ThemeStoreProps } from './useThemeSlice';

type StoreState = ThemeStoreProps;

const useStore = create<StoreState>((set) => ({
  ...createThemeSlice(set)
}));

export default useStore;
