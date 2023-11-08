import React, { FunctionComponent, SyntheticEvent, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../theme";
import LinkButton from "./linkButton";
import tabsEjStyles from "../../styles/tabsEjStyles";
import styles from "../../styles/common.module.css";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: Readonly<TabPanelProps>) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </div>
  );
}

const LoginRegister: FunctionComponent = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={styles.loginregister}>
      <ThemeProvider theme={theme}>
        <Tabs value={value} onChange={handleChange} centered sx={tabsEjStyles}>
          <Tab label="Sign in" sx={[]} />
          <Tab label="Register" />
        </Tabs>
        <CustomTabPanel value={value} index={0}>
          <div className={styles.loginform}>
            <fieldset>
              <label htmlFor="name">Name</label>
              <input id="name" type="text" placeholder="e.g. Brandon Smith" />
            </fieldset>
            <fieldset>
              <label htmlFor="flightnumber">Flight number</label>
              <input id="flightnumber" type="text" placeholder="e.g. EZY2223" />
            </fieldset>
            <div className={styles.ctas}>
              <LinkButton href="/homepage">Sign in</LinkButton>
            </div>
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          Register
        </CustomTabPanel>
      </ThemeProvider>
    </div>
  );
};

export default LoginRegister;
