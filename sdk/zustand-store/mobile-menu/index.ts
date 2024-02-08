import { IMobileMenuStore } from "@/sdk/interface";
import { create } from "zustand";

export const MobileMenuStore = create<IMobileMenuStore>((set) => ({
  // states
  mobileMenuIsOpen: false,

  //   setters
  openMenu: () => set({ mobileMenuIsOpen: true }),
  closeMenu: () => set({ mobileMenuIsOpen: false }),
}));
