import { useEffect, useRef, useState } from 'react';
import {
    Search,
    User,
    ShoppingBag,
    Menu,
    X,
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

import logo from '../../assets/logo.png';
import { getProducts } from '../../services/api';
import { getProductImage } from '../../utils/getProductImage';
import type { Product } from '../../types';

const navItems = [
    { label: 'HOME', path: '/' },
    { label: 'SHOP', path: '/shop' },
    { label: 'ABOUT', path: '/about' },
];

export function Header() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [search, setSearch] = useState('');
    const [products, setProducts] = useState<Product[]>([]);

    const searchRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    useEffect(() => {
        getProducts()
            .then(setProducts)
            .catch((error) => {
                console.error('Failed to load products:', error);
            });
    }, []);

    const filteredProducts =
        search.trim().length > 0
            ? products
                .filter((product) =>
                    product.name
                        .toLowerCase()
                        .includes(search.toLowerCase())
                )
                .slice(0, 4)
            : [];

    const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const query = search.trim();

        if (!query) {
            return;
        }

        navigate(`/shop?search=${encodeURIComponent(query)}`);
        setIsSearchOpen(false);
    };

    const handleViewAll = () => {
        const query = search.trim();

        if (!query) {
            return;
        }

        navigate(`/shop?search=${encodeURIComponent(query)}`);
        setIsSearchOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                searchRef.current &&
                !searchRef.current.contains(event.target as Node)
            ) {
                setIsSearchOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener(
                'mousedown',
                handleClickOutside
            );
        };
    }, []);

    return (
        <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* Menu Mobile */}
                    <div className="flex items-center lg:hidden">
                        <button
                            className="text-black p-2 -ml-2"
                            aria-label="Abrir menu"
                        >
                            <Menu className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Navegação Desktop */}
                    <nav className="hidden lg:flex items-center gap-8 flex-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                to={item.path}
                                className="
                                    relative
                                    py-2
                                    text-sm
                                    font-medium
                                    text-black
                                    transition-colors
                                    duration-300
                                    hover:text-gray-500

                                    after:absolute
                                    after:left-0
                                    after:bottom-0
                                    after:w-full
                                    after:h-[1px]
                                    after:bg-black
                                    after:origin-left
                                    after:scale-x-0
                                    after:transition-transform
                                    after:duration-300
                                    hover:after:scale-x-100
                                "
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center justify-center">
                        <Link to="/">
                            <img
                                src={logo}
                                alt="ClotheStore Logo"
                                className="h-15 w-auto"
                            />
                        </Link>
                    </div>

                    {/* Ícones */}
                    <div className="flex items-center justify-end gap-4 lg:gap-6 flex-1">

                        {/* Busca */}
                        <div
                            ref={searchRef}
                            className="relative"
                        >
                            <button
                                onClick={() => {
                                    setIsSearchOpen((prev) => !prev);
                                    setSearch('');
                                }}
                                className="
                                    text-black
                                    hover:text-gray-500
                                    transition-colors
                                "
                                aria-label="Pesquisar"
                            >
                                {isSearchOpen ? (
                                    <X className="w-5 h-5" />
                                ) : (
                                    <Search className="w-5 h-5" />
                                )}
                            </button>

                            {/* Search dropdown */}
                            {isSearchOpen && (
                                <div
                                    className="
                                        fixed
                                        left-0
                                        right-0
                                        top-20
                                        border-t
                                        border-gray-100
                                        bg-white
                                        shadow-lg
                                    "
                                >
                                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                                        {/* Search input */}
                                        <form
                                            onSubmit={handleSearch}
                                            className="flex items-center h-20"
                                        >
                                            <Search
                                                className="w-5 h-5 text-gray-400 mr-4 flex-shrink-0"
                                                strokeWidth={1.5}
                                            />

                                            <input
                                                type="text"
                                                value={search}
                                                onChange={(event) =>
                                                    setSearch(
                                                        event.target.value
                                                    )
                                                }
                                                placeholder="Search products..."
                                                autoFocus
                                                className="
                                                    flex-1
                                                    h-full
                                                    bg-transparent
                                                    font-outfit
                                                    text-sm
                                                    text-black
                                                    outline-none
                                                    placeholder:text-gray-400
                                                "
                                            />
                                        </form>

                                        {/* Results */}
                                        {search.trim() && (
                                            <div className="pb-8">

                                                {filteredProducts.length > 0 ? (
                                                    <>
                                                        <p
                                                            className="
                                                                mb-4
                                                                font-outfit
                                                                text-[10px]
                                                                uppercase
                                                                tracking-[0.2em]
                                                                text-gray-400
                                                            "
                                                        >
                                                            Products
                                                        </p>

                                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                                            {filteredProducts.map(
                                                                (product) => (
                                                                    <button
                                                                        key={product.id}
                                                                        type="button"
                                                                        onClick={() => {
                                                                            navigate(
                                                                                `/shop?search=${encodeURIComponent(
                                                                                    product.name
                                                                                )}`
                                                                            );
                                                                            setIsSearchOpen(
                                                                                false
                                                                            );
                                                                        }}
                                                                        className="
                                                                            group
                                                                            flex
                                                                            items-center
                                                                            gap-4
                                                                            text-left
                                                                            p-2
                                                                            transition-colors
                                                                            hover:bg-gray-50
                                                                        "
                                                                    >
                                                                        <div className="w-16 h-20 flex-shrink-0 overflow-hidden bg-gray-100">
                                                                            <img
                                                                                src={getProductImage(
                                                                                    product.categorySlug,
                                                                                    product.image
                                                                                )}
                                                                                alt={product.name}
                                                                                className="
                                                                                    w-full
                                                                                    h-full
                                                                                    object-cover
                                                                                    transition-transform
                                                                                    duration-500
                                                                                    group-hover:scale-105
                                                                                "
                                                                            />
                                                                        </div>

                                                                        <div className="min-w-0">
                                                                            <p
                                                                                className="
                                                                                    font-outfit
                                                                                    text-xs
                                                                                    font-medium
                                                                                    uppercase
                                                                                    tracking-wide
                                                                                    text-black
                                                                                    line-clamp-2
                                                                                "
                                                                            >
                                                                                {
                                                                                    product.name
                                                                                }
                                                                            </p>

                                                                            <p className="mt-2 font-outfit text-xs text-gray-500">
                                                                                R${' '}
                                                                                {product.price
                                                                                    .toFixed(
                                                                                        2
                                                                                    )
                                                                                    .replace(
                                                                                        '.',
                                                                                        ','
                                                                                    )}
                                                                            </p>
                                                                        </div>
                                                                    </button>
                                                                )
                                                            )}
                                                        </div>

                                                        <button
                                                            type="button"
                                                            onClick={
                                                                handleViewAll
                                                            }
                                                            className="
                                                                mt-6
                                                                font-outfit
                                                                text-xs
                                                                uppercase
                                                                tracking-wider
                                                                text-black
                                                                underline
                                                                underline-offset-4
                                                                transition-colors
                                                                hover:text-gray-500
                                                            "
                                                        >
                                                            View all results →
                                                        </button>
                                                    </>
                                                ) : (
                                                    <p className="font-outfit text-sm text-gray-500">
                                                        No products found.
                                                    </p>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Usuário */}
                        <button
                            className="
                                hidden
                                sm:block
                                text-black
                                hover:text-gray-500
                                transition-colors
                            "
                            aria-label="Minha conta"
                        >
                            <User className="w-5 h-5" />
                        </button>

                        {/* Carrinho */}
                        <button
                            className="
                                relative
                                text-black
                                hover:text-gray-500
                                transition-colors
                            "
                            aria-label="Carrinho"
                        >
                            <ShoppingBag className="w-5 h-5" />

                            <span
                                className="
                                    absolute
                                    -top-1.5
                                    -right-1.5
                                    w-4
                                    h-4
                                    flex
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-black
                                    text-white
                                    text-[10px]
                                    font-bold
                                "
                            >
                                0
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;