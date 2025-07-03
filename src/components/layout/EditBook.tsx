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
import { useEffect } from "react";
import { toast } from "sonner";
import { Pencil } from "lucide-react";

interface IProps {
  id: string;
}

const EditBookModal = ({ id }: IProps) => {
  const { data: book, isLoading } = useGetSingleBookQuery(id);
  const [updateBook, { isLoading: isUpdating }] = useUpdateBookMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
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
    } catch (error) {
      toast.error("Failed to update book");
    }
  };

  return (
    <Dialog>
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
            <Input {...register("title", { required: true })} placeholder="Title" />
            <Input {...register("author", { required: true })} placeholder="Author" />
            <Input {...register("genre", { required: true })} placeholder="Genre" />
            <Input {...register("isbn", { required: true })} placeholder="ISBN" />
            <Input {...register("description", { required: true })} placeholder="Description" />
            <Input
              type="number"
              {...register("copies", { required: true, valueAsNumber: true })}
              placeholder="Copies"
            />
            <DialogFooter>
              <Button type="submit" disabled={isUpdating}>
                {isUpdating ? "Updating..." : "Save Changes"}
              </Button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export { EditBookModal };

