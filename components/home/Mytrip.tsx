import { Button } from "@mui/material";
import React, { FunctionComponent } from "react";
import buttonEjStyles from "../../styles/buttonEjStyles";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../theme";

const HomeMyTrip: FunctionComponent = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Button href={"/itinerary"} variant="contained" sx={buttonEjStyles}>
          View itinerary
        </Button>
      </ThemeProvider>
    </div>
  );
};

export default HomeMyTrip;
