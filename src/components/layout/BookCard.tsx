import type { IBook } from "@/type";

import cover1 from "../../assets/images/book1.jpg";
import cover2 from "../../assets/images/book2.jpg";
import cover3 from "../../assets/images/book3.jpg";
import cover4 from "../../assets/images/book4.jpg";
import { EditBookModal } from "./EditBook";
import { Link } from "react-router";
import { BookOpen } from "lucide-react";
import { DeleteModal } from "./DeleteModal";


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
                {/* <p className="text-center"><span className="font-normal text-gray-600"></span>  {
                    !book.copies ? "Unavailable":"Availale"
                }</p> */}

                {
                    !book.copies ? <p className="text-center pb-4 text-red-700">Unavailable</p> : <p className="text-center pb-4 text-green-700">Available</p>
                }
            </div>
            <div className="flex justify-between items-center px-2 border-t-2 py-2">
                <button className="cursor-pointer">
                    <EditBookModal id={book._id} />
                </button>
                <Link to={`/books/${book._id}`}><BookOpen className="text-xs" /></Link>
                <DeleteModal id={book._id} />
            </div>
        </div>
    );
};

export default BookCard;