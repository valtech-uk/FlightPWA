import React, { FunctionComponent } from "react";
import Head from "next/head";
import styles from "../styles/common.module.css";
import Personalisation from "../components/home/Personalisation";
import MyTrip from "../components/home/Mytrip";

const Home: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <title>easyJet FligtPWA POC</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Personalisation />
        <MyTrip />
      </main>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};

export default Home;
