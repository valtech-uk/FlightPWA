import moment from "moment";
import { FC } from "react";
import styles from "../../styles/flight.module.css";

type FlightDatesProps = {
  departureDateTime: Date;
  arrivalDateTime: Date;
};

const FlightDates: FC<FlightDatesProps> = ({
  departureDateTime,
  arrivalDateTime,
}) => {
  return (
    <div className={styles.flightrow1}>
      <div className={styles.flightdepart}>
        <div className={styles.flightdate}>
          {moment(departureDateTime).format("ddd Do MMM HH:mm")}
        </div>
      </div>
      <div className={styles.flightarrive}>
        <div className={styles.flightdate}>
          {moment(arrivalDateTime).format("ddd Do MMM HH:mm")}
        </div>
      </div>
    </div>
  );
};

export default FlightDates;
