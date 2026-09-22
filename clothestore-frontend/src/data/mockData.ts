import type { Category, Product } from '../types';

import tshirtImage from '../assets/SBCimages/TSHIRT.jpg';
import hoodieImage from '../assets/SBCimages/HOODIES.jpg';
import pantsImage from '../assets/SBCimages/PANTS.jpg';
import jacketsImage from '../assets/SBCimages/JACKETS.jpg';
import accessoriesImage from '../assets/SBCimages/ACESSORIES.jpg';

import { getTshirtImage } from './tshirts';
import { getHoodieImage } from './hoodies';
import { getPantsImage } from './pants';

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
    // =========================
    // T-SHIRTS
    // =========================
    {
        id: 'tshirt-1',
        name: 'Heavyweight Boxy Fit Tee - Black',
        price: 189.90,
        categorySlug: 't-shirts',
        image: getTshirtImage('black-heavyweight-boxy-fit-tee.png'),
        isNew: false,
    },
    {
        id: 'tshirt-2',
        name: 'Heavyweight Boxy Fit Tee - Purple Logo',
        price: 189.90,
        categorySlug: 't-shirts',
        image: getTshirtImage('white-oversized-purple-logo-tshirt.jpg'),
        isNew: false,
    },
    {
        id: 'tshirt-3',
        name: 'Heavyweight Boxy Fit Tee - Front Writing',
        price: 189.90,
        categorySlug: 't-shirts',
        image: getTshirtImage('front-writted-borded.jpg'),
        isNew: true,
    },
    {
        id: 'tshirt-4',
        name: 'CS BUTTERFLY GRACEFUL - GRAY',
        price: 189.90,
        categorySlug: 't-shirts',
        image: getTshirtImage('CLOTHESHOP-BUTTERFLY-GRACEFUL.jpg'),
        isNew: false,
    },

    // =========================
    // HOODIES
    // =========================
    {
        id: 'hoodie-1',
        name: 'CS - WISH YOU WERE HERE - HOODIE',
        price: 349.90,
        categorySlug: 'hoodies',
        image: getHoodieImage('CS-Wish-You-Were-Here.jpg'),
        isNew: true,
    },
    {
        id: 'hoodie-2',
        name: 'CS - SPIDER HOODIE - BLACK',
        price: 349.90,
        categorySlug: 'hoodies',
        image: getHoodieImage('CS-SPIDER-HOODIE.jpg'),
        isNew: true,
    },
    {
        id: 'hoodie-3',
        name: 'CS - TOPPER HOODIE - BLUE',
        price: 349.90,
        categorySlug: 'hoodies',
        image: getHoodieImage('CS-BLUE-HOODIE.jpg'),
        isNew: true,
    },

    // =========================
    // PANTS
    // =========================
    {
        id: 'pants-1',
        name: 'CS - JOGGER PANTS - BLACK',
        price: 250.90,
        categorySlug: 'pants',
        image: getPantsImage('CS - Jogger Pants - Black.jpg'),
        isNew: true,
    },
    {
        id: 'pants-2',
        name: 'CS - HOODIE PANTS - DARK - WHITE',
        price: 250.90,
        categorySlug: 'pants',
        image: getPantsImage('CS-HOODIE-PANTS-DARK-WHITE.jpg'),
        isNew: true,
    },
    {
        id: 'pants-3',
        name: 'CS - BLUE FLAMES - BLACK',
        price: 250.90,
        categorySlug: 'pants',
        image: getPantsImage('CS-BLUEFLAMES-BLACK.jpg'),
        isNew: true,
    },

    // =========================
    // JACKETS
    // =========================
    {
        id: 'jacket-1',
        name: 'Minimalist Puffer Jacket',
        price: 499.90,
        categorySlug: 'jackets',
        image: 'https://placehold.co/600x800/111111/EEEEEE?text=PUFFER',
        isNew: true,
    },
];