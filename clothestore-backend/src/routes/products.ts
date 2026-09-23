import type { FastifyInstance } from 'fastify';

import { prisma } from '../lib/prisma.js';

export async function productsRoutes(app: FastifyInstance) {
    app.get('/products', async () => {
        const products = await prisma.product.findMany({
            orderBy: {
                createdAt: 'asc',
            },
        });

        return products;
    });
}