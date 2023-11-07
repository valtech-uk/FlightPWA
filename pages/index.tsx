import React, { FunctionComponent } from "react";
import styles from "../styles/common.module.css";
import LoginRegister from "../components/general/loginRegister";
import globalStyles from "../styles/global";
import Link from "next/link";
import { AppContext } from "../context/appContext";
import { motion } from "framer-motion";
import { PageProps } from "../types";
import { variants1 } from "../transitionVariants";

const Login: FunctionComponent<PageProps> = ({ history }) => {
  console.log("history", history, history[history.length - 2]);
  return (
    <motion.div
      key="index"
      variants={variants1}
      animate="in"
      initial="out"
      exit="out"
    >
      <div className={styles.container}>
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
    </motion.div>
  );
};

export default Login;
