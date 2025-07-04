import BookTable from "@/components/layout/BookTable";
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
            {/* <table className="min-w-full border border-gray-300 text-sm text-left">
                <thead >
                    <tr>
                        <th className="px-4 py-2 border">Title</th>
                        <th className="px-4 py-2 border">Author</th>
                        <th className="px-4 py-2 border">Genre</th>
                        <th className="px-4 py-2 border">ISBN</th>
                        <th className="px-4 py-2 border">Description</th>
                        <th className="px-4 py-2 border">Copies</th>
                        <th className="px-4 py-2 border">Available</th>
                        <th className="px-4 py-2 border">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        !isLoading &&
                        data.books.map((book: IBook) => <BookTable book={book} key={book._id}></BookTable>)
                    }
                </tbody>
            </table> */}

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 lg:px-8">
                    {/* <div>book1</div>
                    <div>book2</div>
                    <div>book3</div>
                    <div>book4</div> */}
                    {
                        !isLoading &&
                        data.books.map((book: IBook) => <BookCard book={book} key={book._id}></BookCard>)
                    }
                        
                </div>


        </div>
    );
};

export default Books;