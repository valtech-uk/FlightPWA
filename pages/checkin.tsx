import React, { FunctionComponent } from "react";
import BackButton from "../components/general/backButton";

type CheckinProps = {
  someBool: boolean;
};

const Checkin: FunctionComponent<CheckinProps> = ({ someBool = true }) => {
  return (
    <div>
      <BackButton />
      Checkin
    </div>
  );
};

export default Checkin;
