import Spinner from "@/components/layout/Spinner";
import { Button } from "@/components/ui/button";
import { useGetBooksQuery } from "@/redux/api/baseApi";
import type { IBook } from "@/type";
import { Link } from "react-router";

import Banner from "@/components/layout/banner";
import { BookPlus } from "lucide-react";
import BookCard from "@/components/layout/BookCard";

const Books = () => {

    const { data, isLoading, } = useGetBooksQuery(undefined)

    if (isLoading) {
        return <Spinner />
    }

    if (!data) {
        return <h1>No data found</h1>
    }
    return (
        <div>
            <Banner />
            <div className="flex items-center justify-between mt-24 px-2 lg:px-8">
                <div className="">
                    <h2 className="text-3xl font-bold">Popular Books</h2>
                </div>
                <div className="flex items-center justify-between"> 
                    <Link to="/create-book">
                    <Button className="bg-green-600"><BookPlus className="font-bold" />Add Book</Button></Link>
                </div>
            </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 lg:px-8">
                    {
                        !isLoading &&
                        data.books.map((book: IBook) => <BookCard book={book} key={book._id}></BookCard>)
                    }
                        
                </div>


        </div>
    );
};

export default Books;