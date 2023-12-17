import create from "zustand";

interface HeaderTextStoreState {
  headerText: string;
  setHeaderText: (newHeaderText: string) => void;
}

const HeaderTextStore = create<HeaderTextStoreState>((set) => ({
  headerText: `Welcome to Hermann's Blog`,
  setHeaderText: (newHeaderText: string) => set({ headerText: newHeaderText }),
}));

export default HeaderTextStore;
