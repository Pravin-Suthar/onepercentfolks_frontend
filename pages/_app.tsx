import type { AppProps } from "next/app";

import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useRouter } from "next/router";
import { Provider } from 'react-redux';
import { store } from '../store/store';

import { fontSans, fontMono } from "@/config/fonts";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <Provider store={store} >
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider>
        <Component {...pageProps} />
      </NextThemesProvider>
    </NextUIProvider>
    </Provider>
  );
}

export const fonts = {
  sans: fontSans.style.fontFamily,
  mono: fontMono.style.fontFamily,
};
