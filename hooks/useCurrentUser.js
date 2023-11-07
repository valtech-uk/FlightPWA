import { useState, useEffect } from "react";
import { PassageUser } from '@passageidentity/passage-auth/passage-user';

export function useCurrentUser() {
    const [result, setResult] = useState({
        isLoading: true,
        isAuthorized: false,
        username: '',
        flightNumber: null,
    });

    useEffect(() => {
        let cancelRequest = false;
        new PassageUser().userInfo().then(userInfo=> {
            if( cancelRequest ) {
                return;
            }
            console.log(userInfo);
            if(userInfo === undefined){
                setResult({
                    isLoading: false,
                    isAuthorized: false,
                    username: "",
                    flightNumber: null,
                });
                return;
            }
            setResult({
                isLoading: false,
                isAuthorized: true,
                username: userInfo.email ? userInfo.email : userInfo.phone,
                flightNumber: userInfo.flight_number,
            });
        });
        return () => {
            cancelRequest = true;
        };
    }, []);
    return result;
}