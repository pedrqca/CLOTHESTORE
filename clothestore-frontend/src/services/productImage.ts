import { getTshirtImage } from '../data/tshirts';
import { getHoodieImage } from '../data/hoodies';
import { getPantsImage } from '../data/pants';
import { getJacketImage } from '../data/jackets';
import { getAccessoryImage } from '../data/accesory';

export function getProductImage(categorySlug: string, image: string) {
    switch (categorySlug) {
        case 't-shirts':
            return getTshirtImage(image);

        case 'hoodies':
            return getHoodieImage(image);

        case 'pants':
            return getPantsImage(image);

        case 'jackets':
            return getJacketImage(image);

        case 'accessories':
            return getAccessoryImage(image);

        default:
            throw new Error(`Unknown product category: ${categorySlug}`);
    }
}