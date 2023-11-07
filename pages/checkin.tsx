import React, { FunctionComponent } from "react";
import BackButton from "../components/general/backButton";
import BottomNavigation from "../components/general/bottomNavigation";
import styles from "../styles/common.module.css";
import globalStyles from "../styles/global";
import HeadComp from "../components/general/head";
import Header from "../components/general/header";
import PrivateRoute from "../components/general/privateRoute";

type CheckinProps = {
  someBool: boolean;
};

const Checkin: FunctionComponent<CheckinProps> = ({ someBool = true }) => {
  return (
    <PrivateRoute>
    <div className={styles.container}>
      <HeadComp />
      <Header />
      <BackButton />
      <main className={styles.main}>Checkin</main>
      <BottomNavigation current={"itinerary"} />
      <style jsx global>
        {globalStyles}
      </style>
    </div>
    </PrivateRoute>
  );
};

export default Checkin;
