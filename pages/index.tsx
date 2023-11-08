import React, { FunctionComponent } from "react";
import styles from "../styles/common.module.css";
import LoginRegister from "../components/general/loginRegister";
import globalStyles from "../styles/global";
import Link from "next/link";
import { AppContext } from "../context/appContext";
import { motion } from "framer-motion";
import { PageProps } from "../types";
import { variants1 } from "../transitionVariants";
import Head from "next/head";
import Card from "../components/general/card";

const Login: FunctionComponent<PageProps> = ({ history }) => {
  return (
    <motion.div
      key="index"
      variants={variants1}
      animate="in"
      initial="out"
      exit="out"
    >
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
    </motion.div>
  );
};

export default Login;
