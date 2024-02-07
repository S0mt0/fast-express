import { IMobileMenuStore } from "@/sdk/interface";
import { create } from "zustand";

export const MobileMenuStore = create<IMobileMenuStore>((set) => ({
  mobileMenuIsOpen: false,
  openMenu: () => set({ mobileMenuIsOpen: true }),
  closeMenu: () => set({ mobileMenuIsOpen: false }),
}));
