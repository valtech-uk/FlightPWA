import React, { FunctionComponent } from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../theme";
import Card from "../general/card";
import styles from "../../styles/common.module.css";
import LinkButton from "../general/linkButton";
import FlightCard from "../flight/FlightCard";
import FlightFootnote from "../flight/FlightFootnote";

const MyTrip: FunctionComponent = () => {
  return (
    <Card>
      <FlightCard />
      <div className={styles.divider} />
      <FlightFootnote />
      <ThemeProvider theme={theme}>
        <div className={styles.ctas}>
          <LinkButton href="/itinerary">View itinerary</LinkButton>
        </div>
      </ThemeProvider>
    </Card>
  );
};

export default MyTrip;
