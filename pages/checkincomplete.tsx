import React, { FunctionComponent } from "react";
import BackButton from "../components/general/backButton";
import styles from "../styles/common.module.css";
import flightStyles from "../styles/flight.module.css";
import globalStyles from "../styles/global";
import { PageProps } from "../types";
import Head from "next/head";
import { Variants, motion } from "framer-motion";
import UserIcon from "../icons/UserIcon";
import Card from "../components/general/card";
import FlightCard from "../components/flight/FlightCard";
import { createClient } from "contentful";
import AddToGoogleWallet from "../components/wallet/AddToGoogleWallet";
import FlightDateHeading from "../components/flight/FlightDateHeading";
import { useAppContext } from "../context/appContext";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    host: process.env.CONTENTFUL_HOST
  });

  const res = await client.getEntries({ content_type: "title" });

  return {
    props: {
      data: res.items,
    },
  };
}

const Checkincomplete: FunctionComponent<PageProps> = ({ data }) => {
  const { context } = useAppContext();

  const {
    flightNumber,
    departureAirportCode,
    departureAirportName,
    departureDateTime,
    arrivalAirportCode,
    arrivalAirportName,
    arrivalDateTime,
    delayedFlag,
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
      <motion.div
        key="checkincomplete"
        variants={vars}
        animate="in"
        initial="initial"
        exit="out"
      >
        <Head>
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <div className={`${styles.container} ${styles.containerwhite}`}>
          <header className={styles.header}>
            <BackButton />
            <div className={styles.headertitle}>Check-in complete</div>
            <div className={styles.headericon}>
              <UserIcon />
            </div>
          </header>
          <main className={styles.itinerary}>
            <div className={styles.checkedinhead}>
              {context?.user?.username} you're checked in!
            </div>
            <div className={styles.checkedinintro}>
              Your boarding passes have been saved to the boarding pass section.
              <br />
              <br />
              For all changes to you flight will require you to check-in again
              and download a new pass.
            </div>
            <div className={styles.checkincard}>
              <Card>
                <div className={flightStyles.gatecloses}>Gate closes</div>
                <FlightDateHeading date={departureDateTime} />
                <FlightCard
                  arrivalDateTime={arrivalDateTime}
                  departureDateTime={departureDateTime}
                  flightNumber={flightNumber}
                  departureAirportCode={arrivalAirportCode}
                  departureAirportName={arrivalAirportName}
                  arrivalAirportCode={departureAirportCode}
                  arrivalAirportName={departureAirportName}
                  delayedFlag={delayedFlag}
                />
                <br />
                <div className={styles.divider} />
                <div className={flightStyles.boardingsum}>
                  <div className={flightStyles.boardingsumhead}>12***6789</div>
                  <div className={flightStyles.boardingsumhead}>Seat</div>
                </div>
                <div className={flightStyles.boardingsum}>
                  <div className={flightStyles.boardingsumbody}>
                    {context?.user?.username}
                  </div>
                  <div className={flightStyles.boardingsumbody}>18F</div>
                </div>
                <div className={flightStyles.boardingsum}>
                  <div className={flightStyles.boardingsumqr}>
                    <img src="/qr.png" />
                  </div>
                  <div className={flightStyles.boardingsumlist}>
                    <div>
                      <span className={flightStyles.boardingsumth}>
                        Hold lugguage:
                      </span>
                      <span>No</span>
                    </div>
                    <div>
                      <span className={flightStyles.boardingsumth}>
                        Fast Track Security:
                      </span>
                      <span>No</span>
                    </div>
                    <div>
                      <span className={flightStyles.boardingsumth}>
                        Speedy Boarding:
                      </span>
                      <span>No</span>
                    </div>
                    <div>
                      <span className={flightStyles.boardingsumth}>
                        Boarding at:
                      </span>
                      <span>Rear door</span>
                    </div>
                  </div>
                </div>
                <div className={styles.divider} />
                <div className={flightStyles.addtowallet}>
                  <AddToGoogleWallet>Add to Google wallet</AddToGoogleWallet>
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

export default Checkincomplete;
