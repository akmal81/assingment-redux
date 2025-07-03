import Spinner from "@/components/layout/Spinner";
import { useGetSingleBookQuery } from "@/redux/api/baseApi";
import { useParams } from "react-router";


const BookDetails = () => {

    const {id}=useParams();
    const { data, isLoading} = useGetSingleBookQuery(id as string);

    if(isLoading){
        return <Spinner/>
    }
console.log(data)
    

    return (
        <div>
            Book {data?.title} details
        </div>
    );
};

export default BookDetails;