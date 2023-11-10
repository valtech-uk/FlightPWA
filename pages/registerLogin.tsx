import {FunctionComponent, useEffect, useRef} from "react";
import {BeforeAuthCallback, OnSuccessCallback} from "@passageidentity/passage-auth";

interface PassageElement extends HTMLElement {
    appId?: string
    onSuccess?: OnSuccessCallback
    beforeAuth?: BeforeAuthCallback
    lang: string,
    defaultCountryCode?: string,
    theme?: 'light' | 'dark' | 'auto',
}

const RegisterLogin: FunctionComponent = () => {
    const passageAuthRef = useRef<PassageElement | null>(null);

    useEffect(() => {
        import('@passageidentity/passage-elements/passage-auth').then(() => {
            const passageAuth = passageAuthRef.current;

            if (passageAuth) {
                passageAuth.appId = "gk74rC4fq8KS4tdh2LyyuNpi";
            }
        });
    }, []);

    return (
        <>
            <passage-auth ref={passageAuthRef}></passage-auth>
        </>
    );
};

export default RegisterLogin;
