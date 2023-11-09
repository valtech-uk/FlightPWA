'use client'

import { FunctionComponent, useEffect } from "react";

const RegisterLogin: FunctionComponent = () => {

    useEffect(()=>{
        require('@passageidentity/passage-elements/passage-auth');
    }, []);

    return (
        <>
            <passage-auth app-id={"gk74rC4fq8KS4tdh2LyyuNpi"}></passage-auth>
        </>
    )
}

export default RegisterLogin;