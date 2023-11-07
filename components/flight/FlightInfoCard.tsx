import { FC } from "react";
import Grid from "@mui/material/Grid";
import moment from "moment";

type FlightInfoCardProps = {
  flightNumber: string;
  departureAirportCode: string;
  departureAirportName: string;
  departureDateTime: Date;
  arrivalAirportCode: string;
  arrivalAirportName: string;
  arrivalDateTime: Date;
  delayedFlag: boolean;
};

const FlightInfoCard: FC<FlightInfoCardProps> = ({
  flightNumber,
  departureAirportCode,
  departureAirportName,
  departureDateTime,
  arrivalAirportCode,
  arrivalAirportName,
  arrivalDateTime,
  delayedFlag,
}) => {
  return (
    <div>
      <Grid container justifyContent="space-between" alignItems="center">
        <h4>Flight Number:</h4>
        <span>{flightNumber}</span>
      </Grid>
      <Grid container justifyContent="space-between" alignItems="center">
        <h4>Departure Airport Code:</h4>
        <span>{departureAirportCode}</span>
      </Grid>
      <Grid container justifyContent="space-between" alignItems="center">
        <h4>Departure Airport Name:</h4>
        <span>{departureAirportName}</span>
      </Grid>
      <Grid container justifyContent="space-between" alignItems="center">
        <h4>Departure Date Time:</h4>
        <span>{moment(departureDateTime).format("ddd Do MMM HH:mm")}</span>
      </Grid>
      <Grid container justifyContent="space-between" alignItems="center">
        <h4>Arrival Airport Code:</h4>
        <span>{arrivalAirportCode}</span>
      </Grid>
      <Grid container justifyContent="space-between" alignItems="center">
        <h4>Arrival Airport Name:</h4>
        <span>{arrivalAirportName}</span>
      </Grid>
      <Grid container justifyContent="space-between" alignItems="center">
        <h4>Arrival Date Time:</h4>
        <span>{moment(arrivalDateTime).format("ddd Do MMM HH:mm")}</span>
      </Grid>
      <Grid container justifyContent="space-between" alignItems="center">
        <h4>Arrival Airport Name:</h4>
        <span>{arrivalAirportName}</span>
      </Grid>
    </div>
  );
};

export default FlightInfoCard;
