'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
    const router = useRouter();
    const [isRedirecting, setIsRedirecting] = useState(true);

    useEffect(() => {
        const hasVisited = sessionStorage.getItem('visited');

        if (!hasVisited) {
            sessionStorage.setItem('visited', 'true');
            router.replace('/login'); // First visit -> redirect to /login
        } else {
            router.replace('/setupOrg'); // Subsequent visits -> redirect to /setupOrg
        }
    }, [router]);

    if (isRedirecting) {
        return null; // Prevents flickering before redirection
    }

    return null;
}
