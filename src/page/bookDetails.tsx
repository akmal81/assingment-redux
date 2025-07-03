import { BorrowBook } from "@/components/layout/BorrowBook";
import Spinner from "@/components/layout/Spinner";

import { useGetSingleBookQuery } from "@/redux/api/baseApi";
import { ArrowBigLeft } from "lucide-react";

import { Link, useParams } from "react-router";


const BookDetails = () => {

    const { id } = useParams() as { id: string };
    const { data: book, isLoading } = useGetSingleBookQuery(id as string);

    if (isLoading) {
        return <Spinner />
    }



    return (
        <>
            <div>
                <h1>Book details</h1>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
                <div className="border px-4 py-4 rounded-lg">
                    {book?.title}
                </div>
                <div className="border px-4 py-4 rounded-lg">
                    {book?.author}
                </div>
                <div className="border px-4 py-4 rounded-lg">
                    {book?.description}
                </div>
                <div className="border px-4 py-4 rounded-lg">
                    {book?.genre}
                </div>
                <div className="border px-4 py-4 rounded-lg">
                    {book?.isbn}
                </div>
                <div className="border px-4 py-4 rounded-lg">
                    {
                        book?.copies ? "Available" : "Unavailable"
                    }
                </div>
                {
                    !book?.copies && <Link to="/books"><ArrowBigLeft/> </Link>
                }
                {
                    !book?.copies ? "Please wait return from other bowrror" :
                        <BorrowBook id={id} />
                }
            </div>
        </>
    );
};

export default BookDetails;