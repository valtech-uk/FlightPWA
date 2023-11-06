import React, { FunctionComponent } from "react";
import Head from "next/head";

const HeadComp: FunctionComponent = () => {
  return (
    <Head>
      <link rel="manifest" href="/manifest.json" />
      <title>easyJet FligtPWA POC</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default HeadComp;
