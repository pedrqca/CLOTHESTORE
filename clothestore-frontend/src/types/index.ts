export interface Category {
    id: string;
    name: string;
    slug: string;
    image: string;
}

export interface Product {
    id: string;
    name: string;
    price: number;
    categorySlug: string;
    image: string;
    isNew?: boolean;
}