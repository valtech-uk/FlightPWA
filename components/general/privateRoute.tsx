import { FunctionComponent } from "react";
import { useCurrentUser } from "../../hooks/useCurrentUser";

const PrivateRoute: FunctionComponent = ({ children }) => {
    const {isLoading, isAuthorized, username} = useCurrentUser();
    console.log("isAuthorized:", isAuthorized, username);

    if (isAuthorized) {
        return children;
    } else {
        // Redirect to the login page or show a message to the user
        return <p>You need to be logged in to access this page.</p>;
    }
};

export default PrivateRoute;