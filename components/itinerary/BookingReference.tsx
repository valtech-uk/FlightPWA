import { Button } from "@mui/material";
import React, { FunctionComponent } from "react";
import buttonEjStyles from "../../styles/buttonEjStyles";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../theme";
import ChevronRightIcon from "../../icons/ChevronRightIcon";

const BookingReference: FunctionComponent = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        BookingReference
        <Button
          href={"/checkin"}
          variant="contained"
          sx={buttonEjStyles}
          endIcon={<ChevronRightIcon />}
        >
          Check in
        </Button>
      </ThemeProvider>
    </div>
  );
};

export default BookingReference;
