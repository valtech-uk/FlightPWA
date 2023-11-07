import React, { FunctionComponent } from "react";
import styles from "../../styles/flight.module.css";

const FlightCountdownHome: FunctionComponent = () => {
  return (
    <div className={styles.flightcountdownhome}>
      <div className={styles.flightheadinghome}>
        Get ready for your trip to Alicante in
      </div>
      <div className={styles.flightdays}>5 days</div>
    </div>
  );
};

export default FlightCountdownHome;
