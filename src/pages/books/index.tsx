import { Container, Typography } from "@mui/material";
import TopMenu from "@/components/TopMenu/TopMenu";
import useBooks from "@/hooks/api/useBooks";
import { useState } from "react";
import { Box, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useFormik } from "formik";
import { useBookStore } from "@/providers/bookStoreProvider";

type SearchForm = {
  searchTerms: string;
};

export default function Books() {
  const [searchTerms, setSearchTerms] = useState("");
  const { data, isLoading } = useBooks({ searchTerms });
  const { addSearchTerm, searchTerms: stateSearchTerms } = useBookStore(
    (state) => state
  );

  const formik = useFormik<SearchForm>({
    initialValues: {
      searchTerms,
    },
    onSubmit: (values) => {
      console.log(values);
      setSearchTerms(values.searchTerms);
      addSearchTerm(values.searchTerms);
    },
  });

  return (
    <Container>
      <TopMenu />
      <Typography variant="h1">Books</Typography>

      <form onSubmit={formik.handleSubmit}>
        <Box display="flex" alignItems="center">
          <Typography variant="h6" display="inline-block" paddingRight="10px">
            Search:
          </Typography>
          <TextField
            variant="outlined"
            sx={{ width: "600px" }}
            name="searchTerms"
            value={formik.values.searchTerms}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              },
            }}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Box>
      </form>

      <Box marginBottom={2}>
        <Typography>Search History:</Typography>
        <Box component="ul">
          {stateSearchTerms.map((term) => (
            <Typography key={term} component="li">
              {term}
            </Typography>
          ))}
        </Box>
      </Box>

      {isLoading ? (
        <Typography variant="body1">Loading...</Typography>
      ) : (
        <Box component={"ol"}>
          {data?.map((book) => (
            <li key={book.key}>
              {book.title} - {book.author_name?.join(", ")}
            </li>
          ))}
        </Box>
      )}
    </Container>
  );
}
