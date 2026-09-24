import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import type { Product } from '../../types';

import { getProducts } from '../../services/api';
import { getProductImage } from '../../services/productImage';



export function Hoodies() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        getProducts()
            .then(setProducts)
            .catch((error) => {
                console.error('Erro ao buscar produtos:', error);
            });
    }, []);

    const hoodies = products.filter(
        (product) => product.categorySlug === 'hoodies'
    );

    return (
        <main className="min-h-screen bg-white">

            {/* Header da página */}
            <motion.section
                className="border-b border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.6,
                    ease: 'easeOut',
                }}
            >
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-16">

                    {/* Breadcrumb */}
                    <div className="mb-8">
                        <div className="flex items-center gap-2 font-outfit text-xs uppercase tracking-[0.2em] text-gray-400">
                            <Link
                                to="/"
                                className="transition-colors hover:text-black"
                            >
                                Home
                            </Link>

                            <span>/</span>

                            <span>Shop</span>

                            <span>/</span>

                            <span className="text-gray-500">
                                Hoodies
                            </span>
                        </div>
                    </div>

                    {/* Título */}
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

                        <div>
                            <h1 className="font-outfit text-4xl sm:text-5xl lg:text-6xl font-semibold uppercase tracking-tight">
                                Hoodies
                            </h1>

                            <p className="font-outfit text-sm sm:text-base text-gray-500 mt-4 max-w-xl">
                                Essential layers designed for comfort and style.
                            </p>
                        </div>

                        <p className="font-outfit text-sm text-gray-500">
                            {hoodies.length} products
                        </p>

                    </div>
                </div>
            </motion.section>

            {/* Produtos */}
            <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">

                {/* Barra de controles */}
                <motion.div
                    className="flex items-center justify-between mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.5,
                        delay: 0.15,
                        ease: 'easeOut',
                    }}
                >
                    <p className="font-outfit text-sm text-gray-500">
                        Hoodies
                    </p>

                    <button
                        className="
                            font-outfit
                            text-sm
                            uppercase
                            tracking-wider
                            text-black
                            hover:text-gray-500
                            transition-colors
                        "
                    >
                        Sort by
                    </button>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10">

                    {hoodies.map((product, index) => (
                        <motion.article
                            key={product.id}
                            className="group"
                            initial={{
                                opacity: 0,
                                y: 30,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
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

                            {/* Imagem */}
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

                                {/* Badge */}
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

                            {/* Informações */}
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
                                    R$ {(product.price / 100).toFixed(2).replace('.', ',')}
                                </p>

                            </div>

                        </motion.article>
                    ))}

                </div>
            </section>

        </main>
    );
}

export default Hoodies;