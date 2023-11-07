import React, { FunctionComponent } from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../theme";
import Card from "../general/card";
import styles from "../../styles/common.module.css";
import LinkButton from "../general/linkButton";

const MyTrip: FunctionComponent = () => {
  return (
    <Card>
      <img src="/flight-card.svg" />
      <ThemeProvider theme={theme}>
        <div className={styles.ctas}>
          <LinkButton href="/itinerary">View itinerary</LinkButton>
        </div>
      </ThemeProvider>
    </Card>
  );
};

export default MyTrip;
