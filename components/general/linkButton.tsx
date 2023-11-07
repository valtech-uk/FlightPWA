import React, { FunctionComponent } from "react";
import styles from "../../styles/button.module.css";
import Link from "next/link";
import ChevronRightIcon from "../../icons/ChevronRightIcon";

type Props = {
  children?: React.ReactNode;
  href: string;
};

const LinkButton: FunctionComponent<Props> = ({ children, href }) => {
  return (
    <Link href={href} className={styles.button}>
      {children}
      <ChevronRightIcon />
    </Link>
  );
};

export default LinkButton;
