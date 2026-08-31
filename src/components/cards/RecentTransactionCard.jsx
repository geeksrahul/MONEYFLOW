const RecentTransactionCard = ({
    category,
    time,
    amount,
    spend=true
}) => {
    return (
        <div className="flex items-center justify-between">
            <div>
            <p className="text-sm font-medium text-gray-900">
                {category}
            </p>
            <p className="text-xs text-gray-500">
                {time}
            </p>
            </div>
            <span className={`text-sm font-medium ${spend ? 'text-red-500' : 'text-green-500'}`}>
                {`${spend ? '-' : '+'} ${amount}`}
            </span>
        </div>
    );
} 

export default RecentTransactionCard