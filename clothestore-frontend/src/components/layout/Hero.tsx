import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import heroImage from '../../assets/CLOTHESTORE-HEADER.jpg';
import heroImage2 from '../../assets/CLOTHESTORE-HEADER-2.jpg';
import heroImage3 from '../../assets/CLOTHESTORE-HEADER-3.jpg';

const heroImages = [
    heroImage,
    heroImage2,
    heroImage3,
];

export default function Hero() {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % heroImages.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section
            className="
                relative
                w-full
                min-h-[calc(100vh-112px)]
                overflow-hidden
                bg-black
            "
        >
            {/* Imagem */}
            <AnimatePresence mode="sync">
                <motion.div
                    key={currentImage}
                    className="
                        absolute
                        inset-0
                        bg-cover
                        bg-center
                        bg-no-repeat
                    "
                    style={{
                        backgroundImage: `url(${heroImages[currentImage]})`,
                    }}
                    initial={{
                        opacity: 0,
                        scale: 1.08,
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                    }}
                    exit={{
                        opacity: 0,
                        scale: 0.98,
                    }}
                    transition={{
                        duration: 1.2,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                />
            </AnimatePresence>

            {/* Overlay */}
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

            {/* Indicadores */}
            <div
                className="
                    absolute
                    bottom-8
                    left-1/2
                    -translate-x-1/2
                    z-20
                    flex
                    items-center
                    gap-2
                "
            >
                {heroImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentImage(index)}
                        aria-label={`Ir para imagem ${index + 1}`}
                        className={`
                            h-[2px]
                            transition-all
                            duration-500
                            ${index === currentImage
                                ? 'w-10 bg-white'
                                : 'w-5 bg-white/40'
                            }
                        `}
                    />
                ))}
            </div>
        </section>
    );
}