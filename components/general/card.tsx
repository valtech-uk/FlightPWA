import React, { FunctionComponent } from "react";
import styles from "../../styles/card.module.css";

type Props = {
  children?: React.ReactNode;
};

const Card: FunctionComponent<Props> = ({ children }) => {
  return <div className={styles.card}>{children}</div>;
};

export default Card;
