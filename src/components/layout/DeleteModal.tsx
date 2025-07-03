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
                <Button variant="destructive"><Trash2 /></Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Share link</DialogTitle>
                    <DialogDescription>
                        Are you sure you want to delete the book forever
                    </DialogDescription>
                </DialogHeader>

                <DialogFooter className="sm:justify-start">
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
