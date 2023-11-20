import React, { FunctionComponent, SyntheticEvent, useState } from "react";
import styles from "../styles/common.module.css";
import homeStyles from "../styles/home.module.css";
import BottomNavigation from "../components/general/bottomNavigation";
import globalStyles from "../styles/global";
import { PageProps } from "../types";
import Card from "../components/general/card";
import FlightCard from "../components/flight/FlightCard";
import LinkButton from "../components/general/linkButton";
import UserIcon from "../icons/UserIcon";
import FlightCountdownHome from "../components/flight/FlightCountdownHome";
import FlightDates from "../components/flight/FlightDates";
import { createClient } from "contentful";
import Head from "next/head";
import FlightFootnote from "../components/flight/FlightFootnote";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import tabsEjStyles from "../styles/tabsEjStyles";
import CustomTabPanel from "../components/general/customTabPanel";
import SearchIcon from "../icons/SearchIcon";
import { useAppContext } from "../context/appContext";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    host: process.env.CONTENTFUL_HOST
  });

  const res = await client.getEntries({ content_type: "title" });

  return {
    props: {
      data: res.items,
    },
  };
}

const Home: FunctionComponent<PageProps> = ({ history, data }) => {
  const { context } = useAppContext();
  const {
    flightNumber,
    departureAirportCode,
    departureAirportName,
    departureDateTime,
    arrivalAirportCode,
    arrivalAirportName,
    arrivalDateTime,
    delayedFlag,
  } = data[0]?.fields || {};

  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
      <>
      <Head>
        <meta name="theme-color" content="#ff6600" />
      </Head>
      <div className={`${styles.container} ${styles.containerwithnav}`}>
        <header className={styles.homeheader}>
          <div className={styles.homeheaderuser}>
            <UserIcon />
          </div>
        </header>
        <div className={styles.greyback} />
        <main className={styles.main}>
          <div className={homeStyles.personalisation}>
            <h1>Hello {context?.user?.username}</h1>
            <h2>Where will you go next on this demo?</h2>
          </div>

          <div className={homeStyles.homemaincard}>
            <Card>
              <FlightCountdownHome />
              <div className={styles.cardimage}>
                <img src="/alicante.png" />
              </div>
              <FlightCard
                arrivalDateTime={arrivalDateTime}
                departureDateTime={departureDateTime}
                flightNumber={flightNumber}
                departureAirportCode={departureAirportCode}
                departureAirportName={departureAirportName}
                arrivalAirportCode={arrivalAirportCode}
                arrivalAirportName={arrivalAirportName}
                delayedFlag={delayedFlag}
              />
              <FlightDates
                arrivalDateTime={arrivalDateTime}
                departureDateTime={departureDateTime}
              />
              <div className={styles.divider} />
              <FlightFootnote />
              <div className={styles.ctas}>
                <LinkButton href="/itinerary">View itinerary</LinkButton>
              </div>
            </Card>
          </div>

          <div className={homeStyles.hometabs}>
            <ThemeProvider theme={theme}>
              <Tabs
                value={value}
                onChange={handleChange}
                centered
                sx={tabsEjStyles}
              >
                <Tab label="Flights" />
                <Tab label="Holidays" />
              </Tabs>
            </ThemeProvider>
          </div>

          <div className={homeStyles.homecardsub}>
            <Card>
              <CustomTabPanel value={value} index={0}>
                <div className={homeStyles.bookflights}>
                  <div className={homeStyles.bookflightshead}>
                    <div className={homeStyles.bookflightsicon}>
                      <SearchIcon />
                    </div>
                    <span>Book flights</span>
                  </div>
                  <div className={homeStyles.bookflightsimage} />
                  <div className={styles.ctas}>
                    <LinkButton href="" style="secondary">
                      Book flights
                    </LinkButton>
                  </div>
                </div>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                <div className={homeStyles.bookflights}>
                  <div className={homeStyles.bookflightshead}>
                    <div className={homeStyles.bookflightsicon}>
                      <SearchIcon />
                    </div>
                    <span>Holidays</span>
                  </div>
                  <div className={homeStyles.bookflightsimage} />
                  <div className={styles.ctas}>
                    <LinkButton href="" style="secondary">
                      Find holidays
                    </LinkButton>
                  </div>
                </div>
              </CustomTabPanel>
            </Card>
          </div>
        </main>

        <style jsx global>
          {globalStyles}
        </style>
      </div>
      <BottomNavigation current={"index"} />
      </>
  );
};

export default Home;
