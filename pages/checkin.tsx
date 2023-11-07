import React, { FunctionComponent, useEffect } from "react";
import BackButton from "../components/general/backButton";
import BottomNavigation from "../components/general/bottomNavigation";
import styles from "../styles/common.module.css";
import globalStyles from "../styles/global";
import HeadComp from "../components/general/head";
import Header from "../components/general/header";
import FlightInfoCard from "../components/flight/FlightInfoCard";
import { createClient } from "contentful";

type CheckinProps = {
  someBool: boolean;
  data: any;
};

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "title" });

  return {
    props: {
      data: res.items,
    },
  };
}

const Checkin: FunctionComponent<CheckinProps> = ({
  someBool = true,
  data,
}) => {
  const {
    flightNumber,
    departureAirportCode,
    departureAirportName,
    departureDateTime,
    arrivalAirportCode,
    arrivalAirportName,
    arrivalDateTime,
    delayedFlag,
  } = data[0].fields;
  return (
    <div className={styles.container}>
      <HeadComp />
      <Header />
      <BackButton />
      <main className={styles.main}>
        <FlightInfoCard
          flightNumber={flightNumber}
          departureAirportCode={departureAirportCode}
          departureAirportName={departureAirportName}
          departureDateTime={departureDateTime}
          arrivalAirportCode={arrivalAirportCode}
          arrivalAirportName={arrivalAirportName}
          arrivalDateTime={arrivalDateTime}
          delayedFlag={delayedFlag}
        />
      </main>
      <BottomNavigation current={"itinerary"} />
      <style jsx global>
        {globalStyles}
      </style>
    </div>
  );
};

export default Checkin;
