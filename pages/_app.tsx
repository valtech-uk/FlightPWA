"use client";
import type { AppProps } from "next/app";
import "../styles/transitions.module.css";
import Transition from "../components/transitions";
import HeadComp from "../components/general/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
declare const window: any;

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [history, setHistory] = useState([router.asPath]);

  const [deferredPrompt, setDeferredPrompt] = useState<any>();

  useEffect(() => {
    const deferredPrompt = window.app?.getInstallPrompt();
    setDeferredPrompt(deferredPrompt);
  }, []);

  const handleInstallPrompt = async () => {
    if (deferredPrompt) {
      await deferredPrompt.prompt();
    }
  };

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
      <button onClick={handleInstallPrompt} id="install-app">
        Download
      </button>
    </Transition>
  );
}
