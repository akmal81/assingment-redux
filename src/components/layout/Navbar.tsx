

import { useState } from "react";
import { ModeToggle } from "../ui/mode-toggle";
import { Link } from "react-router";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo or Title */}
                    <div className="text-xl font-bold">Library</div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6">
                        <Link to="/books" className="hover:text-gray-500">
                            All Books
                        </Link>
                        <Link to="/create-book" className="hover:text-gray-500">
                            Add Book
                        </Link>
                        <Link to="/borrow-summary" className="hover:text-gray-500">
                            Borrow Summary
                        </Link>
                        <ModeToggle />
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="focus:outline-none"
                        >
                            ☰
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                {isOpen && (
                    <div className="md:hidden mt-2 space-y-2 pb-4">
                        <Link to="/books" className="block px-2 py-1 hover:text-gray-500 rounded">
                            All Books
                        </Link>
                        <Link to="/add-book" className="block px-2 py-1 hover:text-gray-500 rounded">
                            Add Book
                        </Link>
                        <Link to="/borrow-summary" className="block px-2 py-1 hover:text-gray-500 rounded">
                            Borrow Summary
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
