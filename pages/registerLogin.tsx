import {FunctionComponent, ReactHTML, useEffect, useRef} from "react";
import { PassageElement } from '@passageidentity/passage-elements';
import {BeforeAuthCallback, OnSuccessCallback} from "@passageidentity/passage-auth";

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'passage-auth': ReactHTML['div'] & {
                appId?: string;
                onSuccess?: OnSuccessCallback
                beforeAuth?: BeforeAuthCallback
                lang: string,
                defaultCountryCode?: string,
                theme?: 'light' | 'dark' | 'auto',
            };
        }
    }
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
