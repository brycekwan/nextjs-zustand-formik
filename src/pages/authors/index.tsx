import { Container, Typography } from "@mui/material";
import TopMenu from "@/components/TopMenu/TopMenu";
import { Formik, Form, Field } from "formik";
import { TextField, Button } from "@mui/material";
import { NumericFormat } from "react-number-format";

export default function Authors() {
  return (
    <Container>
      <TopMenu />
      <Typography variant="h1">Authors</Typography>
      <Typography variant="body1" paddingBottom={2}>
        This is a sample page for authors. It uses Formik and
        react-number-format to comma separate the book count field. On submssion
        the value of the formik form will be the float value of the entered
        value and not the string value. The values can be inspected in the console.
      </Typography>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          bookCount: "",
        }}
        onSubmit={(values) => {
          console.log("Form Data:", values);
        }}
      >
        {({ values, setFieldValue }) => (
          <Form>
            <div style={{ marginBottom: "16px" }}>
              <Field
                name="firstName"
                as={TextField}
                label="First Name"
                fullWidth
              />
            </div>
            <div style={{ marginBottom: "16px" }}>
              <Field
                name="lastName"
                as={TextField}
                label="Last Name"
                fullWidth
              />
            </div>
            <div style={{ marginBottom: "16px" }}>
              <NumericFormat
                name="bookCount"
                value={values.bookCount}
                customInput={TextField}
                label="Book Count"
                onValueChange={(values) => {
                  setFieldValue("bookCount", values.floatValue);
                }}
                thousandSeparator
                fullWidth
              ></NumericFormat>
            </div>
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
}
