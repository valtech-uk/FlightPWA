import React, { FunctionComponent } from "react";
import styles from "../styles/common.module.css";
import LoginRegister from "../components/general/loginRegister";
import globalStyles from "../styles/global";
import Link from "next/link";
import { PageProps } from "../types";
import Head from "next/head";

const Login: FunctionComponent<PageProps> = () => {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#ff6600" />
      </Head>
      <div className={styles.container}>
        <header className={styles.headerlogin}>
          <Link href={"/"}>
            <img src="/easyJet-logo-diap.svg" />
          </Link>
        </header>
        <LoginRegister />
        <style jsx global>
          {globalStyles}
        </style>
      </div>
    </>
  );
};

export default Login;
