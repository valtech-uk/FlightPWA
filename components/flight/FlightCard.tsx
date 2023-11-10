import React, { FunctionComponent } from "react";
import styles from "../../styles/flight.module.css";
import FlightIcon from "../../icons/FlightIcon";
import moment from "moment";
import InfoIcon from "../../icons/InfoIcon";

type FlightCardProps = {
  flightNumber: string;
  departureAirportCode: string;
  departureDateTime: Date;
  departureAirportName: string;
  arrivalAirportCode: string;
  arrivalAirportName: string;
  arrivalDateTime: Date;
  delayedFlag?: boolean;
};

const FlightCard: FunctionComponent<FlightCardProps> = ({
  flightNumber,
  departureAirportCode,
  departureDateTime,
  arrivalDateTime,
  arrivalAirportName,
  departureAirportName,
  arrivalAirportCode,
  delayedFlag = false,
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
      {delayedFlag && (
        <div className={styles.delayed}>
          <InfoIcon />
          <span>Flight delayed</span>
        </div>
      )}
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
