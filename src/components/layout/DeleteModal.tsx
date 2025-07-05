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
import { useDeleteBookMutation } from "@/redux/api/baseApi"
import { Trash2 } from "lucide-react"
import { toast } from "sonner"

interface IProps {
    id: string
}

export function DeleteModal({ id }: IProps) {

    const [deleteBook] = useDeleteBookMutation()

    const handleDelete = async () => {
        try {
            await deleteBook({ id }).unwrap();
            toast.success("book delete success full")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="bg-white/0 hover:bg-white/0 cursor-pointer" title="Delete"><Trash2 className="text-red-700" /></Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle className="text-red-800"> <Trash2/></DialogTitle>
                    <DialogDescription>
                        Are You Sure!! <span className="text-">Once you press delete button the book will remove permanently</span> 
                    </DialogDescription>

                </DialogHeader>

                <DialogFooter className="sm:justify-end">
                    <DialogClose asChild>

                        <Button variant="secondary" type="button">
                            Cancel
                        </Button>
                    </DialogClose>
                    <DialogClose asChild>

                        <Button variant="destructive" onClick={handleDelete} type="button">
                            Delete
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
