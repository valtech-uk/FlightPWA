import React, { FunctionComponent } from "react";
import styles from "../../styles/flight.module.css";

const FlightDates: FunctionComponent = () => {
  return (
    <div className={styles.flightrow1}>
      <div className={styles.flightdepart}>
        <div className={styles.flightdate}>Fri 17th Nov 06:05</div>
      </div>
      <div className={styles.flightarrive}>
        <div className={styles.flightdate}>Sat 18th Nov 12:35</div>
      </div>
    </div>
  );
};

export default FlightDates;
