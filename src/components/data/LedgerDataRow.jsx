import AmountWrapper from "../AmountWrapper";

const LedgerDataRow = ({entry, children}) => {
    return (
        <tr className="border-b border-gray-100">
            <td className="px-3 py-4 text-gray-500">
                {entry.date}
            </td>

            <td className="px-3 py-4 font-medium text-gray-900">
                {entry.title}
            </td>

            <td className="px-3 py-4 text-gray-500">
                {entry.category}
            </td>

            <td className="px-3 py-4">
                <span className={`rounded-full  px-2.5 py-1 text-xs font-medium ${entry.type === "income" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"} `}>
                    {entry.type}
                </span>
            </td>

            <td className={`px-3 py-4 text-right font-medium ${entry.type === "income" ? "text-green-600" : "text-red-700" } `}>
                {`${entry.type === "income" ? '+' : '-'}`}<AmountWrapper amount={entry?.amount} />
            </td>

            <td className="px-3 py-4 text-right font-medium text-gray-900">
                <AmountWrapper amount={entry?.balance} />
            </td>
            {children}
        </tr>
    );
}

export default LedgerDataRow;