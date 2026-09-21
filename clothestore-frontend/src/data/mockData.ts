import type { Category, Product } from '../types';

export const categories: Category[] = [
    { id: '1', name: 'T-Shirts', slug: 't-shirts', image: 'https://placehold.co/600x800/111111/EEEEEE?text=T-SHIRTS' },
    { id: '2', name: 'Hoodies', slug: 'hoodies', image: 'https://placehold.co/600x800/111111/EEEEEE?text=HOODIES' },
    { id: '3', name: 'Pants', slug: 'pants', image: 'https://placehold.co/600x800/111111/EEEEEE?text=PANTS' },
    { id: '4', name: 'Jackets', slug: 'jackets', image: 'https://placehold.co/600x800/111111/EEEEEE?text=JACKETS' },
    { id: '5', name: 'Accessories', slug: 'accessories', image: 'https://placehold.co/600x800/111111/EEEEEE?text=ACCESSORIES' },
];

export const products: Product[] = [
    {
        id: 'p1',
        name: 'Heavyweight Boxy Fit Tee - Black',
        price: 189.90,
        categorySlug: 't-shirts',
        image: 'https://placehold.co/600x800/111111/EEEEEE?text=BOXY+TEE',
        isNew: true,
    },
    {
        id: 'p2',
        name: 'Essential Oversized Hoodie - White',
        price: 349.90,
        categorySlug: 'hoodies',
        image: 'https://placehold.co/600x800/EEEEEE/111111?text=HOODIE',
        isNew: true,
    },
    {
        id: 'p3',
        name: 'Utility Cargo Pants - Black',
        price: 289.90,
        categorySlug: 'pants',
        image: 'https://placehold.co/600x800/111111/EEEEEE?text=CARGO+PANTS',
        isNew: false,
    },
    {
        id: 'p4',
        name: 'Minimalist Puffer Jacket',
        price: 499.90,
        categorySlug: 'jackets',
        image: 'https://placehold.co/600x800/111111/EEEEEE?text=PUFFER',
        isNew: true,
    },
];