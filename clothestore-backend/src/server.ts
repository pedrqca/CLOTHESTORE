import Fastify from 'fastify';
import cors from '@fastify/cors';

import { productsRoutes } from './routes/products.js';

const app = Fastify();

const frontendUrl =
    process.env.FRONTEND_URL || 'http://localhost:5173';

await app.register(cors, {
    origin: frontendUrl,
});

await app.register(productsRoutes);

app.get('/health', async () => {
    return {
        status: 'ok',
    };
});

const start = async () => {
    try {
        const port = Number(process.env.PORT) || 3333;

        await app.listen({
            port,
            host: '0.0.0.0',
        });

        console.log(`🚀 API running on http://localhost:${port}`);
    } catch (error) {
        app.log.error(error);
        process.exit(1);
    }
};

start();