import React, { FunctionComponent } from "react";
import BackButton from "../components/general/backButton";
import styles from "../styles/common.module.css";
import globalStyles from "../styles/global";
import Header from "../components/general/header";
import { PageProps } from "../types";
import Head from "next/head";
import { motion } from "framer-motion";

const Checkincomplete: FunctionComponent<PageProps> = ({ history }) => {
  return (
    <motion.div key="checkincomplete">
      <Head>
        <meta name="theme-color" content="transparent" />
      </Head>
      <div className={styles.container2}>
        <Header />
        <BackButton />
        <main className={styles.main}>Checkin Complete</main>
        <style jsx global>
          {globalStyles}
        </style>
      </div>
    </motion.div>
  );
};

export default Checkincomplete;
