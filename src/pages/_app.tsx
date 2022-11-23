import {
  type DehydratedState,
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { createContext } from "react";
import { useDarkMode } from "hooks/utils/useDarkMode";
import { MainTheme, mixins, styles } from "@styles/_theme";
import GlobalStyles from "@styles/_GlobalStyles";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Head from "next/head";
import Layout from "@components/Layout";

config.autoAddCss = false;

export interface ContextProps {
  colorTheme: MainTheme | null;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ContextProps>({
  colorTheme: styles.lightTheme,
  toggleTheme: () => {
    return null;
  },
});

const queryClient = new QueryClient();

function MyApp({
  Component,
  pageProps,
}: AppProps<{ dehydratedState: DehydratedState }>) {
  const { colorTheme, toggleTheme } = useDarkMode();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Rss Feed</title>
      </Head>

      <ThemeContext.Provider value={{ colorTheme, toggleTheme }}>
        <ThemeProvider theme={{ ...mixins, ...colorTheme }}>
          <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
              <GlobalStyles />
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </Hydrate>
          </QueryClientProvider>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}

export default MyApp;
