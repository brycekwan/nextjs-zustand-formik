import { create } from "zustand";

type BookStore = {
  searchTerms: string[];
  addSearchTerm: (term: string) => void;
};

const useBookStore = create<BookStore>((set) => ({
  searchTerms: [],
  addSearchTerm: (term: string) =>
    set((state) => ({ searchTerms: [...state.searchTerms, term] })),
}));

export default useBookStore;
