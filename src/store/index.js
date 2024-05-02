import { create } from "zustand";

export const useUserStore = create((set) => ({
  isAuth: false,
  user: {},
  updateAuth: (auth) => set({ isAuth: auth }),
  updateUser: (user) =>
    set((state) => ({
      user: { ...state.user, firstName: user.firstName },
    })),
}));
