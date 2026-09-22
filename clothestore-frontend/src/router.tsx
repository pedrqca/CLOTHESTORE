import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import { Layout } from './components/layout/Layout';
import { Pants } from './components/pages/Pants';
import { Tshirts } from './components/pages/Tshirts';
import { Hoodies } from './components/pages/Hoodies';
import { Jackets } from './components/pages/Jackets';
import { Accessories } from './components/pages/Accessories';
export const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <App />,
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