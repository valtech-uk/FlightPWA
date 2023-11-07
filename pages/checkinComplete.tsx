import React, { FunctionComponent } from "react";
import BackButton from "../components/general/backButton";
import BottomNavigation from "../components/general/bottomNavigation";
import styles from "../styles/common.module.css";
import globalStyles from "../styles/global";
import HeadComp from "../components/general/head";
import Header from "../components/general/header";

type CheckinProps = {
  someBool: boolean;
};

const CheckinComplete: FunctionComponent<CheckinProps> = ({
  someBool = true,
}) => {
  return (
    <div className={styles.container}>
      <HeadComp />
      <Header />
      <BackButton />
      <main className={styles.main}>Checkin Complete</main>
      <BottomNavigation current={"itinerary"} />
      <style jsx global>
        {globalStyles}
      </style>
    </div>
  );
};

export default CheckinComplete;
