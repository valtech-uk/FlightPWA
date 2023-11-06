import React, { FunctionComponent } from "react";
import BackButton from "../components/general/backButton";
import BottomNavigation from "../components/general/bottomNavigation";
import styles from "../styles/common.module.css";
import globalStyles from "../styles/global";
import HeadComp from "../components/general/head";

type CheckinProps = {
  someBool: boolean;
};

const Checkin: FunctionComponent<CheckinProps> = ({ someBool = true }) => {
  return (
    <div className={styles.container}>
      <HeadComp />
      <BackButton />
      <main className={styles.main}>Checkin</main>
      <BottomNavigation current={"itinerary"} />
      <style jsx global>
        {globalStyles}
      </style>
    </div>
  );
};

export default Checkin;
