import React, { FunctionComponent } from "react";
import BackButton from "../components/general/backButton";
import BookingReference from "../components/itinerary/BookingReference";
import globalStyles from "../styles/global";
import styles from "../styles/common.module.css";
import { motion } from "framer-motion";
import { PageProps } from "../types";
import { variants1 } from "../transitionVariants";
import UserIcon from "../icons/UserIcon";
import FlightCountdownItinerary from "../components/flight/FlightCountdownItinerary";

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
      <div className={styles.container2}>
        <header className={styles.header}>
          <BackButton />
          <div className={styles.title}>My itinerary</div>
          <UserIcon />
        </header>
        <main className={styles.main}>
          <FlightCountdownItinerary />
          <div className={styles.divider} />
          <BookingReference />
        </main>
        <style jsx global>
          {globalStyles}
        </style>
      </div>
    </motion.div>
  );
};

export default Itinerary;
