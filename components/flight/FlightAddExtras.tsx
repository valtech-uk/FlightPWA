import React, { FunctionComponent } from "react";
import styles from "../../styles/flight.module.css";

const FlightAddExtras: FunctionComponent = () => {
  return (
    <div className={styles.flightaddextras}>
      <div className={styles.flightaddextrasheading}>
        Still time to add extras
      </div>
      <div className={styles.flightaddextrasparagraph}>
        Choose your preferred seat and pack more by adding bags or sports
        equipment
      </div>
    </div>
  );
};

export default FlightAddExtras;
