import { Button } from "@mui/material";
import React, { FunctionComponent } from "react";
import buttonEjStyles from "../../styles/buttonEjStyles";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../theme";
import ChevronRightIcon from "../../icons/ChevronRightIcon";
import LinkButton from "../general/linkButton";
import styles from "../../styles/common.module.css";

const BookingReference: FunctionComponent = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        BookingReference
        <div className={styles.ctas}>
          <LinkButton href="/checkin">Check in</LinkButton>
        </div>
      </ThemeProvider>
    </div>
  );
};

export default BookingReference;
