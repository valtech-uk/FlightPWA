import React, { FunctionComponent } from "react";
import styles from "../../styles/button.module.css";
import Link from "next/link";
import ChevronRightIcon from "../../icons/ChevronRightIcon";

type Props = {
  children?: React.ReactNode;
  href: string;
  style?: "primary" | "secondary";
};

const LinkButton: FunctionComponent<Props> = ({
  children,
  href,
  style = "primary",
}) => {
  return (
    <Link
      href={href}
      className={`${styles.button} ${style === "secondary" && styles.secondary}`}
    >
      {children}
      <ChevronRightIcon />
    </Link>
  );
};

export default LinkButton;
