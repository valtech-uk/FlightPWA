import { Button } from "@mui/material";
import React, { FunctionComponent } from "react";
import buttonEjStyles from "../../styles/buttonEjStyles";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../theme";
import Card from "../general/card";
import ChevronRightIcon from "../../icons/ChevronRightIcon";

const MyTrip: FunctionComponent = () => {
  return (
    <Card>
      <img src="/flight-card.svg" />
      <ThemeProvider theme={theme}>
        <Button
          href={"/itinerary"}
          variant="contained"
          sx={buttonEjStyles}
          endIcon={<ChevronRightIcon />}
        >
          View itinerary
        </Button>
      </ThemeProvider>
    </Card>
  );
};

export default MyTrip;
