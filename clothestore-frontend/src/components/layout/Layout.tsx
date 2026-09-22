import { Outlet } from 'react-router-dom';

import { Footer } from './Footer';
import { Header } from './Header';
import ScrollToTop from '../shared/ScrollToTop';

export function Layout() {
    return (
        <>
            <ScrollToTop />

            <Header />

            <Outlet />

            <Footer />
        </>
    );
}

export default Layout;