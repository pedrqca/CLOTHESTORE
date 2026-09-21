import type { Category, Product } from '../types';
import tshirtImage from '../assets/TSHIRT.jpg';
import hoodieImage from '../assets/HOODIES.jpg';
import pantsImage from '../assets/PANTS.jpg';
import jacketsImage from '../assets/JACKETS.jpg';
import accessoriesImage from '../assets/ACESSORIES.jpg';

export const categories: Category[] = [
    {
        id: '1',
        name: 'T-Shirts',
        slug: 't-shirts',
        image: tshirtImage,
    },
    {
        id: '2',
        name: 'Hoodies',
        slug: 'hoodies',
        image: hoodieImage,
    },
    {
        id: '3',
        name: 'Pants',
        slug: 'pants',
        image: pantsImage,
    },
    {
        id: '4',
        name: 'Jackets',
        slug: 'jackets',
        image: jacketsImage,
    },
    {
        id: '5',
        name: 'Accessories',
        slug: 'accessories',
        image: accessoriesImage,
    },
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