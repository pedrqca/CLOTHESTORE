import { motion } from 'framer-motion';

export function MarqueeBanner() {
    const text = 'MAKE YOUR STYLE ✦';

    return (
        <section className="w-full overflow-hidden bg-black py-5 sm:py-6">
            <motion.div
                className="flex w-max"
                animate={{ x: ['0%', '-50%'] }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: 'linear',
                }}
            >
                {Array.from({ length: 8 }).map((_, index) => (
                    <span
                        key={index}
                        className="
                            px-5
                            font-outfit
                            text-2xl
                            font-semibold
                            uppercase
                            tracking-[0.08em]
                            text-white
                            sm:text-3xl
                            lg:text-4xl
                        "
                    >
                        {text}
                    </span>
                ))}
            </motion.div>
        </section>
    );
}

export default MarqueeBanner;