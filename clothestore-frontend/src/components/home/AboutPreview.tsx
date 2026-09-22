import { Link } from 'react-router-dom';

import aboutImage from '../../assets/about/CS-ABOUTUS.jpg';

export function AboutPreview() {
    return (
        <section className="w-full border-t border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">

                {/* Image */}
                <div className="relative min-h-[500px] lg:min-h-full overflow-hidden bg-gray-100">
                    <img
                        src={aboutImage}
                        alt="ClotheStore"
                        className="
                            absolute
                            inset-0
                            w-full
                            h-full
                            object-cover
                            transition-transform
                            duration-700
                            hover:scale-105
                        "
                    />
                </div>

                {/* Content */}
                <div className="flex items-center bg-white px-6 py-16 sm:px-10 lg:px-16 xl:px-24">
                    <div className="max-w-xl">

                        <p className="font-outfit text-xs uppercase tracking-[0.25em] text-gray-400 mb-6">
                            About ClotheStore
                        </p>

                        <h2 className="font-outfit text-4xl sm:text-5xl lg:text-6xl font-semibold uppercase tracking-tight leading-[0.95]">
                            Wear Your
                            <br />
                            Identity.
                        </h2>

                        <div className="mt-8 space-y-4 max-w-md">
                            <p className="font-outfit text-sm sm:text-base leading-relaxed text-gray-600">
                                Streetwear is more than what you wear.
                                It's a way to express who you are.
                            </p>

                            <p className="font-outfit text-sm sm:text-base leading-relaxed text-gray-500">
                                ClotheStore was created for those who
                                see clothing as part of their identity,
                                their attitude and their everyday life.
                            </p>
                        </div>

                        <Link
                            to="/about"
                            className="
                                inline-flex
                                items-center
                                mt-10
                                font-outfit
                                text-xs
                                uppercase
                                tracking-[0.15em]
                                font-medium
                                text-black
                                border-b
                                border-black
                                pb-2
                                transition-all
                                duration-300
                                hover:text-gray-500
                                hover:border-gray-500
                            "
                        >
                            Discover our story
                            <span className="ml-3">→</span>
                        </Link>

                    </div>
                </div>

            </div>
        </section>
    );
}

export default AboutPreview;