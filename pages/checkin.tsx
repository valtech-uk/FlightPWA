import React, { FunctionComponent } from "react";
import BackButton from "../components/general/backButton";
import styles from "../styles/common.module.css";
import globalStyles from "../styles/global";
import Header from "../components/general/header";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { PageProps } from "../types";
import Head from "next/head";
import LinkButton from "../components/general/linkButton";
import UserIcon from "../icons/UserIcon";
import Card from "../components/general/card";
import FlightCountdownItinerary from "../components/flight/FlightCountdownItinerary";
import BookingReference from "../components/itinerary/BookingReference";
import FlightHeading from "../components/flight/FlightHeading";
import FlightCard from "../components/flight/FlightCard";
import FlightDates from "../components/flight/FlightDates";
import FlightAddExtras from "../components/flight/FlightAddExtras";
import { createClient } from "contentful";

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

const Checkin: FunctionComponent<PageProps> = ({ history, data }) => {
  const {
    flightNumber,
    departureAirportCode,
    departureAirportName,
    departureDateTime,
    arrivalAirportCode,
    arrivalAirportName,
    arrivalDateTime,
  } = data[0]?.fields || {};
  return (
    <motion.div key="checkin">
      <Head>
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <div className={`${styles.container} ${styles.containerwhite}`}>
        <header className={styles.header}>
          <BackButton />
          <div className={styles.headertitle}>Check-in</div>
          <div className={styles.headericon}>
            <UserIcon />
          </div>
        </header>
        <main className={styles.itinerary}>
          <div className={styles.checkincard}>
            <Card>
              <FlightHeading />
              <FlightCard
                arrivalDateTime={arrivalDateTime}
                departureDateTime={departureDateTime}
                flightNumber={flightNumber}
                departureAirportCode={departureAirportCode}
                departureAirportName={departureAirportName}
                arrivalAirportCode={arrivalAirportCode}
                arrivalAirportName={arrivalAirportName}
              />
              <div className={styles.checkinpassengers}>
                <div>Passengers checked-in</div>
              </div>
            </Card>
          </div>
          <div className={styles.ctas}>
            <LinkButton href="/checkincomplete">
              Go to Check in complete
            </LinkButton>
          </div>
        </main>
        <style jsx global>
          {globalStyles}
        </style>
      </div>
    </motion.div>
  );
};

export default Checkin;
