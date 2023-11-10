import moment from "moment";
import { FunctionComponent } from "react";
import styles from "../../styles/flight.module.css";

type FlightDatesProps = {
  date: Date;
};

const FlightDateHeading: FunctionComponent<FlightDatesProps> = ({ date }) => {
  return (
    <div className={styles.flightheading}>
      {moment(date).format("ddd Do MMM YYYY")}
    </div>
  );
};

export default FlightDateHeading;
