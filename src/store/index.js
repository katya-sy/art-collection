import { create } from "zustand";

export const useUserStore = create((set) => ({
  isAuth: false,
  user: null,
  updateAuth: (auth) => set({ isAuth: auth }),
  updateUser: (newUser) =>
    set((state) => ({
      user: {
        ...state.user,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        phone: newUser.phone,
        email: newUser.email,
      },
    })),
}));
