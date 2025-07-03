import type { IBook } from "@/type";
import { Button } from "../ui/button";
import { BookOpen, BookPlus, Trash2 } from "lucide-react";
import { Link } from "react-router";
import { EditBookModal } from "./EditBook";

interface IProps {
    book: IBook
}



const BookTable = ({ book }: IProps) => {
    
    return (
        <tr className="hover:bg-gray-900 w-fit no-w">
            <td className="px-4 py-2 border">{book.title}</td>
            <td className="px-4 py-2 border">{book.author}</td>
            <td className="px-4 py-2 border">{book.genre}</td>
            <td className="px-4 py-2 border">{book.isbn}</td>
            <td className="px-4 py-2 border">{book.description}</td>
            <td className="px-4 py-2 border text-center">{book.copies}</td>
            <td className="px-4 py-2 border text-center">
                {book.copies ? "available" : "unavailable"}
            </td>
            <td className="px-4 py-2 border text-center">
                <div className="flex flex-nowrap">
                    <Link to="/create-book"><BookPlus /></Link>
                    <EditBookModal id={book._id}/>
                    <Link to={`/books/${book._id}`}><BookOpen /></Link>
                    
                    <Button variant="link" title="Delete Book" className="border-r-2 rounded-none text-red-500"><Trash2 /></Button>
                </div>
            </td>
        </tr>
    );
};

export default BookTable;