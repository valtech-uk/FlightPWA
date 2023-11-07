import React, { FunctionComponent } from "react";
import Link from "next/link";
import styles from "../../styles/navigation.module.css";

type BottomNavigationProps = {
  current: string;
};

const BottomNavigation: FunctionComponent<BottomNavigationProps> = ({
  current,
}) => {
  return (
    <ul className={styles.bottomnavigation}>
      <li className={current === "index" ? styles.current : ""}>
        <Link href={"/homepage"}>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.3,2.3c0.4-0.4,1-0.4,1.4,0l7.4,6.8c0,0,0.1,0.1,0.1,0.1c0.5,0.4,0.8,0.9,0.8,1.6V18c0,1.1-0.9,2-2,2h-5v-4.1c0-0.6-0.4-1-1-1h-2c-0.6,0-1,0.4-1,1V20H5c-1.1,0-2-0.9-2-2v-7.2c0-0.7,0.3-1.2,0.8-1.6c0,0,0.1-0.1,0.1-0.1L11.3,2.3z" />
          </svg>
          <span>Home</span>
        </Link>
      </li>
      <li className={current === "book" ? styles.current : ""}>
        <Link href={"/Book"}>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M22,2c-0.4-0.4-0.9-0.6-1.5-0.6S19.4,1.6,19.1,2l-5,5l-9.1-3C4.6,3.8,4.3,3.9,4,4.1L2.9,5.3C2.7,5.5,2.6,5.8,2.6,6c0,0.3,0.2,0.5,0.4,0.6l7.1,4.3l-4.7,4.7l-2.1-0.3c-0.2,0-0.4,0-0.6,0.2l-1,1c-0.2,0.2-0.3,0.4-0.2,0.7c0.1,0.2,0.2,0.4,0.5,0.5l3,1c0.2,0.1,0.4,0.2,0.4,0.4l1,3c0.1,0.2,0.3,0.4,0.5,0.5c0.2,0.1,0.5,0,0.7-0.2l0.9-1c0.2-0.2,0.2-0.4,0.2-0.6l-0.3-2.1l4.7-4.7l4.4,7.1c0.1,0.2,0.4,0.4,0.6,0.4c0.3,0,0.5-0.1,0.7-0.2l1.2-1.2c0.2-0.2,0.3-0.6,0.2-0.9L17,10l5-5.1C22.8,4,22.8,2.8,22,2z" />
          </svg>
          <span>Book</span>
        </Link>
      </li>
      <li className={current === "itinerary" ? styles.current : ""}>
        <Link href={"/itinerary"}>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.8,21c1.6,0,2.7,0,3.1,0c1.1,0,1.1,0,1.1-1.2c0-1.7,0-10.9,0-12.7c0-1,0-1.2-1.1-1.2c-0.5,0-1.8,0-3.1,0h-3H8.7V3.2C8.7,2,9.4,2,9.8,2c0.4,0,3.5,0,4.9,0c0.6,0,1.1,0,1.1,1.2c0,0.9,0,1.7,0,2.7c0,0,1.5,0,3,0V21c-3.7,0-9.7,0-13.4,0c-1.7,0-3,0-3.3,0C1,21,1,20.8,1,19.8S1,8.2,1,7.1c0-1.2,0-1.2,1.1-1.2c0.5,0,1.9,0,3.3,0h3.3H5.4V21H18.8z" />
          </svg>
          <span>My trips</span>
        </Link>
      </li>
      <li className={current === "/passes" ? styles.current : ""}>
        <Link href={"/"}>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.4,17.9h0.8c0.9,0,1.7-0.8,1.7-1.7V4.9c0-0.9-0.8-1.7-1.7-1.7H5c-0.9,0-1.7,0.8-1.7,1.7v2.8" />
            <path d="M3.3,9.2h13.6c0.7,0,1.3,0.6,1.3,1.3v9.1c0,0.7-0.6,1.3-1.3,1.3H3.3c-0.7,0-1.3-0.6-1.3-1.3v-9.1C2,9.8,2.6,9.2,3.3,9.2z" />
          </svg>
          <span>Passes</span>
        </Link>
      </li>
      <li className={current === "/tracker" ? styles.current : ""}>
        <Link href={"/"}>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.3,14.9c0.8-2.1,0.8-2.7-0.2-4.8C2.7,9.1,3.6,8.7,4,9.1c0.3,0.4,2,2.1,2,2.1c1.2,0,3.8-0.4,3.8-0.4s-2.4-7-2-7.4c0.8-0.7,1.6-0.4,1.9,0c0.3,0.4,3.2,5.2,4.5,7.7c1.4,0,4.4-0.1,5.4,0c1.3,0.1,2,0.8,2,1.4c0,0.6-0.6,1.4-1.8,1.4c-1.7,0.1-5.7,0.3-5.7,0.3s-3,6.1-3.6,6.9c-0.5,0.7-1.5,0.8-2.3,0.4c-0.4-0.2,1.8-7.2,1.8-7.2l-3.8-0.2l-2,1.8C3.9,16.2,2.8,16.3,3.3,14.9z" />
            <circle cx="19.2" cy="5.6" r="3.2" />
            <path d="M18.8,4.4V6h1.6" />
          </svg>
          <span>Tracker</span>
        </Link>
      </li>
    </ul>
  );
};

export default BottomNavigation;
