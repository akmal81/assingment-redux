import type { ISummary } from "@/type";

interface IProps {
    summary: ISummary
}
const BorrowSummaryTable = ({ summary }: IProps) => {
    return (
        <tr >
            <td className="py-2 px-4 border-b font-semibold">
                <p>
                {summary.book.title}
                </p>
            </td>
            <td className="py-2 px-4 border-b">
                {summary.book.isbn}
            </td>
            <td className="py-2 px-4 border-b font-semibold">
              <p className="text-center"> {summary.totalQuantity}</p> 
            </td>
        </tr>
    );
};

export default BorrowSummaryTable;