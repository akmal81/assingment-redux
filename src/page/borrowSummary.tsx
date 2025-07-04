import BorrowSummaryTable from "@/components/layout/BorrowSummaryTable";
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
        <div className="mt-10">
            <h1>Borrow Summary</h1>

            <table className="min-w-full mt-6">
                <thead >
                    <tr>
                        <th className="py-2 px-4 text-left border-b">Book Title</th>
                        <th className="py-2 px-4 text-left border-b">ISBN</th>
                        <th className="py-2 px-4 text-left border-b">Total Quantity Borrowed</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        !isLoading && data.summary.map((summary: ISummary) => <BorrowSummaryTable summary={summary} />)
                    }
                </tbody>

            </table>


        </div>
    );
};

export default BorrowSummary;