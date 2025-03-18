import { createTheme } from "@mui/material";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { forwardRef } from "react";
import { LinkProps as MuiLinkProps } from "@mui/material/Link";

type CombinedProps = Omit<MuiLinkProps, "href"> & NextLinkProps;

const LinkBehavior = forwardRef<HTMLAnchorElement, CombinedProps>(
  function LinkBehavior(props, ref) {
    const { href, as, ...other } = props;
    return <NextLink ref={ref} href={href} as={as} {...other} />;
  }
);

const theme = createTheme({
  palette: {
    mode: "dark",
  },
  components: {
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
      },
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior,
      },
    },
  },
});

export default theme;
