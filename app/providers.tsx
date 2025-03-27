'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export function Providers({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        AOS.init({
            duration: 1200,
            easing: 'ease-in-out',
            delay: 100,
            once: false,
        });
    }, []);

    return (
        <>
            {children}
        </>
    );
}