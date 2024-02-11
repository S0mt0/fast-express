import { devtools } from "zustand/middleware";
import { create } from "zustand";

import { IMobileMenuStore } from "../../interface";

export const MobileMenuStore = create<IMobileMenuStore>()(
  devtools(
    (set) => ({
      // states
      mobileMenuIsOpen: false,

      //   setters
      openMenu: () => set({ mobileMenuIsOpen: true }),
      closeMenu: () => set({ mobileMenuIsOpen: false }),
      toggleMenu: () =>
        set((state) => ({ mobileMenuIsOpen: !state.mobileMenuIsOpen })),
    }),
    { store: "mobileMenuStore", enabled: true }
  )
);
