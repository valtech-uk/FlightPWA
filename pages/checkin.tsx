import React, { FunctionComponent } from "react";
import BackButton from "../components/general/backButton";
import styles from "../styles/common.module.css";
import globalStyles from "../styles/global";
import Header from "../components/general/header";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { PageProps } from "../types";

const Checkin: FunctionComponent<PageProps> = ({ history }) => {
  console.log("history", history, history[history.length - 2]);
  return (
    <motion.div key="checkin">
      <div className={styles.container}>
        <Header />
        <BackButton />
        <main className={styles.main}>Checkin</main>
        <style jsx global>
          {globalStyles}
        </style>
      </div>
    </motion.div>
  );
};

export default Checkin;
