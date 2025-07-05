import { BookOpenCheck } from "lucide-react";
import { Link } from "react-router";

const Footer = () => {
    return (
        <div className='max-w-7xl mx-auto py-12 space-y-2'>
            <div className="flex space-x-6 items-center justify-center">
                <Link to="/books" className="hover:text-green-500">
                    All Books
                </Link>
                <Link to="/create-book" className="hover:text-green-500">
                    Add Book
                </Link>
                <Link to="/borrow-summary" className="hover:text-green-500">
                    Borrow Summary
                </Link>
            </div>
            <div className="text-3xl mt-10 font-bold flex items-center  justify-center gap-2"><BookOpenCheck className="text-green-500" /> Library<span className="text-green-500 text-2xl">MS</span> </div>
            <p className="text-center tracking-[.5em] mt-8 text-md uppercase">One Stop Library Management System</p>
            <div className="mt-8">
                <div className="h-[2px] bg-gray-200"></div>
                <p className="text-center text-gray-400 pt-4 text-md">Copyright © 2025 - All right reserved by akmal hossain</p>
            </div>
        </div>
    );
};

export default Footer;