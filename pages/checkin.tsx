import React, { FunctionComponent } from "react";
import BackButton from "../components/general/backButton";
import styles from "../styles/common.module.css";
import flightStyles from "../styles/flight.module.css";
import globalStyles from "../styles/global";
import PrivateRoute from "../components/general/privateRoute";
import { Variants, motion } from "framer-motion";
import { PageProps } from "../types";
import Head from "next/head";
import LinkButton from "../components/general/linkButton";
import UserIcon from "../icons/UserIcon";
import Card from "../components/general/card";
import FlightHeading from "../components/flight/FlightHeading";
import FlightCard from "../components/flight/FlightCard";
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

const Checkin: FunctionComponent<PageProps> = ({ data }) => {
  const {
    flightNumber,
    departureAirportCode,
    departureAirportName,
    departureDateTime,
    arrivalAirportCode,
    arrivalAirportName,
    arrivalDateTime,
  } = data[0]?.fields || {};

  const vars: Variants = {
    initial: {
      opacity: 0,
      x: 390,
      transition: {
        duration: 0.2,
        delay: 0.2,
      },
    },
    out: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.2,
        delay: 0.2,
      },
    },
    in: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.2,
        delay: 0.2,
      },
    },
  };

  return (
  <PrivateRoute>
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
              <div className={styles.checkinlisthead}>
                Passengers checked-in
              </div>
              <div className={styles.checkinlist}>
                <div className={styles.checkinlistname}>Brandon Smith</div>
                <div className={styles.checkinlistcta}>
                  <LinkButton href="/checkincomplete" size="small">
                    View boarding pass
                  </LinkButton>
                </div>
              </div>
              <div className={styles.checkinlist}>
                <div className={styles.checkinlistname}>Sarah Smith</div>
                <div className={styles.checkinlistcta}>
                  <LinkButton href="/checkincomplete" size="small">
                    View boarding pass
                  </LinkButton>
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div className={styles.checkincard}>
          <Card>
            <div className={flightStyles.flightheading}>Tue 21st Nov 2023</div>            
            <FlightCard
              arrivalDateTime={arrivalDateTime}
              departureDateTime={departureDateTime}
              flightNumber={"EZY2230"}
              departureAirportCode={arrivalAirportCode}
              departureAirportName={arrivalAirportName}
              arrivalAirportCode={departureAirportCode}
              arrivalAirportName={departureAirportName}
            />
            <div className={styles.checkinpassengers}>
              <div className={styles.checkinlisthead}>
                Passengers checked-in
              </div>
              <div className={styles.checkinlist}>
                <div className={styles.checkinlistname}>Brandon Smith</div>
                <div className={styles.checkinlistcta}>
                  <LinkButton href="/checkincomplete" size="small">
                    View boarding pass
                  </LinkButton>
                </div>
              </div>
              <div className={styles.checkinlist}>
                <div className={styles.checkinlistname}>Sarah Smith</div>
                <div className={styles.checkinlistcta}>
                  <LinkButton href="/checkincomplete" size="small">
                    View boarding pass
                  </LinkButton>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </main>
      <style jsx global>
        {globalStyles}
      </style>
    </div>
  </PrivateRoute>
  );
};

export default Checkin;
