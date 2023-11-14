"use client";
import type { AppProps } from "next/app";
import Transition from "../components/transition";
import AppContextProvider from "../context/appContext";
import "../styles/transitions.module.css";
import HeadComp from "../components/general/head";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import PrivateRoute from "../components/general/privateRoute";

export default function MyApp({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter();
  const ref = useRef<string | null>(null);

  useEffect(() => {
    ref.current = asPath;
  }, [asPath]);

  const isLoginPage = asPath === "/";

  return (
    <Transition>
      <AppContextProvider>
        <HeadComp />
        {isLoginPage ?
           <Component {...pageProps} key={asPath} history={ref.current}/> :
            <PrivateRoute>
              <Component {...pageProps} key={asPath} history={ref.current}/>
            </PrivateRoute>
        }
      </AppContextProvider>
    </Transition>
  );
}
