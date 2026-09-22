import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import heroImage from '../../../assets/hero/CLOTHESTORE-HEADER.jpg';
import heroImage2 from '../../../assets/hero/CLOTHESTORE-HEADER-2.jpg';
import heroImage3 from '../../../assets/hero/CLOTHESTORE-HEADER-3.jpg';

const heroImages = [
    heroImage,
    heroImage2,
    heroImage3,
];

export function HeroImageSlider() {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % heroImages.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {/* Images */}
            <div className="absolute inset-0">
                <AnimatePresence mode="sync">
                    <motion.img
                        key={currentImage}
                        src={heroImages[currentImage]}
                        alt="ClotheStore"
                        className="absolute inset-0 w-full h-full object-cover"
                        initial={{
                            opacity: 0,
                            scale: 1.05,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                        }}
                        exit={{
                            opacity: 0,
                            scale: 1,
                        }}
                        transition={{
                            opacity: {
                                duration: 1.2,
                                ease: 'easeInOut',
                            },
                            scale: {
                                duration: 6,
                                ease: 'linear',
                            },
                        }}
                    />
                </AnimatePresence>
            </div>

            {/* Indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
                {heroImages.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        onClick={() => setCurrentImage(index)}
                        aria-label={`Ir para imagem ${index + 1}`}
                        className={`
                            h-[2px]
                            transition-all
                            duration-500
                            ${index === currentImage
                                ? 'w-10 bg-white'
                                : 'w-5 bg-white/40 hover:bg-white/70'
                            }
                        `}
                    />
                ))}
            </div>
        </>
    );
}

export default HeroImageSlider;