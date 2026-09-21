import { categories } from '../../data/mockData';

export function ShopByCategories() {
    return (
        <section className="py-20 sm:py-24">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

                {/* Header da seção */}
                <div className="text-center mb-12">
                    <p className="font-outfit text-sm font-medium tracking-[0.3em] uppercase text-gray-500">
                        Explore
                    </p>

                    <h2 className="font-outfit text-3xl sm:text-4xl font-semibold uppercase tracking-tight mt-3">
                        Shop By Categories
                    </h2>
                </div>

                {/* Categorias */}
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
                    {categories.map((category) => (
                        <div key={category.id} className="group">
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
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}