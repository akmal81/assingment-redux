import { BorrowBook } from "@/components/layout/BorrowBook";
import OtherBanner from "@/components/layout/OtherBanner";
import Spinner from "@/components/layout/Spinner";
import { Button } from "@/components/ui/button";
import { useGetSingleBookQuery } from "@/redux/api/baseApi";
import { Link, useParams } from "react-router";
import cover1 from "../assets/images/book1.jpg"
import cover2 from "../assets/images/book2.jpg"
import cover3 from "../assets/images/book3.jpg"
import cover4 from "../assets/images/book4.jpg"

const BookDetails = () => {
    const { id } = useParams() as { id: string };
    const { data, isLoading } = useGetSingleBookQuery(id as string);
    const bookData = data.book;
    if (isLoading) {
        return <Spinner />
    }


const coverImages = [
        cover1,
        cover2,
        cover3,
        cover4
    ]

    const randomIndex = Math.floor(Math.random() * coverImages.length);
    const image = coverImages[randomIndex]


    return (
        <>
            <div>
                <OtherBanner  level="Book Details"/>
                <div className="grid grid-cols-2  gap-10 mt-24 py-10 px-10">
                    <div>
                            <img className="object-fill" src={image}/>
                    </div>
                    <div className="space-y-3">
                        <h1 className="text-2xl font-semibold">{bookData?.title} </h1>
                        <p className=""><span className="">Author: </span>{bookData?.author}</p>
                        <p className=""><span className="">Description: </span>{bookData?.description} </p>
                        <p className=""><span className="">Genre: </span>{bookData?.genre} </p>
                        <p className=""><span className="">Isbn: </span>{bookData?.isbn}</p>
                        <p className=""><span className="">Copies: </span>{bookData?.copies}</p>
                        {
                            bookData?.copies ? <p>Availalbe</p> : <p className="text-red-700">Unavailalbe</p>
                        }
                        {
                            !bookData?.copies ? <p className="">Please wait return from other bowrror</p> :
                                <div className="flex items-center"><BorrowBook id={id} /> <p  className="text-green-500">Borrow Book</p></div>
                        }
                        <div className="">
                            {
                                !bookData?.copies && <Link to="/books" className="">
                                    <Button variant="link" >Back to Home</Button></Link>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookDetails;