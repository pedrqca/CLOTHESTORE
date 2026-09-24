import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

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

export function AllProducts() {
    const [products, setProducts] = useState<Product[]>([]);
    const [search, setSearch] = useState('');

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
        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20">

            {/* Header */}
            <div className="flex flex-col gap-8 mb-12">

                <div>
                    <p className="font-outfit text-xs uppercase tracking-[0.2em] text-gray-400 mb-4">
                        Shop
                    </p>

                    <h2 className="font-outfit text-4xl sm:text-5xl lg:text-6xl font-semibold uppercase tracking-tight">
                        All Products
                    </h2>
                </div>

                {/* Search */}
                <div className="relative w-full max-w-md">
                    <Search
                        size={18}
                        strokeWidth={1.5}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                        type="text"
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                        placeholder="Search products..."
                        className="
                            w-full
                            h-12
                            pl-11
                            pr-4
                            border
                            border-gray-200
                            bg-white
                            font-outfit
                            text-sm
                            text-black
                            outline-none
                            transition-colors
                            placeholder:text-gray-400
                            focus:border-black
                        "
                    />
                </div>

            </div>

            {/* Result count */}
            <div className="mb-8">
                <p className="font-outfit text-sm text-gray-500">
                    {filteredProducts.length} products
                </p>
            </div>

            {/* Products */}
            {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10">

                    {filteredProducts.map((product, index) => (
                        <motion.article
                            key={product.id}
                            className="group"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
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

                                <h3
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
                                </h3>

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
                </div>
            )}

        </section>
    );
}

export default AllProducts;