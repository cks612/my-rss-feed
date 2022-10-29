import {
  type DehydratedState,
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { MainTheme, mixins, styles } from "../styles/_theme";
import GlobalStyles from "../styles/_GlobalStyles";
import Layout from "../components/Layout";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { createContext } from "react";
import { useDarkMode } from "../hooks/utils/useDarkMode";
config.autoAddCss = false;

export interface ContextProps {
  colorTheme: MainTheme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ContextProps>({
  colorTheme: styles.lightTheme,
  toggleTheme: () => {
    return null;
  },
});

function MyApp({
  Component,
  pageProps,
}: AppProps<{ dehydratedState: DehydratedState }>) {
  const queryClient = new QueryClient();
  const { colorTheme, toggleTheme } = useDarkMode();

  return (
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
  );
}

export default MyApp;
