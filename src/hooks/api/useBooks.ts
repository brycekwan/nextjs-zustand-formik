import { useQuery } from "@tanstack/react-query";
import { searchBooks } from "@/api/books";

const useBooks = ({ searchTerms }: { searchTerms: string }) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["books", searchTerms],
    queryFn: () => searchBooks(searchTerms),
  });
  return { data, isLoading, isError };
};
export default useBooks;
