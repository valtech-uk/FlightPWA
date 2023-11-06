import React, { FunctionComponent } from "react";
import BackButton from "../components/general/backButton";
import CheckinCountDown from "../components/itinerary/checkinCountdown";
import BookingReference from "../components/itinerary/bookingReference";

type ItineraryProps = {
  someBool: boolean;
};

const Itinerary: FunctionComponent<ItineraryProps> = ({ someBool = true }) => {
  return (
    <div>
      <BackButton />
      Itinerary <br />
      <CheckinCountDown />
      <BookingReference />
    </div>
  );
};

export default Itinerary;
