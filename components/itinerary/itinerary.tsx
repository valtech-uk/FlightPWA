import React, { FunctionComponent } from "react";
import BackButton from "../../components/general/backButton";
import CheckinCountDown from "./CheckinCountdown";
import BookingReference from "./BookingReference";
import BottomNavigation from "../general/bottomNavigation";
import HeadComp from "../../components/general/head";
import globalStyles from "../../styles/global";
import styles from "../styles/common.module.css";
import Header from "../general/header";

type ItineraryProps = {
  someBool: boolean;
};

const Itinerary: FunctionComponent<ItineraryProps> = ({ someBool = true }) => {
  return (
    <div className={styles.container}>
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
  );
};

export default Itinerary;
