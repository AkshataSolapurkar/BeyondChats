'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
    const router = useRouter();
    const [hasVisited, setHasVisited] = useState(false);

    useEffect(() => {
        const visited = sessionStorage.getItem('visited');
        if (!visited) {
            sessionStorage.setItem('visited', 'true');
            router.push('/login');
        } else {
            setHasVisited(true);
        }
    }, [router]);

    if (!hasVisited) {
        return null;
    }

    return (
        <div className="container">
            <h1>Dashboard</h1>
            {/* Add your dashboard content here */}
        </div>
    );
}
