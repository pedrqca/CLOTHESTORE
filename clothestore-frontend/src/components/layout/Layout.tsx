import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import { AnnouncementBar } from './AnnouncementBar';
import { Header } from './Header';

export function Layout() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'instant',
        });
    }, [pathname]);

    return (
        <div className="min-h-screen bg-white">
            <AnnouncementBar />
            <Header />

            <main>
                <Outlet />
            </main>
        </div>
    );
}