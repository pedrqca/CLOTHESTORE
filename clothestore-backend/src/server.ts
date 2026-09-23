import Fastify from 'fastify';
import cors from '@fastify/cors';

import { productsRoutes } from './routes/products.js';

const app = Fastify();

await app.register(cors, {
    origin: 'http://localhost:5173',
});

await app.register(productsRoutes);

app.get('/health', async () => {
    return {
        status: 'ok',
    };
});

const start = async () => {
    try {
        await app.listen({
            port: 3333,
        });

        console.log('🚀 API running on http://localhost:3333');
    } catch (error) {
        app.log.error(error);
        process.exit(1);
    }
};

start();