import { motion } from 'framer-motion';
import { categories } from '../../data/mockData';
import { Link } from 'react-router-dom';

export default function ShopByCategories() {
    return (
        <motion.section
            className="py-20 sm:py-24"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
                duration: 0.7,
                ease: 'easeOut',
            }}
        >
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

                {/* Header da seção */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.6,
                        delay: 0.1,
                    }}
                >
                    <p className="font-outfit text-sm font-medium tracking-[0.3em] uppercase text-gray-500">
                        Explore
                    </p>

                    <h2 className="font-outfit text-3xl sm:text-4xl font-semibold uppercase tracking-tight mt-3">
                        Shop By Categories
                    </h2>
                </motion.div>

                {/* Categorias */}
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category.id}
                            initial={{ opacity: 0, y: 35 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.08,
                                ease: 'easeOut',
                            }}
                        >
                            <Link
                                to={`/shop/${category.slug}`}
                                className="group block"
                            >
                                {/* Imagem + Hover */}
                                <div className="relative overflow-hidden">
                                    <img
                                        src={category.image}
                                        alt={category.name}
                                        className="
                                            w-full
                                            aspect-[3/4]
                                            object-cover
                                            transition-transform
                                            duration-700
                                            group-hover:scale-105
                                        "
                                    />

                                    {/* Card preto */}
                                    <div
                                        className="
                                            absolute
                                            inset-0
                                            flex
                                            items-center
                                            justify-center
                                            bg-black
                                            opacity-0
                                            transition-opacity
                                            duration-400
                                            group-hover:opacity-100
                                        "
                                    >
                                        <span
                                            className="
                                                font-outfit
                                                text-2xl
                                                sm:text-3xl
                                                lg:text-4xl
                                                font-semibold
                                                uppercase
                                                tracking-tight
                                                text-white
                                                text-center
                                                px-4
                                                translate-y-3
                                                opacity-0
                                                transition-all
                                                duration-500
                                                group-hover:translate-y-0
                                                group-hover:opacity-100
                                            "
                                        >
                                            {category.name}
                                        </span>
                                    </div>
                                </div>

                                {/* Nome */}
                                <h3
                                    className="
                                        font-outfit
                                        text-sm
                                        font-medium
                                        uppercase
                                        tracking-wider
                                        mt-4
                                    "
                                >
                                    {category.name}
                                </h3>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}