import { Button } from "@mui/material";
import React, { FunctionComponent } from "react";
import buttonEjStyles from "../../styles/buttonEjStyles";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../theme";

const CheckinCountDown: FunctionComponent = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>CheckinCountDown</ThemeProvider>
    </div>
  );
};

export default CheckinCountDown;
