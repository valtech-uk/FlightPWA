import React, { FunctionComponent } from "react";
import styles from "../../styles/flight.module.css";
import FlightIcon from "../../icons/FlightIcon";

const FlightCard: FunctionComponent = () => {
  return (
    <div className={styles.flightcard}>
      <div className={styles.flightrow1}>
        <div className={styles.flightcode}>LTN</div>
        <div className={styles.flightnum}>
          <FlightIcon />
          <div>EZY2223</div>
        </div>
        <div className={styles.flightcode}>ALC</div>
      </div>
      <div className={styles.flightrow1}>
        <div className={styles.flightdepart}>
          <div>Depart &nbsp; 06:05</div>
          <strong>London Luton</strong>
          <div className={styles.flightdate}>Fri 17th Nov 06:05</div>
        </div>
        <div className={styles.flightarrive}>
          <div>Arrive &nbsp; 12:35</div>
          <strong>Alicante</strong>
          <div className={styles.flightdate}>Sat 18th Nov 12:35</div>
        </div>
      </div>      
    </div>
  );
};

export default FlightCard;
