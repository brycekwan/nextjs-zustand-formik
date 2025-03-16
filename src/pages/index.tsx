import Container from "@mui/material/Container";
import TopMenu from "@/components/TopMenu/TopMenu";
import { Typography } from "@mui/material";

export default function Home() {
  return (
    <Container>
      <TopMenu />
      <Typography variant="h1">Sample App</Typography>
      <Typography variant="body1">
        This is a sample NextJS app that uses Zustand for state management and
        Formik for form handling.
      </Typography>
    </Container>
  );
}
