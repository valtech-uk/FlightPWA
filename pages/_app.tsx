import type { AppProps } from "next/app";
import Transition from "../components/transitions";
import AppContextProvider from "../context/appContext";
import "../styles/transitions.module.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Transition>
        <AppContextProvider>
            <Component {...pageProps} />
        </AppContextProvider>
    </Transition>
  );
}
