import React, { FunctionComponent } from "react";
import styles from "../../styles/flight.module.css";

const FlightCountdownItinerary: FunctionComponent = () => {
  return (
    <div className={styles.flightheading}>
      Your trip to Alicante in 5 days
    </div>
  );
};

export default FlightCountdownItinerary;
