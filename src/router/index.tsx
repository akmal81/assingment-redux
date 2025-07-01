import App from "@/App";
import addBooks from "@/page/addBooks";
import Books from "@/page/books";
import borrowSummary from "@/page/borrowSummary";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
    {
        path:'/',
        Component:App,
        children:[
            {
                index:true,
                Component:Books
            },
            {
                path:'books',
                Component:Books
            },
            {
                path:'add-book',
                Component:addBooks
            },
            {
                path:'borrow-summary',
                Component:borrowSummary
            },
        ]
    }
])

export default router