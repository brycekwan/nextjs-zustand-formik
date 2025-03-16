import { Html, Head, Main, NextScript } from "next/document";
import type { DocumentHeadTagsProps } from "@mui/material-nextjs/v15-pagesRouter";
import { DocumentContext } from "next/document";
import {
  DocumentHeadTags,
  documentGetInitialProps,
} from "@mui/material-nextjs/v15-pagesRouter";
import { DocumentProps } from "next/document";

export default function Document(props: DocumentProps & DocumentHeadTagsProps) {
  return (
    <Html lang="en">
      <Head>
        <DocumentHeadTags {...props} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

Document.getInitialProps = async (ctx: DocumentContext) => {
  const finalProps = await documentGetInitialProps(ctx);
  return finalProps;
};
