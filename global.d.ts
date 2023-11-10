import { ReactHTML } from 'react';
import {BeforeAuthCallback, OnSuccessCallback} from "@passageidentity/passage-elements";

export interface IntrinsicElements {
    // 'passage-auth': ReactHTML['div'];
    'passage-auth': ReactHTML['div'] & {
        appId?: string;
        onSuccess?: OnSuccessCallback
        beforeAuth?: BeforeAuthCallback
        lang: string,
        defaultCountryCode?: string,
        theme?: 'light' | 'dark' | 'auto',
    };
}