import { useState, useEffect } from "react";
import { PassageUser } from '@passageidentity/passage-auth/passage-user';
import {useAppContext} from "../context/appContext";

export function useCurrentUser() {
    const {setContext} = useAppContext();
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
                setContext({
                    user: null,
                    isAuthorized: false
                })
                return;
            }
            setResult({
                isLoading: false,
                isAuthorized: true,
                username: userInfo.email ? userInfo.email : userInfo.phone,
                flightNumber: userInfo.user_metadata.flight_number,
            });
            setContext({
                user: {
                    id: userInfo.id,
                    email: userInfo.email,
                    name: userInfo.email,
                    flightNumber: userInfo.user_metadata.flight_number
                },
                isAuthorized: true
            })
        });
        return () => {
            cancelRequest = true;
        };
    }, []);
    return result;
}