
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const baseApi = createApi({
    reducerPath: 'baseApi',
    // baseQuery: fetchBaseQuery({ baseUrl: 'https://assignment-mongodb.vercel.app/api' }),
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api' }),
    tagTypes: ["book", "borrow", "borrowSummary"],
    endpoints: (builder) => (
        {
            getBooks: builder.query({
                query: () => "books",
                providesTags: ["book", "borrow"]
            }),
            createBook: builder.mutation({
                query: (bookData) => ({
                    url: "/books",
                    method: "POST",
                    body: bookData
                }),
                invalidatesTags: ["book"]
            }),
            // borrow a book
            createBorrow: builder.mutation({
                query: (borrowData) => ({
                    url: "/borrow",
                    method: "POST",
                    body: borrowData
                }),
                invalidatesTags: ["borrow", "borrowSummary"]
            }),
            // borrow summary
            getBorrowSummary: builder.query({
                query: () => "borrow",
                providesTags: ["borrowSummary"]
            }),

            // get single book

            getSingleBook: builder.query({
                query: (id) => `/books/${id}`
            }),

            // editbook
            editBook: builder.mutation({
                query: ({ _id, ...bookData }) => ({
                    url: `/books/${_id}`,
                    method: 'PUT',
                    body: bookData,
                }),
                invalidatesTags: ["book",]
            }),


            updateBook: builder.mutation({
                query: ({ id, data }) => ({
                    url: `/books/${id}`,
                    method: "PUT",
                    body: data,
                }),
                invalidatesTags: ["book"],
            }),

            deleteBook: builder.mutation({
                query: ({ id }) => ({
                    url: `/books/${id}`,
                    method: "DELETE",

                }),
                invalidatesTags: ["book","borrowSummary"],
            }),




        }
    )
})

export const {
    useGetBooksQuery,
    useCreateBookMutation,
    useEditBookMutation,
    useGetSingleBookQuery,
    useUpdateBookMutation,
    useCreateBorrowMutation,
    useDeleteBookMutation,
    useGetBorrowSummaryQuery,
} = baseApi