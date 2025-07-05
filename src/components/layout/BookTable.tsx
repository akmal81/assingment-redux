import type { IBook } from "@/type";
import { EditBookModal } from "./EditBook";
import { DeleteModal } from "./DeleteModal";
import { BorrowBook } from "./BorrowBook";
import { Button } from "../ui/button";
import { BookOpen } from "lucide-react";
import { Link } from "react-router";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { toast } from "sonner";

interface IProps {
    book: IBook
}

const handleClick = ()=>{
    toast.error('Book is not available right now. please wait for return form other borrower')
}

const BookTable = ({ book }: IProps) => {

    return (
        <tr className="hover:bg-gray-900/10 w-fit">
            <td className="px-4 py-2 border text-center"><h4 className="font-semibold">{book.title}</h4>

                <Link to={`/books/${book._id}`}>
                    <Button variant="link" className="text-gray-400 hover:text-green-500" >

                        View Details
                    </Button>
                </Link>
            </td>
            <td className="px-4 py-2 border">{book.author}</td>
            <td className="px-4 py-2 border">{book.genre}</td>
            <td className="px-4 py-2 border">{book.isbn}</td>
            <td className="px-4 py-2 border">{book.description}</td>
            <td className="px-4 py-2 border text-center">{book.copies}</td>
            <td className="px-4 py-2 border text-center">
                {book.copies ? <p className="text-green-700">Available</p> : <p className="text-red-500 font-semibold">Unavailable</p>}
            </td>
            <td className="px-4 py-2 border text-center">
                <div className="flex flex-nowrap gap-4 items-center">

                    <Tooltip>
                        <TooltipTrigger>
                            <EditBookModal id={book._id} />
                        </TooltipTrigger>
                        <TooltipContent>
                            Edit Book
                        </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger>
                            {
                                book.copies ? <BorrowBook id={book._id} /> : <Button onClick={handleClick} className="disable text-gray-500"
                                    variant="link"><BookOpen /></Button>
                            }
                        </TooltipTrigger>
                        <TooltipContent>
                            Borrow Book
                        </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger>

                            <DeleteModal id={book._id} />

                        </TooltipTrigger>
                        <TooltipContent>
                            Delete Book
                        </TooltipContent>
                    </Tooltip>
                </div>
            </td>
        </tr>
    );
};

export default BookTable;