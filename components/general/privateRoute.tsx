"use client"

import {FC, FunctionComponent} from "react";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import { useAppContext } from "../../context/appContext";

type PrivateRouteProps = {
    children: JSX.Element | React.ReactNode
}

const PrivateRoute: FC = ({ children }) => {
    // const {isLoading, isAuthorized, username} = useCurrentUser();
    const { context } = useAppContext();

    console.log("isAuthorized:", context?.isAuthorized, context);

    if (context?.isAuthorized) {
        return children;
    } else {
        // Redirect to the login page or show a message to the user
        return <p>You need to be logged in to access this page.</p>;
    }
};

export default PrivateRoute;