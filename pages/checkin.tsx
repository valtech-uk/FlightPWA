import React, { FunctionComponent } from "react";
import BackButton from "../components/general/backButton";
import styles from "../styles/common.module.css";
import globalStyles from "../styles/global";
import Header from "../components/general/header";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { PageProps } from "../types";
import Head from "next/head";
import LinkButton from "../components/general/linkButton";

const Checkin: FunctionComponent<PageProps> = ({ history }) => {
  return (
    <motion.div key="checkin">
      <Head>
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <div className={styles.container}>
        <Header />
        <BackButton />
        <main className={styles.main}>
          Checkin
          <div className={styles.ctas}>
            <LinkButton href="/checkincomplete">Go to Check in complete</LinkButton>
          </div>
        </main>
        <style jsx global>
          {globalStyles}
        </style>
      </div>
    </motion.div>
  );
};

export default Checkin;
