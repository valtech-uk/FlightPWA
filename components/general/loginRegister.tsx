import React, { FunctionComponent, SyntheticEvent, useState } from "react";
import styles from "../../styles/common.module.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import tabsEjStyles from "../../styles/tabsEjStyles";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../theme";
import LinkButton from "./linkButton";
import Card from "./card";
import CustomTabPanel from "./customTabPanel";
import DownloadAppButton from "../downloadApp/DownloadAppButton";

const LoginRegister: FunctionComponent = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={styles.loginregister}>
      <Card>
        <div className={styles.loginregisterwrapper}>
          <ThemeProvider theme={theme}>
            <Tabs
              value={value}
              onChange={handleChange}
              centered
              sx={tabsEjStyles}
            >
              <Tab label="Sign in" />
              <Tab label="Register" />
            </Tabs>
            <CustomTabPanel value={value} index={0}>
              <div className={styles.loginform}>
                <fieldset>
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="e.g. Brandon Smith"
                  />
                </fieldset>
                <fieldset>
                  <label htmlFor="flightnumber">Flight number</label>
                  <input
                    id="flightnumber"
                    type="text"
                    placeholder="e.g. EZY2223"
                  />
                </fieldset>
                <div className={styles.ctas}>
                  <LinkButton href="/homepage">Sign in</LinkButton>
                  <div className={styles.secctas}>
                    <a href="/">Forgotten your details?</a>
                  </div>
                  <DownloadAppButton />
                </div>
              </div>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              Register
            </CustomTabPanel>
          </ThemeProvider>
        </div>
      </Card>
    </div>
  );
};

export default LoginRegister;
