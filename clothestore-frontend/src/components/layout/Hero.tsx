import heroImage from '../../assets/CLOTHESTORE-HEADER.jpg';

export function Hero() {
    return (
        <section
            className="
                relative
                w-full
                min-h-[calc(100vh-112px)]
                bg-cover
                bg-center
                bg-no-repeat
            "
            style={{ backgroundImage: `url(${heroImage})` }}
        >
            {/* Overlay sutil */}
            <div className="absolute inset-0 bg-black/10" />

            {/* Conteúdo */}
            <div className="relative z-10 min-h-[calc(100vh-112px)]">
                <div
                    className="
                        max-w-7xl
                        mx-auto
                        min-h-[calc(100vh-112px)]
                        px-6
                        sm:px-8
                        lg:px-12
                        flex
                        items-center
                    "
                >
                    <div
                        className="
                            text-white
                            max-w-lg
                            sm:max-w-xl
                        "
                    >
                        {/* Nome da marca */}
                        <p
                            className="
                                font-outfit
                                text-base
                                sm:text-lg
                                font-medium
                                tracking-[0.3em]
                                uppercase
                                mb-4
                                sm:mb-5
                                text-black
                            "
                        >
                            CLOTHESTORE
                        </p>

                        {/* Título */}
                        <h1
                            className="
                                font-outfit
                                font-semibold
                                text-5xl
                                sm:text-6xl
                                lg:text-7xl
                                leading-[0.95]
                                tracking-tight
                                uppercase
                            "
                        >
                            Wear Your
                            <br />
                            Identity.
                        </h1>

                        {/* Descrição */}
                        <p
                            className="
                                font-outfit
                                mt-5
                                sm:mt-6
                                text-sm
                                sm:text-base
                                font-light
                                leading-relaxed
                                text-white/90
                                max-w-md
                            "
                        >
                            Streetwear made for those who create
                            their own style.
                        </p>

                        {/* Botão */}
                        <button
                            className="
                                font-outfit
                                mt-7
                                sm:mt-8
                                bg-white
                                text-black
                                px-7
                                sm:px-8
                                py-3
                                sm:py-3.5
                                text-xs
                                sm:text-sm
                                font-semibold
                                uppercase
                                tracking-[0.15em]
                                transition-all
                                duration-300
                                hover:bg-black
                                hover:text-white
                            "
                        >
                            Shop now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}