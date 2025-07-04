import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useCreateBorrowMutation } from "@/redux/api/baseApi"

import { BookOpen, ChevronDownIcon } from "lucide-react"

import type React from "react"
import { useState } from "react"
import { useNavigate } from "react-router"
import { toast } from "sonner"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"

import { Calendar } from "../ui/calendar"

interface IProps {
    id: string
}

export function BorrowBook({ id }: IProps) {
    const [openModal, setOpenModal] = useState(false);
    const navigate = useNavigate();
    const [open, setOpen] = useState(false)
    const [date, setDate] = useState<Date | undefined>(undefined)


    const [createBorrow] = useCreateBorrowMutation()

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget)

        const borrowData = {
            book: id,
            quantity: formData.get("quantity"),
            dueDate: date?.toISOString().replace("Z", "+00:00")
        }
        console.log(borrowData)

        try {
            await createBorrow(borrowData).unwrap();
            toast.success("Book Created Successfully ✅");
            setOpenModal(false);
            navigate("/books");

        } catch (error) {
            console.log(error)
        }


    }

    return (
        <Dialog open={openModal} onOpenChange={setOpenModal}>
            <DialogTrigger asChild>
                <Button variant="outline">Borrow Book <BookOpen /></Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when you&apos;re
                        done.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit}>
                    <div className="grid gap-4">
                        {/* <div className="grid gap-3">
                            <Label>Book Id</Label>
                            <Input name="bookId" defaultValue={id}  disabled value={id} />
                        </div> */}
                        <div className="grid gap-3">
                            <Label >Quantity</Label>
                            <Input name="quantity" />
                        </div>
                        <div className="grid gap-3">
                            <Label >Due Date</Label>
                           

                            <div className="grid gap-3">
                                <Popover open={open} onOpenChange={setOpen}>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant="outline"
                                            id="dueDate"
                                            className=" mb-10 justify-between font-normal"
                                        >
                                            {date ? date.toLocaleDateString() : "Select date"}
                                            <ChevronDownIcon />
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                                        <Calendar
                                            mode="single"
                                            // selected={new Date()}
                                            captionLayout="dropdown"
                                            onSelect={(date) => {
                                                setDate(date)
                                                setOpen(false)
                                            }}
                                            initialFocus
                                            disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                                        />
                                    </PopoverContent>
                                </Popover>
                            </div>


                        </div>
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <Button type="submit">Borrow</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}
