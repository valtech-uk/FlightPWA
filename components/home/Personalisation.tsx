import React, { FunctionComponent } from "react";
import {useAppContext} from "../../context/appContext";
import styles from "../../styles/home.module.css";

const Personalisation: FunctionComponent = () => {
    const {context} = useAppContext();

    return (
    <div className={styles.personalisation}>
      <h1>Hello {context?.user?.username}</h1>
      <h2>Where will you go next?</h2>
    </div>
  );
};

export default Personalisation;
