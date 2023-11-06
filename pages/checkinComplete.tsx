import React, { FunctionComponent } from "react";
import BackButton from "../components/general/backButton";

type CheckinProps = {
  someBool: boolean;
};

const CheckinComplete: FunctionComponent<CheckinProps> = ({
  someBool = true,
}) => {
  return (
    <div>
      <BackButton />
      Checkin Complete
    </div>
  );
};

export default CheckinComplete;
