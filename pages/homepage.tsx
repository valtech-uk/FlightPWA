import React, { FunctionComponent } from "react";
import styles from "../styles/common.module.css";
import homeStyles from "../styles/home.module.css";
import BottomNavigation from "../components/general/bottomNavigation";
import globalStyles from "../styles/global";
import { motion } from "framer-motion";
import { PageProps } from "../types";
import { useRouter } from "next/router";
import { variants1 } from "../transitionVariants";
import Card from "../components/general/card";
import FlightAddExtras from "../components/flight/FlightAddExtras";
import FlightCard from "../components/flight/FlightCard";
import FlightFootnote from "../components/flight/FlightFootnote";
import LinkButton from "../components/general/linkButton";
import UserIcon from "../icons/UserIcon";
import FlightCountdownHome from "../components/flight/FlightCountdownHome";
import FlightDates from "../components/flight/FlightDates";
import Head from "next/head";

const Home: FunctionComponent<PageProps> = ({ history }) => {
  return (
    <motion.div
      key="/homepage"
      variants={variants1}
      animate="in"
      initial="out"
      exit="out"
    >
      <Head>
        <meta name="theme-color" content="#ff6600" />
      </Head>
      <div className={styles.container}>
        <header className={styles.homeheader}>
          <div className={styles.homeheaderuser}>
            <UserIcon />
          </div>
        </header>
        <main className={styles.main}>
          <div className={homeStyles.personalisation}>
            <h1>Hello Brandon</h1>
            <h2>Where will you go next?</h2>
          </div>

          <Card>
            <FlightCountdownHome />
            <div className={styles.cardimage}>
              <img src="/alicante.png" />
            </div>
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
            <div className={styles.divider} />
            <FlightFootnote />
            <div className={styles.ctas}>
              <LinkButton href="/itinerary">View itinerary</LinkButton>
            </div>
          </Card>
        </main>

        <style jsx global>
          {globalStyles}
        </style>
      </div>
      <BottomNavigation current={"index"} />
    </motion.div>
  );
};

export default Home;
