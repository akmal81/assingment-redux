
import type { IBook } from '@/type'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { b } from 'node_modules/react-router/dist/development/lib-B33EY9A0.d.mts';

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api' }),
    tagTypes: ["book"],
    endpoints: (builder) => (
        {
            getBooks: builder.query({
                query: () => "books",
                providesTags: ["book"]
            }),
            createBook: builder.mutation({
                query: (bookData) => ({
                    url: "/books",
                    method: "POST",
                    body: bookData
                }),
                invalidatesTags: ["book"]
            }),
            // get single book

            getSingleBook: builder.query<IBook, string>({
                query: (id) => `/books/${id}`,
                transformResponse:(response:{success:boolean; data:IBook}) => response.data
            }),

            // editbook
            editBook: builder.mutation({
                query: ({ _id, ...bookData }) => ({
                    url: `/books/${_id}`,
                    method: 'PUT',
                    body: bookData,
                }),
                invalidatesTags: ["book"]
            }),


            updateBook: builder.mutation({
                query: ({ id, data }) => ({
                    url: `/books/${id}`,
                    method: "PUT",
                    body: data,
                }),
                invalidatesTags: ["book"],
            }),


        }
    )
})

export const {
    useGetBooksQuery,
    useCreateBookMutation,
    useEditBookMutation,
    useGetSingleBookQuery,
    useUpdateBookMutation
} = baseApi