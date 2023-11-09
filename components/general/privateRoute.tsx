"use client"

import {FunctionComponent, ReactNode, useEffect, useState} from "react";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import { useRouter } from 'next/router';

interface PrivateRouteProps {
    children: ReactNode | JSX.Element;
}

const PrivateRoute: FunctionComponent<PrivateRouteProps> = ({ children }) => {
    const router = useRouter();
    const {isAuthorized, isLoading} = useCurrentUser();
    const [countdown, setCountdown] = useState(5);

    useEffect(() => {
        let redirectTimeout: NodeJS.Timeout;
        let countdownInterval: NodeJS.Timeout;

        if (!isLoading && !isAuthorized) {
            redirectTimeout = setTimeout(() => {
                router.push('/registerLogin');
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
        }
    }, [isAuthorized, isLoading, countdown, router]);

    if(isLoading)return <p>Loading, please wait</p>
    if(!isLoading && !isAuthorized)return <p>You need to be logged in to access this page. Redirect to login page in {countdown} sec</p>
    if(isAuthorized)return <>{children}</>
};

export default PrivateRoute;