import "@/styles/globals.css";

import type { AppProps } from "next/app";
import { AppCacheProvider } from "@mui/material-nextjs/v15-pagesRouter";
import {
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";
import { ThemeProvider } from "@mui/material";
import theme from "@/theme";
import { BookStoreStoreProvider } from "@/providers/bookStoreProvider";

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 1000 * 60 * 5,
          },
        },
      })
  );

  return (
    <AppCacheProvider>
      <ThemeProvider theme={theme}>
        <BookStoreStoreProvider>
          <QueryClientProvider client={queryClient}>
            <HydrationBoundary state={pageProps.dehydratedState}>
              <Component {...pageProps} />
            </HydrationBoundary>
            <ReactQueryDevtools />
          </QueryClientProvider>
        </BookStoreStoreProvider>
      </ThemeProvider>
    </AppCacheProvider>
  );
}
