import { Search, User, ShoppingBag, Menu } from 'lucide-react';
import logo from '../../assets/logo.png';

const navItems = ['HOME', 'SHOP', 'COLLECTIONS', 'ABOUT'];

export function Header() {
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
                            <a
                                key={item}
                                href="#"
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
                                {item}
                            </a>
                        ))}
                    </nav>

                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center justify-center">
                        <img
                            src={logo}
                            alt="ClotheStore Logo"
                            className="h-15 w-auto"
                        />
                    </div>

                    {/* Ícones */}
                    <div className="flex items-center justify-end gap-4 lg:gap-6 flex-1">

                        {/* Busca */}
                        <button
                            className="
                                hidden
                                sm:block
                                text-black
                                hover:text-gray-500
                                transition-colors
                            "
                            aria-label="Pesquisar"
                        >
                            <Search className="w-5 h-5" />
                        </button>

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