import { createStore } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type BookState = {
  searchTerms: string[];
};

export type BookStoreActions = {
  addSearchTerm: (term: string) => void;
};

export type BookStore = BookState & BookStoreActions;

export const initialState: BookState = {
  searchTerms: [],
};

export const createBookStore = (initState: BookState = initialState) => {
  return createStore<BookStore>()(
    persist(
      (set) => ({
        ...initState,
        addSearchTerm: (term: string) =>
          set((state) => ({ searchTerms: [...state.searchTerms, term] })),
      }),
      { name: "book-storage", storage: createJSONStorage(() => sessionStorage) }
    )
  );
};

export default createBookStore;
