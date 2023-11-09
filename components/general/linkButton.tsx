import React, { FunctionComponent } from "react";
import styles from "../../styles/button.module.css";
import Link from "next/link";
import ChevronRightIcon from "../../icons/ChevronRightIcon";

type Props = {
  children?: React.ReactNode;
  href: string;
  style?: "primary" | "secondary";
  size?: "default" | "small";
};

const LinkButton: FunctionComponent<Props> = ({
  children,
  href,
  style = "primary",
  size = "default",
}) => {
  return (
    <Link
      href={href}
      className={`${styles.button} ${
        style === "secondary" && styles.secondary
      } ${size === "small" && styles.small}`}
    >
      {children}
      <ChevronRightIcon />
    </Link>
  );
};

export default LinkButton;
