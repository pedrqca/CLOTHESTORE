import { products } from '../../data/mockData';

export function Tshirts() {
    const tshirts = products.filter(
        (product) => product.categorySlug === 't-shirts'
    );

    return (
        <main className="min-h-screen bg-white">

            {/* Header da página */}
            <section className="border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-16">

                    {/* Breadcrumb */}
                    <div className="mb-8">
                        <p className="font-outfit text-xs uppercase tracking-[0.2em] text-gray-400">
                            Home / Shop / T-Shirts
                        </p>
                    </div>

                    {/* Título */}
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

                        <div>
                            <h1 className="font-outfit text-4xl sm:text-5xl lg:text-6xl font-semibold uppercase tracking-tight">
                                T-Shirts
                            </h1>

                            <p className="font-outfit text-sm sm:text-base text-gray-500 mt-4 max-w-xl">
                                Essential pieces designed to define your style.
                            </p>
                        </div>

                        <p className="font-outfit text-sm text-gray-500">
                            {tshirts.length} products
                        </p>

                    </div>
                </div>
            </section>

            {/* Produtos */}
            <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">

                {/* Barra de controles */}
                <div className="flex items-center justify-between mb-8">

                    <p className="font-outfit text-sm text-gray-500">
                        T-Shirts
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

                {/* Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10">

                    {tshirts.map((product) => (
                        <article key={product.id} className="group">

                            {/* Imagem */}
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
                                    R$ {product.price.toFixed(2).replace('.', ',')}
                                </p>

                            </div>

                        </article>
                    ))}

                </div>
            </section>

        </main>
    );
}