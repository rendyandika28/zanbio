import { create } from "zustand";

export interface MenuStore {
  activeMenu: string;
  setActiveMenu: (value: string) => void;
}

const useMenuStore = create<MenuStore>((set) => ({
  activeMenu: "introduction",
  setActiveMenu: (value: string) => set({ activeMenu: value }),
}));

export default useMenuStore;
