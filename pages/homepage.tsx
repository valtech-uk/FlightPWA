import React, { FunctionComponent } from "react";
import Personalisation from "../components/home/Personalisation";
import MyTrip from "../components/home/Mytrip";
import BottomNavigation from "../components/general/bottomNavigation";
import HeadComp from "../components/general/head";
import Header from "../components/general/header";
import PrivateRoute from "../components/general/privateRoute";
import globalStyles from "../styles/global";
import styles from "../styles/common.module.css";

const Home: FunctionComponent = () => {
  return (
      <PrivateRoute>
        <div className={styles.container}>
          <HeadComp />
          <Header />
          <main className={styles.main}>
            <Personalisation />
            <MyTrip />
          </main>
          <BottomNavigation current={"index"} />
          <style jsx global>
            {globalStyles}
          </style>
        </div>
      </PrivateRoute>
  );
};

export default Home;
