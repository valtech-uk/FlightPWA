"use client"

import { useState, useEffect } from "react";
import { PassageUser } from '@passageidentity/passage-auth/passage-user';
import { useAppContext } from "../context/appContext";

export function useCurrentUser() {
    const {setContext} = useAppContext();
    const [result, setResult] = useState({
        id: "",
        isLoading: true,
        isAuthorized: false,
        email: "",
        username: '',
    });

    useEffect(() => {
        let cancelRequest = false;
        new PassageUser().userInfo().then(userInfo=> {
            if( cancelRequest ) {
                return;
            }
            if(userInfo === undefined){
                setResult({
                    id: "",
                    isLoading: false,
                    isAuthorized: false,
                    email: "",
                    username: "",
                });
                setContext({
                    user: {
                        id: "",
                        email: "",
                        username: "",
                    },
                    isAuthorized: false,
                    isLoading: false
                })
                return;
            }
            setResult({
                id: userInfo.id,
                isLoading: false,
                isAuthorized: true,
                email: userInfo.email,
                username: userInfo.user_metadata.name,
            });
            setContext({
                user: {
                    id: userInfo.id,
                    email: userInfo.email,
                    username: userInfo.user_metadata.name,
                },
                isAuthorized: true,
                isLoading: false,
            })
        });
        return () => {
            cancelRequest = true;
        };
    }, []);
    return result;
}