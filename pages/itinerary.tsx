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
import Head from "next/head";
import Card from "../components/general/card";
import FlightHeading from "../components/flight/FlightHeading";
import FlightAddExtras from "../components/flight/FlightAddExtras";
import FlightCard from "../components/flight/FlightCard";
import FlightDates from "../components/flight/FlightDates";
import LinkButton from "../components/general/linkButton";
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

const Itinerary: FunctionComponent<PageProps> = ({ history, data }) => {
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
    <motion.div
      key="itinerary"
      variants={variants1}
      animate="in"
      initial="out"
      exit="out"
    >
      <Head>
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <div className={styles.container2}>
        <header className={styles.header}>
          <BackButton />
          <div className={styles.title}>My itinerary</div>
          <UserIcon />
        </header>
        <main className={styles.itinerary}>
          <div className={styles.itineraryimage}>
            <img src="/alicante.png" />
          </div>
          <div className={styles.itinerarycard}>
            <Card>
              <FlightCountdownItinerary />
              <div className={styles.divider} />
              <BookingReference />
            </Card>
          </div>
          <div className={styles.itinerarycardsub}>
            <Card>
              <div className={styles.itinerarysiri}>
                <div className={styles.itinerarysiritext}>
                  Add a shortcut to get flight updates via Siri
                </div>
                <a href="#" className={styles.itineraryaddsiri}>
                  <img src="/siri.png" />
                  <span>Add to Siri</span>
                </a>
              </div>
            </Card>
          </div>
          <div className={styles.itinerarycardsub}>
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
              <FlightDates
                arrivalDateTime={arrivalDateTime}
                departureDateTime={departureDateTime}
              />
              <div className={styles.divider} />
              <FlightAddExtras />
              <div className={styles.ctas}>
                <LinkButton href="" style="secondary">
                  Change flight
                </LinkButton>
              </div>
            </Card>
          </div>
        </main>
        <style jsx global>
          {globalStyles}
        </style>
      </div>
    </motion.div>
  );
};

export default Itinerary;
