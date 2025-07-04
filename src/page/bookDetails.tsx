import { BorrowBook } from "@/components/layout/BorrowBook";
import Spinner from "@/components/layout/Spinner";

import { useGetSingleBookQuery } from "@/redux/api/baseApi";
import { ArrowBigLeft } from "lucide-react";

import { Link, useParams } from "react-router";


const BookDetails = () => {

    const { id } = useParams() as { id: string };
    const { data, isLoading } = useGetSingleBookQuery(id as string);

    
    const bookData = data.book;
   

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
                    {bookData?.title}
                </div>
                <div className="border px-4 py-4 rounded-lg">
                    {bookData?.author}
                </div>
                <div className="border px-4 py-4 rounded-lg">
                    {bookData?.description}
                </div>
                <div className="border px-4 py-4 rounded-lg">
                    {bookData?.genre}
                </div>
                <div className="border px-4 py-4 rounded-lg">
                    {bookData?.isbn}
                </div>
                <div className="border px-4 py-4 rounded-lg">
                    {
                        bookData?.copies ? "Available" : "Unavailable"
                    }
                </div>
                {
                    !bookData?.copies && <Link to="/books"><ArrowBigLeft/> </Link>
                }
                {
                    !bookData?.copies ? "Please wait return from other bowrror" :
                        <BorrowBook id={id} />
                }
            </div>
        </>
    );
};

export default BookDetails;