import { AuthorModel } from "@/model/authorModel";

export const getAuthor = async (authorId: string): Promise<AuthorModel> => {
  const response = await fetch(
    `https://openlibrary.org/authors/${authorId}.json`
  );
  const jsonResponse = (await response.json()) as AuthorModel;

  return jsonResponse;
};
