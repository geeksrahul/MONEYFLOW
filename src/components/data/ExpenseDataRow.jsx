const ExpenseDataRow = ({data}) => {
    return (
        <tr className="border-b border-gray-100">
            <td className="px-3 py-4 font-medium text-gray-900">
                {data?.title}
            </td>

            <td className="px-3 py-4 font-medium text-red-600">
                ₹{data?.amount}
            </td>

            <td className="px-3 py-4 text-gray-500">
                {data?.date}
            </td>

            <td className="px-3 py-4">
                <span className="rounded-full bg-green-100 px-2.5 py-1 text-xs font-medium text-green-700">
                    {data?.category}
                </span>
            </td>
        </tr>
    );
}

export default ExpenseDataRow;