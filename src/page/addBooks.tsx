
"use client"

// import { zodResolver } from "@hookform/resolvers/zod"
// import { useForm } from "react-hook-form"
// import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { Input } from "@/components/ui/input"
import { useForm, type SubmitHandler } from "react-hook-form"
import type { IBook } from "@/type"
import { useCreateBookMutation } from "@/redux/api/baseApi"
// import { toast } from "sonner"
// import Spinner from "@/components/layout/Spinner"
import { toast } from "sonner"
import { useNavigate } from "react-router"
import OtherBanner from "@/components/layout/OtherBanner"


// const formSchema = z.object({
//   username: z.string().min(2, {
//     message: "Username must be at least 2 characters.",
//   }),
// })

const AddBook = () => {
    const navigate = useNavigate()

    const form = useForm<IBook>({
        defaultValues: {
            title: "",
            author: "",
            genre: "",
            isbn: "",
            description: "",
            copies: 0,
            available: true
        }
    });

    const [createBook] = useCreateBookMutation();


    const onSubmit: SubmitHandler<IBook> = async (data) => {

        const bookData = {
            ...data,
            available: true
        };
        await createBook(bookData).unwrap();
        toast.success("Book Created Successfully ✅")
        form.reset();
        navigate("/books")
    }

    return (
        <>
        <OtherBanner level="Add Book"/>
      
        <div className="max-w-4xl mx-auto  bg-gray-500/5 p-10 md:mt-24  rounded-xl shadow-xl">
            <p className="mb-4 text-xs"> Fields marked with <span className="text-red-500">*</span> are required</p>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    {/* first row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* title */}

                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Book Title <span className="text-red-500">*</span></FormLabel>
                                    <FormControl>
                                        <Input placeholder="Book Title" {...field} value={field.value || ""} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* author */}
                        <FormField
                            control={form.control}
                            name="author"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Author<span className="text-red-500">*</span></FormLabel>
                                    <FormControl>
                                        <Input placeholder="auther" {...field} value={field.value || ""} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    {/* 2nd row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* genre */}

                        <FormField

                            control={form.control}
                            name="genre"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Genre<span className="text-red-500">*</span></FormLabel>
                                    <Select onValueChange={field.onChange}>
                                        <FormControl>
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Select a verified email to display" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="FICTION">FICTION</SelectItem>
                                            <SelectItem value="NON_FICTION">NON_FICTION</SelectItem>
                                            <SelectItem value="SCIENCE">SCIENCE</SelectItem>
                                            <SelectItem value="HISTORY">HISTORY</SelectItem>
                                            <SelectItem value="BIOGRAPHY">BIOGRAPHY</SelectItem>
                                            <SelectItem value="FANTASY">FANTASY</SelectItem>
                                        </SelectContent>
                                    </Select>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        {/* isbn */}
                        <FormField
                            control={form.control}
                            name="isbn"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Isbn<span className="text-red-500">*</span><span className="text-red-500 text-xs">(isbn should be Unique)</span></FormLabel>
                                    <FormControl>
                                        <Input placeholder="Isbn number" {...field} value={field.value || ""} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    {/* 3 row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* description */}
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Description<span className="text-red-500">*</span></FormLabel>
                                    <FormControl>
                                        <Input placeholder="Book description" {...field} value={field.value || ""} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        {/* copies */}
                        <FormField
                            control={form.control}
                            name="copies"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Copies<span className="text-red-500">*</span></FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Book Copies"
                                            {...field}
                                            onChange={(e) => field.onChange(parseInt(e.target.value) || 0)}
                                        // value={parseInt(field.value) || 0}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
            
                    <Button className="bg-green-500 hover:bg-green-300 text-black w-full" type="submit">Add</Button>
                </form>
            </Form>
        </div>
        
        </>
    )
};

export default AddBook