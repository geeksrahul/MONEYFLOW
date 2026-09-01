import { useEffect } from "react";

const Categories = () => {
    useEffect(()=>{
        document.title = "Categories | MoneyFlow";
    }, []);
    return (
        <section className="h-full p-6">

            {/* Page Header */}
            <div className="mb-6">
                <h1 className="text-2xl font-semibold text-gray-900">
                    Categories
                </h1>

                <p className="mt-1 text-sm text-gray-500">
                    Organize your income and expenses into categories.
                </p>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-[25%_1fr_1fr] gap-6">

                {/* Add Category */}
                <div className="rounded-xl border border-gray-200 bg-white p-5">

                    <h2 className="mb-5 text-lg font-semibold text-gray-900">
                        Add Category
                    </h2>

                    <form className="flex flex-col gap-4">

                        {/* Category Name */}
                        <div className="flex flex-col gap-1.5">
                            <label
                                htmlFor="category-name"
                                className="text-sm font-medium text-gray-700"
                            >
                                Category Name
                            </label>

                            <input
                                id="category-name"
                                type="text"
                                placeholder="e.g. Salary"
                                className="rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                            />
                        </div>

                        {/* Category Type */}
                        <div className="flex flex-col gap-1.5">
                            <label
                                htmlFor="category-type"
                                className="text-sm font-medium text-gray-700"
                            >
                                Type
                            </label>

                            <select
                                id="category-type"
                                className="rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                            >
                                <option value="">Select type</option>
                                <option value="income">Income</option>
                                <option value="expense">Expense</option>
                            </select>
                        </div>

                        {/* Button */}
                        <button
                            type="submit"
                            className="mt-2 rounded-lg bg-purple-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-purple-700"
                        >
                            Add Category
                        </button>

                    </form>
                </div>


                {/* Income Categories */}
                <div className="rounded-xl border border-gray-200 bg-white p-5">

                    <div className="mb-5">
                        <h2 className="text-lg font-semibold text-gray-900">
                            Income Categories
                        </h2>

                        <p className="mt-1 text-sm text-gray-500">
                            Your income sources
                        </p>
                    </div>

                    <div className="flex flex-col gap-3">

                        {/* Category Card */}
                        <div className="rounded-lg border border-gray-200 p-4">

                            <div className="flex items-start justify-between">
                                <div>
                                    <h3 className="font-medium text-gray-900">
                                        Salary
                                    </h3>

                                    <span className="mt-1 inline-block rounded-full bg-green-100 px-2.5 py-1 text-xs font-medium text-green-700">
                                        Income
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

                                <p className="mt-1 text-lg font-semibold text-green-600">
                                    ₹60,000
                                </p>
                            </div>

                        </div>


                        {/* Category Card */}
                        <div className="rounded-lg border border-gray-200 p-4">

                            <div className="flex items-start justify-between">
                                <div>
                                    <h3 className="font-medium text-gray-900">
                                        Freelance
                                    </h3>

                                    <span className="mt-1 inline-block rounded-full bg-green-100 px-2.5 py-1 text-xs font-medium text-green-700">
                                        Income
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

                                <p className="mt-1 text-lg font-semibold text-green-600">
                                    ₹18,500
                                </p>
                            </div>

                        </div>

                    </div>
                </div>


                {/* Expense Categories */}
                <div className="rounded-xl border border-gray-200 bg-white p-5">

                    <div className="mb-5">
                        <h2 className="text-lg font-semibold text-gray-900">
                            Expense Categories
                        </h2>

                        <p className="mt-1 text-sm text-gray-500">
                            Where your money goes
                        </p>
                    </div>

                    <div className="flex flex-col gap-3">

                        {/* Category Card */}
                        <div className="rounded-lg border border-gray-200 p-4">

                            <div className="flex items-start justify-between">
                                <div>
                                    <h3 className="font-medium text-gray-900">
                                        Food
                                    </h3>

                                    <span className="mt-1 inline-block rounded-full bg-red-100 px-2.5 py-1 text-xs font-medium text-red-700">
                                        Expense
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

                                <p className="mt-1 text-lg font-semibold text-red-600">
                                    ₹8,450
                                </p>
                            </div>

                        </div>


                        {/* Category Card */}
                        <div className="rounded-lg border border-gray-200 p-4">

                            <div className="flex items-start justify-between">
                                <div>
                                    <h3 className="font-medium text-gray-900">
                                        Shopping
                                    </h3>

                                    <span className="mt-1 inline-block rounded-full bg-red-100 px-2.5 py-1 text-xs font-medium text-red-700">
                                        Expense
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

                                <p className="mt-1 text-lg font-semibold text-red-600">
                                    ₹12,300
                                </p>
                            </div>

                        </div>


                        {/* Category Card */}
                        <div className="rounded-lg border border-gray-200 p-4">

                            <div className="flex items-start justify-between">
                                <div>
                                    <h3 className="font-medium text-gray-900">
                                        Transport
                                    </h3>

                                    <span className="mt-1 inline-block rounded-full bg-red-100 px-2.5 py-1 text-xs font-medium text-red-700">
                                        Expense
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

                                <p className="mt-1 text-lg font-semibold text-red-600">
                                    ₹4,200
                                </p>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default Categories;