import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import { Layout } from './components/layout/Layout';

import { About } from './pages/About';
import { Accessories } from './pages/shop/Accessories';
import { Hoodies } from './pages/shop/Hoodies';
import { Jackets } from './pages/shop/Jackets';
import { Pants } from './pages/shop/Pants';
import { Shop } from './pages/shop/Shop';
import { Tshirts } from './pages/shop/Tshirts';

export const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <App />,
            },
            {
                path: '/shop',
                element: <Shop />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/shop/t-shirts',
                element: <Tshirts />,
            },
            {
                path: '/shop/hoodies',
                element: <Hoodies />,
            },
            {
                path: '/shop/pants',
                element: <Pants />,
            },
            {
                path: '/shop/jackets',
                element: <Jackets />,
            },
            {
                path: '/shop/accessories',
                element: <Accessories />,
            },
        ],
    },
]);