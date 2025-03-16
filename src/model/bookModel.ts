export type BookModel = {
  author_name?: Array<string>;
  title: string;
  author_key?: Array<string>;
  key: string;
};

export type SearchBook = {
  docs: Array<BookModel>;
  numFound: number;
  start: number;
};
