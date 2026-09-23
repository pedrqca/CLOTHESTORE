import Fastify from 'fastify';

const app = Fastify();

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