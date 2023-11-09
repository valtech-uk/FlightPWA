import React, { FC } from "react";
import styles from "../../styles/flight.module.css";
import FlightIcon from "../../icons/FlightIcon";
import moment from "moment";

type FlightCardProps = {
  flightNumber: string;
  departureAirportCode: string;
  departureDateTime: Date;
  departureAirportName: string;
  arrivalAirportCode: string;
  arrivalAirportName: string;
  arrivalDateTime: Date;
};

const FlightCard: FC<FlightCardProps> = ({
  flightNumber,
  departureAirportCode,
  departureDateTime,
  arrivalDateTime,
  arrivalAirportName,
  departureAirportName,
  arrivalAirportCode,
}) => {
  return (
    <>
      <div className={styles.flightrow1}>
        <div className={styles.flightcode}>{departureAirportCode}</div>
        <div className={styles.flightnum}>
          <FlightIcon />
          <div>{flightNumber}</div>
        </div>
        <div className={styles.flightcode}>{arrivalAirportCode}</div>
      </div>
      <div className={styles.flightrow1}>
        <div className={styles.flightdepart}>
          <div>Depart &nbsp; {moment(departureDateTime).format("HH:mm")}</div>
          <strong>{departureAirportName}</strong>
        </div>
        <div className={styles.flightarrive}>
          <div>Arrive &nbsp; {moment(arrivalDateTime).format("HH:mm")}</div>
          <strong>{arrivalAirportName}</strong>
        </div>
      </div>
    </>
  );
};

export default FlightCard;
