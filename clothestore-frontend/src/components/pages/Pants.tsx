import { products } from '../../data/mockData';
import { motion } from 'framer-motion';

export function Pants() {
    const pants = products.filter(
        (product) => product.categorySlug === 'pants'
    );

    return (
        <main className="min-h-screen bg-white">
            {/* Header da categoria */}
            <motion.section
                className="border-b border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
            >
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-16">
                    <div className="mb-8">
                        <p className="font-outfit text-xs uppercase tracking-[0.2em] text-gray-400">
                            Home / Shop / Pants
                        </p>
                    </div>

                    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <h1 className="font-outfit text-4xl sm:text-5xl lg:text-6xl font-semibold uppercase tracking-tight">
                                Pants
                            </h1>

                            <p className="font-outfit text-sm sm:text-base text-gray-500 mt-4 max-w-xl">
                                Designed for everyday movement, comfort and style.
                            </p>
                        </div>

                        <p className="font-outfit text-sm text-gray-500">
                            {pants.length} products
                        </p>
                    </div>
                </div>
            </motion.section>

            {/* Produtos */}
            <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
                <div className="flex items-center justify-between mb-8">
                    <p className="font-outfit text-sm text-gray-500">
                        Pants
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
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10">
                    {pants.map((product, index) => (
                        <motion.article
                            key={product.id}
                            className="group"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.08,
                                ease: 'easeOut',
                            }}
                        >
                            <div className="relative overflow-hidden bg-gray-100">
                                <img
                                    src={product.image}
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
                                    R$ {product.price.toFixed(2).replace('.', ',')}
                                </p>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </section>
        </main>
    );
}