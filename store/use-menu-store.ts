import { create } from "zustand";

const useMenuStore = create((set) => ({
  activeMenu: "introduction",
  setActiveMenu: (value: boolean) => set({ activeMenu: value }),
}));

export default useMenuStore;
