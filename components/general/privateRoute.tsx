"use client";

import React, { FunctionComponent, ReactNode, useEffect, useState } from "react";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import { useRouter } from "next/router";
import styles from "../../styles/common.module.css";

interface PrivateRouteProps {
  children: ReactNode | JSX.Element;
}

const PrivateRoute: FunctionComponent<PrivateRouteProps> = ({ children }) => {
  const router = useRouter();
  const { isAuthorized, isLoading } = useCurrentUser();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    let redirectTimeout: NodeJS.Timeout;
    let countdownInterval: NodeJS.Timeout;

    if (!isLoading && !isAuthorized) {
      redirectTimeout = setTimeout(() => {
        router.push("/");
      }, countdown * 1000);

      countdownInterval = setInterval(() => {
        if (countdown > 0) {
          setCountdown(countdown - 1);
        }
      }, 1000);
    }

    return () => {
      clearTimeout(redirectTimeout);
      clearInterval(countdownInterval);
    };
  }, [isAuthorized, isLoading, countdown, router]);

  if (isLoading)
    return (
      <div className={styles.loading}>
        <svg className={styles.spinner} viewBox="0 0 50 50">
          <circle
            className={styles.spinnerpath}
            cx="25"
            cy="25"
            r="20"
            fill="none"
            strokeWidth="5"
          ></circle>
        </svg>
      </div>
    );
  if (!isLoading && !isAuthorized)
    return (
      <div className={styles.loading}>
        <div className={styles.loadingtext}>
          You need to be logged in to access this page. <br />
          <br /> Redirect to login page in <br />
          {countdown} sec
        </div>
      </div>
    );
  if (isAuthorized) return <>{children}</>;
};

export default PrivateRoute;
