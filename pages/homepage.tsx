// import React, { FunctionComponent } from "react";
// import styles from "../styles/common.module.css";
// import Personalisation from "../components/home/Personalisation";
// import MyTrip from "../components/home/Mytrip";
// import BottomNavigation from "../components/general/bottomNavigation";
// import HeadComp from "../components/general/head";
// import globalStyles from "../styles/global";
// import Header from "../components/general/header";
//
// const Home: FunctionComponent = () => {
//   return (
//     <div className={styles.container}>
//       <HeadComp />
//       <Header />
//       <main className={styles.main}>
//         <Personalisation />
//         <MyTrip />
//       </main>
//       <BottomNavigation current={"index"} />
//       <style jsx global>
//         {globalStyles}
//       </style>
//     </div>
//   );
// };
//
// export default Home;

'use client'
import { useEffect } from 'react';

export default function Home({appID}) {
    useEffect(()=>{
        require('@passageidentity/passage-elements/passage-auth');
    }, []);

    return (
        <>
            <passage-auth app-id={appID}></passage-auth>
        </>
    )
}

export async function getStaticProps(){
    return {
        props: {
            appID: process.env.NEXT_PUBLIC_PASSAGE_APP_ID
        }
    };
}
