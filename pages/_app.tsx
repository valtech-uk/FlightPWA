"use client";
import type { AppProps } from "next/app";
import "../styles/transitions.module.css";
import Transition from "../components/transition";
import HeadComp from "../components/general/head";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

export default function MyApp({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter();
  const ref = useRef<string | null>(null);

  useEffect(() => {
    ref.current = asPath;
  }, [asPath]);

  return (
    <Transition>
      <HeadComp />
      <Component {...pageProps} key={asPath} history={ref.current} />
    </Transition>
  );
}
