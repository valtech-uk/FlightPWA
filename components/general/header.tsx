import React, { FunctionComponent } from "react";
import Logo from "./logo";
import styles from "../../styles/common.module.css";
import UserIcon from "../../icons/UserIcon";

const Header: FunctionComponent = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <UserIcon />
    </header>
  );
};

export default Header;
