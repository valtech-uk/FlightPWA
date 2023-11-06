import React, { FunctionComponent } from "react";
import styles from "../styles/common.module.css";
import Personalisation from "../components/home/Personalisation";
import MyTrip from "../components/home/Mytrip";
import BottomNavigation from "../components/general/bottomNavigation";
import HeadComp from "../components/general/head";
import globalStyles from "../styles/global";

const Home: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <HeadComp />
      <main className={styles.main}>
        <Personalisation />
        <MyTrip />
      </main>
      <BottomNavigation current={"index"} />
      <style jsx global>
        {globalStyles}
      </style>
    </div>
  );
};

export default Home;
