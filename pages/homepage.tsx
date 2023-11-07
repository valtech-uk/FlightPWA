import React, { FunctionComponent } from "react";
import styles from "../styles/common.module.css";
import Personalisation from "../components/home/Personalisation";
import MyTrip from "../components/home/Mytrip";
import BottomNavigation from "../components/general/bottomNavigation";
import globalStyles from "../styles/global";
import Header from "../components/general/header";
import { motion } from "framer-motion";
import { PageProps } from "../types";
import { useRouter } from "next/router";
import { variants1 } from "../transitionVariants";

const Home: FunctionComponent<PageProps> = ({ history }) => {
  console.log("history", history, history[history.length - 2]);
  return (
    <motion.div
      key="/homepage"
      variants={variants1}
      animate="in"
      initial="out"
      exit="out"
    >
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>
          <Personalisation />
          <MyTrip />
        </main>
        <BottomNavigation current={"index"} />
        <style jsx global>
          {globalStyles}
        </style>
      </div>
    </motion.div>
  );
};

export default Home;
