const TransactionRow = ({data}) => {
    return (
          <tr className="border-b border-gray-100">
            <td className="px-3 py-4 font-medium text-gray-900">
                {data?.title}
            </td>

            <td className={`px-3 py-4 font-medium ${data?.type === "ïncome" ? "text-green-600" : "text-red-600"} `}>
                ₹{data?.amount}
            </td>

            <td className="px-3 py-4 text-gray-500">
                {data?.date}
            </td>

            <td className="px-3 py-4">
                <span className={`rounded-full  px-2.5 py-1 text-xs font-medium  ${data?.type==="income"?"bg-green-100 text-green-700":"bg-red-100 text-red-700"}`}>
                    {data?.category}
                </span>
            </td>
        </tr>
    )
}

export default TransactionRow;