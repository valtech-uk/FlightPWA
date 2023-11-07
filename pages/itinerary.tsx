import React, { FunctionComponent } from "react";
import BackButton from "../components/general/backButton";
import CheckinCountDown from "../components/itinerary/CheckinCountdown";
import BookingReference from "../components/itinerary/BookingReference";
import BottomNavigation from "../components/general/bottomNavigation";
import HeadComp from "../components/general/head";
import globalStyles from "../styles/global";
import styles from "../styles/common.module.css";
import Header from "../components/general/header";

type ItineraryProps = {
  someBool: boolean;
};

const Itinerary: FunctionComponent<ItineraryProps> = ({ someBool = true }) => {
  return (
    <div className={styles.container}>
      <HeadComp />
      <Header />
      <BackButton />
      <main className={styles.main}>
        Itinerary <br />
        <CheckinCountDown />
        <BookingReference />
      </main>
      <BottomNavigation current={'itinerary'} />
      <style jsx global>
        {globalStyles}
      </style>
    </div>
  );
};

export default Itinerary;
