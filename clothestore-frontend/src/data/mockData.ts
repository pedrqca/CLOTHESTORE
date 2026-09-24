import type { Category } from '../types';

// Category images
import tshirtImage from '../assets/SBCimages/TSHIRT.jpg';
import hoodieImage from '../assets/SBCimages/HOODIES.jpg';
import pantsImage from '../assets/SBCimages/PANTS.jpg';
import jacketsImage from '../assets/SBCimages/JACKETS.jpg';
import accessoriesImage from '../assets/SBCimages/ACESSORIES.jpg';

/* =========================================================
   CATEGORIES
========================================================= */

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