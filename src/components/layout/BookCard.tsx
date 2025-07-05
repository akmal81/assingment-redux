import type { IBook } from "@/type";

import cover1 from "../../assets/images/book1.jpg";
import cover2 from "../../assets/images/book2.jpg";
import cover3 from "../../assets/images/book3.jpg";
import cover4 from "../../assets/images/book4.jpg";
import { EditBookModal } from "./EditBook";
import { Link } from "react-router";
import { BookOpen } from "lucide-react";
import { DeleteModal } from "./DeleteModal";

import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { BorrowBook } from "./BorrowBook";
import { Button } from "../ui/button";
import { toast } from "sonner";


interface IProps {
    book: IBook
}
const BookCard = ({ book }: IProps) => {

    const coverImages = [
        cover1,
        cover2,
        cover3,
        cover4
    ]

    const randomIndex = Math.floor(Math.random() * coverImages.length);
    const image = coverImages[randomIndex]
    const handleClick = () => {
        toast.error('Book is not available right now. please wait for return form other borrower')
    }

    return (
        <div className="mt-4 p-2 rounded-md shadow-xl">
            <Link to={`/books/${book._id}`}>
                <img src={image} />
            </Link>
            <div className="mt-4 flex flex-col flex-grow  space-y-3">
                <h4 className="font-semibold text-xl text-center">
                    {book.title}
                </h4>
                <p className="text-center"><span className="font-normal text-gray-500">Author:</span>  {book.author}</p>
                <p className="text-center"><span className="font-normal text-gray-400">Genre:</span>  {book.genre}</p>
                <p className="text-center"><span className="font-normal text-gray-500">Isbn:</span>  {book.author}</p>
                <p className="text-center"><span className="font-normal text-gray-500">Copies:</span>  {book.copies}</p>
                {
                    !book.copies ? <p className="text-center pb-4 text-red-700">Unavailable</p> : <p className="text-center pb-4 text-green-700">Available</p>
                }
            </div>
            <div className="flex items-center justify-center">
                <Link to={`/books/${book._id}`}>
                    <Button variant="link" className="text-gray-400 text-center hover:text-green-500" >

                        View Details
                    </Button>
                </Link>
            </div>
            <div className="flex justify-between items-center px-2 border-t-2 py-2">

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
        </div>
    );
};

export default BookCard;