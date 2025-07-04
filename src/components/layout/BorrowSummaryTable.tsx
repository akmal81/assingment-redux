import type { ISummary } from "@/type";

interface IProps {
    summary: ISummary
}
const BorrowSummaryTable = ({ summary }: IProps) => {
    console.log(summary)
    return (
        <tr >
            <td className="py-2 px-4 border-b">
                <p>

                {summary.book.title}
                </p>
            </td>
            <td className="py-2 px-4 border-b">
                {summary.book.isbn}
            </td>
            <td className="py-2 px-4 border-b">
                {summary.totalQuantity}
            </td>
        </tr>
    );
};

export default BorrowSummaryTable;