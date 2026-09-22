import { Link } from 'react-router-dom';

import aboutImage from '../assets/about/CS-ABOUTUS.jpg';

export function About() {
    return (
        <main>

            {/* Hero */}
            <section className="relative min-h-[70vh] overflow-hidden bg-black">
                <img
                    src={aboutImage}
                    alt="ClotheStore"
                    className="
                        absolute
                        inset-0
                        w-full
                        h-full
                        object-cover
                        opacity-70
                    "
                />

                <div className="absolute inset-0 bg-black/30" />

                <div className="relative z-10 min-h-[70vh] flex items-end">
                    <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 pb-16 sm:pb-20 lg:pb-24">
                        <p className="font-outfit text-xs uppercase tracking-[0.25em] text-white/60 mb-5">
                            ClotheStore
                        </p>

                        <h1 className="font-outfit text-5xl sm:text-6xl lg:text-8xl font-semibold uppercase tracking-tight leading-[0.9] text-white">
                            Wear Your
                            <br />
                            Identity.
                        </h1>
                    </div>
                </div>
            </section>

            {/* Introduction */}
            <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 sm:py-32 lg:py-40">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

                    <div className="lg:col-span-4">
                        <p className="font-outfit text-xs uppercase tracking-[0.25em] text-gray-400">
                            01 — About us
                        </p>
                    </div>

                    <div className="lg:col-span-7 lg:col-start-6">
                        <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-medium uppercase tracking-tight leading-tight">
                            Clothing is more than
                            <br />
                            just a piece.
                        </h2>

                        <div className="mt-8 space-y-5 max-w-2xl">
                            <p className="font-outfit text-base sm:text-lg leading-relaxed text-gray-600">
                                ClotheStore was created from the idea that
                                clothing should reflect the person wearing it.
                                Your style is personal, and the pieces you
                                choose become part of your identity.
                            </p>

                            <p className="font-outfit text-base sm:text-lg leading-relaxed text-gray-500">
                                We believe streetwear is about freedom,
                                individuality and confidence. There are no
                                predefined rules for how you should express
                                yourself.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            {/* Philosophy */}
            <section className="bg-black text-white">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 sm:py-32">

                    <div className="mb-16">
                        <p className="font-outfit text-xs uppercase tracking-[0.25em] text-white/40">
                            02 — Our philosophy
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

                        <div className="border-t border-white/20 pt-6">
                            <span className="font-outfit text-xs text-white/40">
                                01
                            </span>

                            <h3 className="font-outfit mt-8 text-2xl font-medium uppercase tracking-tight">
                                Identity
                            </h3>

                            <p className="font-outfit mt-4 text-sm leading-relaxed text-white/50">
                                Your style tells a story before you say a
                                word. Wear what feels like you.
                            </p>
                        </div>

                        <div className="border-t border-white/20 pt-6">
                            <span className="font-outfit text-xs text-white/40">
                                02
                            </span>

                            <h3 className="font-outfit mt-8 text-2xl font-medium uppercase tracking-tight">
                                Individuality
                            </h3>

                            <p className="font-outfit mt-4 text-sm leading-relaxed text-white/50">
                                Streetwear has no single definition.
                                Make it your own.
                            </p>
                        </div>

                        <div className="border-t border-white/20 pt-6">
                            <span className="font-outfit text-xs text-white/40">
                                03
                            </span>

                            <h3 className="font-outfit mt-8 text-2xl font-medium uppercase tracking-tight">
                                Expression
                            </h3>

                            <p className="font-outfit mt-4 text-sm leading-relaxed text-white/50">
                                Every piece is an opportunity to express
                                your attitude and your perspective.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Image + Quote */}
            <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 sm:py-32 lg:py-40">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    <div className="overflow-hidden bg-gray-100">
                        <img
                            src={aboutImage}
                            alt="ClotheStore streetwear"
                            className="
                                w-full
                                aspect-[4/5]
                                object-cover
                            "
                        />
                    </div>

                    <div>
                        <p className="font-outfit text-4xl sm:text-5xl lg:text-6xl font-medium uppercase tracking-tight leading-[0.95]">
                            There are no rules
                            <br />
                            for your style.
                        </p>

                        <div className="mt-8 h-px w-16 bg-black" />

                        <p className="mt-6 font-outfit text-sm text-gray-500 uppercase tracking-wider">
                            ClotheStore
                        </p>
                    </div>

                </div>

            </section>

            {/* CTA */}
            <section className="bg-gray-100">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 sm:py-32 text-center">

                    <p className="font-outfit text-xs uppercase tracking-[0.25em] text-gray-400 mb-6">
                        Find your style
                    </p>

                    <h2 className="font-outfit text-4xl sm:text-5xl lg:text-7xl font-semibold uppercase tracking-tight leading-none">
                        Make it yours.
                    </h2>

                    <Link
                        to="/shop"
                        className="
                            inline-flex
                            mt-10
                            bg-black
                            text-white
                            px-8
                            py-4
                            font-outfit
                            text-xs
                            uppercase
                            tracking-[0.15em]
                            font-medium
                            transition-colors
                            duration-300
                            hover:bg-gray-800
                        "
                    >
                        Shop the collection
                    </Link>

                </div>
            </section>

        </main>
    );
}

export default About;