import React, { FunctionComponent } from "react";
import styles from "../styles/common.module.css";
import LoginRegister from "../components/general/loginRegister";
import HeadComp from "../components/general/head";
import globalStyles from "../styles/global";
import Link from "next/link";
import { LoginContext } from "../context/loginContext";

const Login: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <HeadComp />
      <header className={styles.headerlogin}>
        <Link href={"/"}>
          <img src="/easyJet-logo-diap.svg" />
        </Link>
      </header>
      <LoginRegister />
      <style jsx global>
        {globalStyles}
      </style>
    </div>
  );
};

export default Login;
