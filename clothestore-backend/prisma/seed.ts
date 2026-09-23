import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../src/generated/prisma/client';

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
    adapter,
});

async function main() {
    await prisma.product.deleteMany();

    const products = [
        {
            name: 'Heavyweight Boxy Fit Tee - Black',
            price: 18990,
            image: 'black-heavyweight-boxy-fit-tee.png',
            isNew: false,
            categorySlug: 't-shirts',
        },
        {
            name: 'Heavyweight Boxy Fit Tee - Purple Logo',
            price: 18990,
            image: 'white-oversized-purple-logo-tshirt.jpg',
            isNew: false,
            categorySlug: 't-shirts',
        },
        {
            name: 'Heavyweight Boxy Fit Tee - Front Writing',
            price: 18990,
            image: 'front-writted-borded.jpg',
            isNew: true,
            categorySlug: 't-shirts',
        },
        {
            name: 'Butterfly Graceful Tee - Gray',
            price: 18990,
            image: 'CLOTHESHOP-BUTTERFLY-GRACEFUL.jpg',
            isNew: false,
            categorySlug: 't-shirts',
        },
        {
            name: 'Wish You Were Here Hoodie',
            price: 34990,
            image: 'CS-Wish-You-Were-Here.jpg',
            isNew: true,
            categorySlug: 'hoodies',
        },
        {
            name: 'Spider Hoodie - Black',
            price: 34990,
            image: 'CS-SPIDER-HOODIE.jpg',
            isNew: true,
            categorySlug: 'hoodies',
        },
        {
            name: 'Topper Hoodie - Blue',
            price: 34990,
            image: 'CS-BLUE-HOODIE.jpg',
            isNew: true,
            categorySlug: 'hoodies',
        },
        {
            name: 'Jogger Pants - Black',
            price: 25090,
            image: 'CS - Jogger Pants - Black.jpg',
            isNew: true,
            categorySlug: 'pants',
        },
        {
            name: 'Hoodie Pants - Dark White',
            price: 25090,
            image: 'CS-HOODIE-PANTS-DARK-WHITE.jpg',
            isNew: true,
            categorySlug: 'pants',
        },
        {
            name: 'Blue Flames Pants - Black',
            price: 25090,
            image: 'CS-BLUEFLAMES-BLACK.jpg',
            isNew: true,
            categorySlug: 'pants',
        },
        {
            name: 'Minimalist Puffer Jacket - White',
            price: 49990,
            image: 'CS-Minimalist-Puffer-Jacket-White.jpg',
            isNew: true,
            categorySlug: 'jackets',
        },
        {
            name: 'Beanie - Black',
            price: 4990,
            image: 'CS-BEANIE-BLACK.jpg',
            isNew: true,
            categorySlug: 'accessories',
        },
    ];

    await prisma.product.createMany({
        data: products,
    });

    console.log(`🌱 Seeded ${products.length} products.`);
}

main()
    .catch((error) => {
        console.error(error);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });