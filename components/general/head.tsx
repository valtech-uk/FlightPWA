import React, { FunctionComponent } from "react";
import Head from "next/head";

const HeadComp: FunctionComponent = () => {
  return (
    <Head>
      <link rel="manifest" href="/manifest.json" />
      <title>easyJet FligtPWA POC</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://use.typekit.net/val5czu.css" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#ff6600" />
      <link rel="apple-touch-icon" href="/icon-512x512.png" />
      <meta
        name="apple-itunes-app"
        content="app-id=id483568103, app-argument=https://apps.apple.com/ua/app/easyjet-travel-app/id483568103?l=uk"
      />
    </Head>
  );
};

export default HeadComp;
