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

const Itinerary: FunctionComponent<PageProps> = ({ history }) => {
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
                <div className={styles.itinerarysiritext}>Add a shortcut to get flight updates via Siri</div>
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
              <FlightCard />
              <FlightDates />
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
