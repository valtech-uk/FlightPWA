import type { AppProps } from "next/app";
import "../styles/transitions.module.css";
import Transition from "../components/transitions";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Transition>
      <Component {...pageProps} />
    </Transition>
  );
}
