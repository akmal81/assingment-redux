import BookTable from "@/components/layout/BookTable";
import Spinner from "@/components/layout/Spinner";
import { Button } from "@/components/ui/button";
import { useGetBooksQuery } from "@/redux/api/baseApi";
import type { IBook } from "@/type";
import { Link } from "react-router";

const Books = () => {

    const { data, isLoading, } = useGetBooksQuery(undefined)
    console.log(data)

    if (isLoading) {
        return <Spinner />
    }

    if (!data) {
        return <h1>No data found</h1>
    }
    return (
        <div className="overflow-x-auto">
            <div className="flex justify-end mt-4 mb-4"> <Link to="/create-book"><Button>Add Book</Button></Link></div>
            <table className="min-w-full border border-gray-300 text-sm text-left">
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
            </table>
        </div>
    );
};

export default Books;