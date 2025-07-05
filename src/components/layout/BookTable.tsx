import type { IBook } from "@/type";
// import { BookOpen } from "lucide-react";
// import { Link } from "react-router";
import { EditBookModal } from "./EditBook";
import { DeleteModal } from "./DeleteModal";
// import { cn } from "@/lib/utils";
import { BorrowBook } from "./BorrowBook";
import { Button } from "../ui/button";
import { BookOpen } from "lucide-react";
import { Link } from "react-router";

interface IProps {
    book: IBook
}



const BookTable = ({ book }: IProps) => {

    return (
        <tr className="hover:bg-gray-900/10 w-fit">
            <Link to={`/books/${book._id}`}>
            
            <td className="px-4 py-2 border"><h4 className="font-semibold">{book.title}</h4></td>
            </Link>
            <td className="px-4 py-2 border">{book.author}</td>
            <td className="px-4 py-2 border">{book.genre}</td>
            <td className="px-4 py-2 border">{book.isbn}</td>
            <td className="px-4 py-2 border">{book.description}</td>
            <td className="px-4 py-2 border text-center">{book.copies}</td>
            <td className="px-4 py-2 border text-center">
                {book.copies ? <p className="">Available</p> : <p className="text-red-500">Unavailable</p>}
            </td>
            <td className="px-4 py-2 border text-center">
                <div className="flex flex-nowrap gap-4 items-center">

                    <EditBookModal id={book._id} />
                    {
                        book.copies? <BorrowBook id={book._id}/>: <Button className= "disable text-gray-500"
                 variant="link" title="Borrow book"><BookOpen /></Button>
                    }
                    
                    {/* <Link className="cursor-pointer" to={`/books/${book._id}`}>
                        <BookOpen className={cn("text-green-500",
                            book.copies === 0 && "text-red-500"
                        )} /></Link> */}
                    <DeleteModal id={book._id} />
                </div>
            </td>
        </tr>
    );
};

export default BookTable;