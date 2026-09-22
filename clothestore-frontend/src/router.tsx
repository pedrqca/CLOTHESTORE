import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import { Layout } from './components/layout/Layout';
import { Tshirts } from './components/pages/Tshirts';
import { Hoodies } from './components/pages/Hoodies';

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
        ],
    },
]);