

import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo or Title */}
                    <div className="text-xl font-bold">Library</div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6">
                        <a href="#" className="hover:text-gray-200">
                            All Books
                        </a>
                        <a href="#" className="hover:text-gray-200">
                            Add Book
                        </a>
                        <a href="#" className="hover:text-gray-200">
                            Borrow Summary
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="focus:outline-none text-white"
                        >
                            ☰
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                {isOpen && (
                    <div className="md:hidden mt-2 space-y-2 pb-4">
                        <a href="#" className="block px-2 py-1 hover:text-gray-200 rounded">
                            All Books
                        </a>
                        <a href="#" className="block px-2 py-1 hover:text-gray-200 rounded">
                            Add Book
                        </a>
                        <a href="#" className="block px-2 py-1 hover:text-gray-200 rounded">
                            Borrow Summary
                        </a>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
