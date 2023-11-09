'use client'

import { FunctionComponent, useEffect } from "react";
import { PageProps } from "../types";

export function getStaticProps(){
    return {
        props: {
            appID: process.env.NEXT_PUBLIC_PASSAGE_APP_ID
        }
    };
}

const RegisterLogin: FunctionComponent<PageProps> = ({appID}) => {

    useEffect(()=>{
        require('@passageidentity/passage-elements/passage-auth');
    }, []);

    return (
        <>
            <passage-auth app-id={appID}></passage-auth>
        </>
    )
}

export default RegisterLogin;