import React, { FunctionComponent } from "react";
import Link from "next/link";
import styles from "../../styles/navigation.module.css";
import HomeIcon from "../../icons/HomeIcon";

const Logo: FunctionComponent = () => {
  return (
    <Link href={"/"} className={styles.logo}>
      <img src="/easyJet-logo.svg" />
    </Link>
  );
};

export default Logo;
