const CategoryCard = ({ category }) => {
    return (
        <div className="rounded-lg border border-gray-200 p-4">
            <div className="flex items-start justify-between">
                <div>
                    <h3 className="font-medium text-gray-900">
                        {category?.title}
                    </h3>

                    <span className={`mt-1 inline-block rounded-full  px-2.5 py-1 text-xs font-medium ${category?.type === 'income' ? 'text-green-700 bg-green-100' : 'text-red-700 bg-red-100'} `}>
                        {category?.type}
                    </span>
                </div>

                <button
                    type="button"
                    className="text-sm text-gray-400 hover:text-purple-600"
                >
                    Edit
                </button>
            </div>

            <div className="mt-4">
                <p className="text-xs text-gray-500">
                    This month
                </p>

                <p className={`mt-1 text-lg font-semibold ${category?.type === 'income' ? ' text-green-600' : 'text-red-600'}`}>
                    ₹60,000
                </p>
            </div>

        </div>
    );
}

export default CategoryCard;