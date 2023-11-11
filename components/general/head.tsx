import React, { FunctionComponent } from "react";
import Head from "next/head";

const HeadComp: FunctionComponent = () => {
  return (
    <Head>
      <link rel="manifest" href="/manifest.json" />
      <title>easyJet FligtPWA POC</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://use.typekit.net/val5czu.css" />
      <link rel="apple-touch-icon" href="/icon-512x512.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/icon-192x192.png" />
      <link rel="apple-touch-startup-image" href="icon-1024x1024.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#ff6600" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="easyJet FligtPWA POC" />
    </Head>
  );
};

export default HeadComp;
