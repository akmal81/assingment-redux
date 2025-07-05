import BorrowSummaryTable from "@/components/layout/BorrowSummaryTable";
import OtherBanner from "@/components/layout/OtherBanner";
import Spinner from "@/components/layout/Spinner";
import { useGetBorrowSummaryQuery } from "@/redux/api/baseApi";
import type { ISummary } from "@/type";


const BorrowSummary = () => {
    const { data, isLoading } = useGetBorrowSummaryQuery(undefined)

    if (isLoading) {
        return <Spinner />
    }
    console.log(data.summary)
    return (
        <div className="">
            <OtherBanner level="Borrow Summary"/>

            <div className="p-10">

            <table className="min-w-full mt-10">
                <thead className="bg-black/10 rounded-t-md">
                    <tr>
                        <th className="py-2 px-4 border-b text-left">Book Title</th>
                        <th className="py-2 px-4 border-b text-left">ISBN</th>
                        <th className="py-2 px-4  border-b text-center">Total Quantity Borrowed</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        !isLoading && data.summary.map((summary: ISummary) => <BorrowSummaryTable summary={summary} />)
                    }
                </tbody>

            </table>
</div>

        </div>
    );
};

export default BorrowSummary;