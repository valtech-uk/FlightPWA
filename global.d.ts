import { ReactHTML } from 'react';

interface IntrinsicElements {
    // 'passage-auth': ReactHTML['div'];
    'passage-auth': ReactHTML['div'] & {
        appId?: string;
    };
}