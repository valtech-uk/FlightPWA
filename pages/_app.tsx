"use client";
import type { AppProps } from "next/app";
import "../styles/transitions.module.css";
import Transition from "../components/transitions";
import HeadComp from "../components/general/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [history, setHistory] = useState([router.asPath]);

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      setHistory((history) => [...history, url]);
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <Transition>
      <HeadComp />
      <Component {...pageProps} key={router.asPath} history={history} />
    </Transition>
  );
}
