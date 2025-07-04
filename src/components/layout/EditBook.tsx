import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useGetSingleBookQuery, useUpdateBookMutation } from "@/redux/api/baseApi";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Pencil } from "lucide-react";

interface IProps {
  id: string;
}

const EditBookModal = ({ id }: IProps) => {
  const [openModal, setOpenModal] = useState(false)
  const { data: book, isLoading } = useGetSingleBookQuery(id);
  const [updateBook, { isLoading: isUpdating }] = useUpdateBookMutation();

  const {
    register,
    handleSubmit,
    reset,
    // formState: { errors },
  } = useForm();

  useEffect(() => {
    if (book) {
      reset(book);
    }
  }, [book, reset]);

  const onSubmit = async (formData: any) => {
    try {
      await updateBook({ id, data: formData }).unwrap();
      toast.success("Book updated successfully");
      setOpenModal(false)
    } catch (error) {
      toast.error("Failed to update book");
    }
  };

  return (
    <Dialog open={openModal} onOpenChange={setOpenModal}>
      <DialogTrigger asChild>
        <Button variant="link" title="Edit Book">
          <Pencil />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Edit Book</DialogTitle>
          <DialogDescription>Update the book details below.</DialogDescription>
        </DialogHeader>

        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
            <label>Title</label>
            <Input {...register("title", { required: true })} placeholder="Title" />
            <label>Author</label>
            <Input {...register("author", { required: true })} placeholder="Author" />
            {/* <Input {...register("genre", { required: true })} placeholder="Genre" /> */}
            <label>Genre</label>
            <select
            {...register("genre", {required:true})}
            defaultValue="" className="border px-3 py-2 rounded-md w-full text-sm bg-gray-500/10"
            >
              <option value="" disabled className="text-black">Select genre</option>
              <option value="FICTION"  className="text-black">FICTION</option>
              <option value="NON_FICTION" className="text-black">NON_FICTION</option>
              <option value="SCIENCE" className="text-black">SCIENCE</option>
              <option value="HISTORY" className="text-black">HISTORY</option>
              <option value="BIOGRAPHY" className="text-black">BIOGRAPHY</option>
              <option value="FANTASY" className="text-black">FANTASY</option>

            </select>

              <label>Isbn</label>

            <Input {...register("isbn", { required: true })} placeholder="ISBN" />
              <label>Description</label>
            <Input {...register("description", { required: true })} placeholder="Description" />
              <label>Copies</label>
            <Input
              type="number"
              {...register("copies", { required: true, valueAsNumber: true })}
              placeholder="Copies"
            />
            <DialogFooter>
              <Button type="submit" disabled={isUpdating}>
                {isUpdating ? "Updating..." : "Udate Book"}
              </Button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export { EditBookModal };

