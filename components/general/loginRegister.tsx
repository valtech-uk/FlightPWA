import React, { FunctionComponent, SyntheticEvent, useState } from "react";
import styles from "../../styles/common.module.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import tabsEjStyles from "../../styles/tabsEjStyles";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../theme";
import { LoginContext } from "../../context/loginContext";
import { Button } from "@mui/material";
import buttonEjStyles from "../../styles/buttonEjStyles";
import ChevronRightIcon from "../../icons/ChevronRightIcon";

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

            <Button
              href={"/homepage"}
              variant="contained"
              sx={buttonEjStyles}
              endIcon={<ChevronRightIcon />}
            >
              Sign in
            </Button>
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
