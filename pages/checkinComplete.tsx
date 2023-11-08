import React, { FunctionComponent } from "react";
import BackButton from "../components/general/backButton";
import BottomNavigation from "../components/general/bottomNavigation";
import styles from "../styles/common.module.css";
import globalStyles from "../styles/global";
import Header from "../components/general/header";
import { PageProps } from "../types";

const CheckinComplete: FunctionComponent<PageProps> = ({ history }) => {
  console.log("history", history, history[history.length - 2]);
  return (
    <div className={styles.container}>
      <Header />
      <BackButton />
      <main className={styles.main}>Checkin Complete</main>
      <style jsx global>
        {globalStyles}
      </style>
    </div>
  );
};

export default CheckinComplete;
