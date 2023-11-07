import React, { FunctionComponent } from "react";
import { useRouter } from "next/router";
import ChevronLeftIcon from "../../icons/ChevronLeftIcon";
import styles from "../../styles/navigation.module.css";

const BackButton: FunctionComponent = () => {
  const router = useRouter();
  return (
    <a onClick={() => router.back()} className={styles.backbutton}>
      <ChevronLeftIcon /> <span>Back</span>
    </a>
  );
};

export default BackButton;
