import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useSearchParams } from 'react-router-dom';

import { getProducts } from '../../services/api';
import { getProductImage } from '../../services/productImage';

type Product = {
    id: number;
    name: string;
    price: number;
    image: string;
    isNew: boolean;
    categorySlug: string;
};

export function Shop() {
    const [searchParams] = useSearchParams();
    const [products, setProducts] = useState<Product[]>([]);

    const search = searchParams.get('search') || '';

    useEffect(() => {
        getProducts()
            .then(setProducts)
            .catch((error) => {
                console.error('Erro ao buscar produtos:', error);
            });
    }, []);

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <main className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20">

            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-8 font-outfit text-xs uppercase tracking-wider">
                <Link
                    to="/"
                    className="transition-colors hover:text-gray-500"
                >
                    Home
                </Link>

                <span className="text-gray-400">/</span>

                <span className="text-gray-500">
                    Shop
                </span>
            </div>

            {/* Header */}
            <div className="mb-12">
                <p className="font-outfit text-xs uppercase tracking-[0.2em] text-gray-400 mb-4">
                    ClotheStore
                </p>

                <h1 className="font-outfit text-4xl sm:text-5xl lg:text-6xl font-semibold uppercase tracking-tight">
                    {search ? 'Search Results' : 'Shop All'}
                </h1>

                {search ? (
                    <p className="mt-4 font-outfit text-sm text-gray-500">
                        Results for:{' '}
                        <span className="text-black font-medium uppercase">
                            "{search}"
                        </span>
                    </p>
                ) : (
                    <p className="mt-4 max-w-xl font-outfit text-sm leading-relaxed text-gray-500">
                        Explore our complete collection of streetwear pieces,
                        from everyday essentials to statement designs.
                    </p>
                )}
            </div>

            {/* Products info */}
            <div className="flex items-center justify-between mb-8">
                <p className="font-outfit text-sm text-gray-500">
                    {filteredProducts.length} products
                </p>

                <button
                    type="button"
                    className="
                        font-outfit
                        text-xs
                        uppercase
                        tracking-wider
                        text-black
                        transition-colors
                        hover:text-gray-500
                    "
                >
                    Sort by
                </button>
            </div>

            {/* Products */}
            {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10">

                    {filteredProducts.map((product, index) => (
                        <motion.article
                            key={product.id}
                            className="group"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{
                                once: true,
                                amount: 0.2,
                            }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.08,
                                ease: 'easeOut',
                            }}
                        >

                            {/* Image */}
                            <div className="relative overflow-hidden bg-gray-100">

                                <img
                                    src={getProductImage(
                                        product.categorySlug,
                                        product.image
                                    )}
                                    alt={product.name}
                                    loading="lazy"
                                    className="
                                        w-full
                                        aspect-[3/4]
                                        object-cover
                                        transition-transform
                                        duration-700
                                        group-hover:scale-105
                                    "
                                />

                                {/* New badge */}
                                {product.isNew && (
                                    <span
                                        className="
                                            absolute
                                            top-3
                                            left-3
                                            bg-white
                                            px-3
                                            py-1
                                            font-outfit
                                            text-[10px]
                                            font-medium
                                            uppercase
                                            tracking-wider
                                        "
                                    >
                                        New
                                    </span>
                                )}

                            </div>

                            {/* Product info */}
                            <div className="mt-4">

                                <h2
                                    className="
                                        font-outfit
                                        text-sm
                                        font-medium
                                        uppercase
                                        tracking-wide
                                        text-black
                                    "
                                >
                                    {product.name}
                                </h2>

                                <p className="font-outfit text-sm text-gray-500 mt-2">
                                    R$ {(product.price / 100)
                                        .toFixed(2)
                                        .replace('.', ',')}
                                </p>

                            </div>

                        </motion.article>
                    ))}

                </div>
            ) : (
                <div className="py-20 text-center">
                    <p className="font-outfit text-sm text-gray-500">
                        No products found.
                    </p>

                    {search && (
                        <Link
                            to="/shop"
                            className="
                                inline-block
                                mt-4
                                font-outfit
                                text-xs
                                uppercase
                                tracking-wider
                                text-black
                                underline
                                underline-offset-4
                                transition-colors
                                hover:text-gray-500
                            "
                        >
                            View all products
                        </Link>
                    )}
                </div>
            )}

        </main>
    );
}

export default Shop;