import React, { FunctionComponent } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../../styles/navigation.module.css";
import FlightIcon from "../../icons/FlightIcon";

type BottomNavigationProps = {
  current: string;
};

const BottomNavigation: FunctionComponent<BottomNavigationProps> = ({
  current,
}) => {
  return (
    <ul className={styles.bottomnavigation}>
      <li className={current === "homepage" ? styles.current : ""}>
        <Link href={"/homepage"}>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12,1.73l3.34,6.76l7.46,1.08l-5.4,5.26l1.27,7.43L12,18.76l-6.68,3.51l1.27-7.43L1.2,9.58l7.46-1.08L12,1.73z" />
          </svg>
          <span>Home</span>
        </Link>
      </li>
      <li className={current === "book" ? styles.current : ""}>
        <Link href={"/Book"}>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12,1.73l3.34,6.76l7.46,1.08l-5.4,5.26l1.27,7.43L12,18.76l-6.68,3.51l1.27-7.43L1.2,9.58l7.46-1.08L12,1.73z" />
          </svg>
          <span>Book</span>
        </Link>
      </li>
      <li className={current === "itinerary" ? styles.current : ""}>
        <Link href={"/itinerary"}>
          <FlightIcon />
          <span>My trips</span>
        </Link>
      </li>
      <li className={current === "/passes" ? styles.current : ""}>
        <Link href={"/"}>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12,1.73l3.34,6.76l7.46,1.08l-5.4,5.26l1.27,7.43L12,18.76l-6.68,3.51l1.27-7.43L1.2,9.58l7.46-1.08L12,1.73z" />
          </svg>
          <span>Passes</span>
        </Link>
      </li>
      <li className={current === "/tracker" ? styles.current : ""}>
        <Link href={"/"}>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12,1.73l3.34,6.76l7.46,1.08l-5.4,5.26l1.27,7.43L12,18.76l-6.68,3.51l1.27-7.43L1.2,9.58l7.46-1.08L12,1.73z" />
          </svg>
          <span>Tracker</span>
        </Link>
      </li>
    </ul>
  );
};

export default BottomNavigation;
