import React, { FunctionComponent } from "react";
import styles from "../../styles/flight.module.css";

const FlightFootnote: FunctionComponent = () => {
  return (
    <div className={styles.flightfootnote}>
      <div className={styles.flightfootnoteheading}>
        Still time to add extras
      </div>
      <div className={styles.flightfootnoteparagraph}>
        Choose your preferred seat and pack more by adding bags or sports
        equipment
      </div>
    </div>
  );
};

export default FlightFootnote;
