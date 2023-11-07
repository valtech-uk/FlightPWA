import React, { FunctionComponent } from "react";
import LinkButton from "../general/linkButton";
import styless from "../../styles/common.module.css";
import styles from "../../styles/flight.module.css";

const BookingReference: FunctionComponent = () => {
  return (
    <>
      <div className={styles.flightrow1}>
        <div className={styles.bookingreference}>Booking reference</div>
        <div className={styles.bookingreferencenumber}>K3DWQ15</div>
      </div>
      <div className={styless.ctas}>
        <LinkButton href="/checkin">Check in</LinkButton>
      </div>
    </>
  );
};

export default BookingReference;
