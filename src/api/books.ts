import { BookModel, SearchBook } from "@/model/bookModel";

const searchBooks = async (searchTerms: string): Promise<Array<BookModel>> => {
  const query = String(searchTerms).replace(/\s/g, "+");
  const response = await fetch(
    `https://openlibrary.org/search.json?q=${query}&limit=10`
  );
  const jsonResponse = (await response.json()) as SearchBook;
  return jsonResponse.docs;
};

export { searchBooks };
