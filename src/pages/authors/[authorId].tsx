import { Container, Typography } from "@mui/material";
import TopMenu from "@/components/TopMenu/TopMenu";
import { AuthorModel } from "@/model/authorModel";
import { getAuthor } from "@/api/authors";
import { NextPageContext } from "next";

type AuthorDetailsProps = {
  author: AuthorModel;
};

export async function getServerSideProps(context: NextPageContext) {
  const { authorId } = context.query;
  const author = await getAuthor(authorId as string);

  return {
    props: { author },
  };
}

const AuthorDetails = (props: AuthorDetailsProps) => {
  const { author } = props;
  return (
    <Container>
      <TopMenu />
      <Typography variant="h4" component="h1">
        Author Details
      </Typography>
      <Typography variant="body1" marginBottom={2}>
        This page is rendered on the server side without any client side calls.
      </Typography>

      {author && (
        <div key={author.key}>
          <Typography variant="body1" component="h2">
            Name: {author.personal_name || author.name}
          </Typography>
          <Typography variant="body1">
            Birth day: {author.birth_date}
          </Typography>
        </div>
      )}
    </Container>
  );
};

export default AuthorDetails;
