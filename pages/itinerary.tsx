import React, { FunctionComponent } from "react";
import BackButton from "../components/general/backButton";
import CheckinCountDown from "../components/itinerary/CheckinCountdown";
import BookingReference from "../components/itinerary/BookingReference";
import BottomNavigation from "../components/general/bottomNavigation";
import globalStyles from "../styles/global";
import styles from "../styles/common.module.css";
import Header from "../components/general/header";
import { motion } from "framer-motion";
import { PageProps } from "../types";
import { variants1 } from "../transitionVariants";

const Itinerary: FunctionComponent<PageProps> = ({ history }) => {
  console.log("history", history, history[history.length - 2]);
  return (
    <motion.div
      key="itinerary"
      variants={variants1}
      animate="in"
      initial="out"
      exit="out"
    >
      <div className={styles.container}>
        <Header />
        <BackButton />
        <main className={styles.main}>
          Itinerary <br />
          <CheckinCountDown />
          <BookingReference />
        </main>
        <BottomNavigation current={"itinerary"} />
        <style jsx global>
          {globalStyles}
        </style>
      </div>
    </motion.div>
  );
};

export default Itinerary;
