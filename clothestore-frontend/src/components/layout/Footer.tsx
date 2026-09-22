import { Link } from 'react-router-dom';

export function Footer() {
    return (
        <footer className="bg-black text-white">

            {/* Main footer */}
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

                    {/* Brand */}
                    <div className="lg:col-span-5">
                        <Link
                            to="/"
                            className="
                                inline-block
                                font-outfit
                                text-2xl
                                font-semibold
                                uppercase
                                tracking-tight
                            "
                        >
                            CLOTHESTORE
                        </Link>

                        <p className="
                            mt-6
                            max-w-sm
                            font-outfit
                            text-sm
                            leading-relaxed
                            text-white/50
                        ">
                            Streetwear made for those who create
                            their own style.
                        </p>

                        <p className="
                            mt-8
                            font-outfit
                            text-xs
                            uppercase
                            tracking-[0.2em]
                            text-white/30
                        ">
                            Wear Your Identity.
                        </p>
                    </div>

                    {/* Shop */}
                    <div className="lg:col-span-2">

                        <p className="
                            font-outfit
                            text-xs
                            uppercase
                            tracking-[0.2em]
                            text-white/40
                            mb-6
                        ">
                            Shop
                        </p>

                        <nav className="flex flex-col gap-3">

                            <Link
                                to="/shop/t-shirts"
                                className="
                                    font-outfit
                                    text-sm
                                    text-white/70
                                    transition-colors
                                    hover:text-white
                                "
                            >
                                T-Shirts
                            </Link>

                            <Link
                                to="/shop/hoodies"
                                className="
                                    font-outfit
                                    text-sm
                                    text-white/70
                                    transition-colors
                                    hover:text-white
                                "
                            >
                                Hoodies
                            </Link>

                            <Link
                                to="/shop/pants"
                                className="
                                    font-outfit
                                    text-sm
                                    text-white/70
                                    transition-colors
                                    hover:text-white
                                "
                            >
                                Pants
                            </Link>

                            <Link
                                to="/shop/jackets"
                                className="
                                    font-outfit
                                    text-sm
                                    text-white/70
                                    transition-colors
                                    hover:text-white
                                "
                            >
                                Jackets
                            </Link>

                            <Link
                                to="/shop/accessories"
                                className="
                                    font-outfit
                                    text-sm
                                    text-white/70
                                    transition-colors
                                    hover:text-white
                                "
                            >
                                Accessories
                            </Link>

                        </nav>

                    </div>

                    {/* Company */}
                    <div className="lg:col-span-2">

                        <p className="
                            font-outfit
                            text-xs
                            uppercase
                            tracking-[0.2em]
                            text-white/40
                            mb-6
                        ">
                            Company
                        </p>

                        <nav className="flex flex-col gap-3">

                            <Link
                                to="/about"
                                className="
                                    font-outfit
                                    text-sm
                                    text-white/70
                                    transition-colors
                                    hover:text-white
                                "
                            >
                                About
                            </Link>

                            <Link
                                to="/"
                                className="
                                    font-outfit
                                    text-sm
                                    text-white/70
                                    transition-colors
                                    hover:text-white
                                "
                            >
                                Contact
                            </Link>

                            <Link
                                to="/"
                                className="
                                    font-outfit
                                    text-sm
                                    text-white/70
                                    transition-colors
                                    hover:text-white
                                "
                            >
                                Shipping
                            </Link>

                            <Link
                                to="/"
                                className="
                                    font-outfit
                                    text-sm
                                    text-white/70
                                    transition-colors
                                    hover:text-white
                                "
                            >
                                Returns
                            </Link>

                        </nav>

                    </div>

                    {/* Newsletter */}
                    <div className="lg:col-span-3">

                        <p className="
                            font-outfit
                            text-xs
                            uppercase
                            tracking-[0.2em]
                            text-white/40
                            mb-6
                        ">
                            Stay in the loop
                        </p>

                        <p className="
                            font-outfit
                            text-sm
                            leading-relaxed
                            text-white/50
                            mb-6
                        ">
                            Subscribe for new drops, exclusive
                            releases and updates.
                        </p>

                        <form className="flex border-b border-white/30">

                            <input
                                type="email"
                                placeholder="Your email"
                                className="
                                    flex-1
                                    min-w-0
                                    bg-transparent
                                    py-3
                                    font-outfit
                                    text-sm
                                    text-white
                                    outline-none
                                    placeholder:text-white/30
                                "
                            />

                            <button
                                type="submit"
                                className="
                                    font-outfit
                                    text-xs
                                    uppercase
                                    tracking-wider
                                    text-white
                                    transition-colors
                                    hover:text-white/50
                                "
                            >
                                Join →
                            </button>

                        </form>

                    </div>

                </div>

            </div>

            {/* Bottom */}
            <div className="border-t border-white/10">

                <div className="
                    max-w-7xl
                    mx-auto
                    px-6
                    sm:px-8
                    lg:px-12
                    py-6
                    flex
                    flex-col
                    sm:flex-row
                    items-center
                    justify-between
                    gap-4
                ">

                    <p className="
                        font-outfit
                        text-[10px]
                        uppercase
                        tracking-[0.15em]
                        text-white/30
                    ">
                        © {new Date().getFullYear()} ClotheStore. All rights reserved.
                    </p>

                    <div className="flex items-center gap-6">

                        <a
                            href="#"
                            className="
                                font-outfit
                                text-[10px]
                                uppercase
                                tracking-[0.15em]
                                text-white/40
                                transition-colors
                                hover:text-white
                            "
                        >
                            Instagram
                        </a>

                        <a
                            href="#"
                            className="
                                font-outfit
                                text-[10px]
                                uppercase
                                tracking-[0.15em]
                                text-white/40
                                transition-colors
                                hover:text-white
                            "
                        >
                            TikTok
                        </a>

                    </div>

                </div>

            </div>

        </footer>
    );
}

export default Footer;