import { create } from "zustand";

export const useUserStore = create((set) => ({
  isAuth: false,
  user: null,
  isChecked: false,
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
  updateChecked: (checked) => set({ isChecked: checked }),
}));

export const useCategoryStore = create((set) => ({
  categories: [],
  updateCategories: (newCategory) =>
    set((state) => ({
      categories: {
        ...state.categories,
        newCategory,
      },
    })),
}));

export const useSearchStore = create((set) => ({
  search: "",
  page: 1,
  limit: 8,
  updateSearch: (search) => set({ search: search }),
  updatePage: (page) => set({ page: page }),
}));
