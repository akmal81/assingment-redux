import Spinner from "@/components/layout/Spinner";
import { Button } from "@/components/ui/button";
import { useGetBooksQuery } from "@/redux/api/baseApi";
import type { IBook } from "@/type";
import { Link } from "react-router";
import Banner from "@/components/layout/banner";
import { BookPlus, Grid2X2, Table2Icon } from "lucide-react";
import BookTable from "@/components/layout/BookTable";
import BookCard from "@/components/layout/BookCard";
import { useState } from "react";
import { cn } from "@/lib/utils";

const Books = () => {

    const [view, setView] = useState(false)
    const { data, isLoading, } = useGetBooksQuery(undefined)
    if (isLoading) {
        return <Spinner />
    }
    if (!data) {
        return <div className="min-h-screen max-w-screen flex items-center justify-center"><h1 className="font-bold text-5xl"> 404 No data found</h1></div>
    }
    return (
        <div className="pb-10">
            <Banner />
            <div className="flex items-center justify-between mt-24 px-2 lg:px-8">
                <div className="">
                    <h2 className="text-3xl font-bold">Popular Books</h2>
                </div>
                <div className="flex items-center justify-between gap-6">
                    <div className="flex flex-nowrap gap-1">
                        <button onClick={() => setView(!view)}
                            ><Table2Icon className={cn(
                            "text-gray-800 cursor-pointer",
                            !view && "text-green-500"
                        )} /></button>
                        <button onClick={() => setView(!view)}><Grid2X2 className={cn(
                            "text-gray-800 cursor-pointer",
                            view && "text-green-500"
                        )} /></button>
                    </div>
                    <Link to="/create-book">
                        <Button className="bg-green-500 text-black hover:bg-green-300"><BookPlus className="font-bold" />
                            Add Book</Button></Link>
                </div>
            </div>
        
            {!view ?
                <div className="px-10 mt-10">
                    <table className="table-auto w-full border-collapse border border-gray-700 text-sm text-left">
                        <thead className="bg-green-800/75 text-white">
                            <tr>
                                <th className="px-4 py-2 border">Title</th>
                                <th className="px-4 py-2 border">Author</th>
                                <th className="px-4 py-2 border">Genre</th>
                                <th className="px-4 py-2 border">ISBN</th>
                                <th className="px-4 py-2 border">Description</th>
                                <th className="px-4 py-2 border text-center">Copies</th>
                                <th className="px-4 py-2 border text-center">Status</th>
                                <th className="px-4 py-2 border text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                !isLoading &&
                                data.books.map((book: IBook) => <BookTable book={book} key={book._id}></BookTable>)
                            }
                        </tbody>
                    </table>
                </div>
                :
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-8 lg:px-8">
                    {
                        !isLoading &&
                        data.books.map((book: IBook) => <BookCard book={book} key={book._id}></BookCard>)
                    }
                </div>
            }
        </div>
    );
};

export default Books;