import { useEffect } from "react";

const Expense = () => {

    useEffect(()=>{
        document.title = "Expenses | MoneyFlow";
    }, []);
    return (
        <section className="h-full p-2">

            {/* Page Header */}
            <div className="mb-6">
                <h1 className="text-2xl font-semibold text-gray-900">
                    Expenses
                </h1>

                <p className="mt-1 text-sm text-gray-500">
                    Manage your expenses and keep track of your spending.
                </p>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-[30%_1fr] gap-6">

                {/* Add Expense Form */}
                <div className="rounded-xl border border-gray-200 bg-white p-5">

                    <h2 className="mb-5 text-lg font-semibold text-gray-900">
                        Add Expense
                    </h2>

                    <form className="flex flex-col gap-4">

                        {/* Description */}
                        <div className="flex flex-col gap-1.5">
                            <label
                                htmlFor="description"
                                className="text-sm font-medium text-gray-700"
                            >
                                Description
                            </label>

                            <input
                                id="description"
                                type="text"
                                placeholder="e.g. Grocery shopping"
                                className="rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                            />
                        </div>

                        {/* Amount */}
                        <div className="flex flex-col gap-1.5">
                            <label
                                htmlFor="amount"
                                className="text-sm font-medium text-gray-700"
                            >
                                Amount
                            </label>

                            <input
                                id="amount"
                                type="number"
                                placeholder="₹ 0.00"
                                className="rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                            />
                        </div>

                        {/* Date */}
                        <div className="flex flex-col gap-1.5">
                            <label
                                htmlFor="date"
                                className="text-sm font-medium text-gray-700"
                            >
                                Date
                            </label>

                            <input
                                id="date"
                                type="date"
                                className="rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                            />
                        </div>

                        {/* Category */}
                        <div className="flex flex-col gap-1.5">
                            <label
                                htmlFor="category"
                                className="text-sm font-medium text-gray-700"
                            >
                                Category
                            </label>

                            <select
                                id="category"
                                className="rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                            >
                                <option value="">Select category</option>
                                <option value="food">Food</option>
                                <option value="shopping">Shopping</option>
                                <option value="transport">Transport</option>
                                <option value="bills">Bills</option>
                                <option value="entertainment">Entertainment</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        {/* Note */}
                        <div className="flex flex-col gap-1.5">
                            <label
                                htmlFor="note"
                                className="text-sm font-medium text-gray-700"
                            >
                                Note
                            </label>

                            <textarea
                                id="note"
                                rows="3"
                                placeholder="Optional note..."
                                className="resize-none rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                            />
                        </div>

                        <button
                            type="submit"
                            className="mt-2 rounded-lg bg-purple-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-purple-700"
                        >
                            Add Expense
                        </button>

                    </form>
                </div>

                {/* Expense Table */}
                <div className="rounded-xl border border-gray-200 bg-white p-5">

                    <div className="mb-5 flex items-center justify-between">
                        <h2 className="text-lg font-semibold text-gray-900">
                            Recent Expenses
                        </h2>

                        <button
                            type="button"
                            className="text-sm font-medium text-purple-600 hover:text-purple-700"
                        >
                            View All
                        </button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm">

                            <thead>
                                <tr className="border-b border-gray-200 text-xs uppercase text-gray-500">
                                    <th className="px-3 py-3 font-medium">
                                        Description
                                    </th>

                                    <th className="px-3 py-3 font-medium">
                                        Amount
                                    </th>

                                    <th className="px-3 py-3 font-medium">
                                        Date
                                    </th>

                                    <th className="px-3 py-3 font-medium">
                                        Category
                                    </th>
                                </tr>
                            </thead>

                            <tbody>

                                <tr className="border-b border-gray-100">
                                    <td className="px-3 py-4 font-medium text-gray-900">
                                        Grocery Shopping
                                    </td>

                                    <td className="px-3 py-4 font-medium text-red-600">
                                        ₹2,450
                                    </td>

                                    <td className="px-3 py-4 text-gray-500">
                                        01 Sep 2026
                                    </td>

                                    <td className="px-3 py-4">
                                        <span className="rounded-full bg-green-100 px-2.5 py-1 text-xs font-medium text-green-700">
                                            Food
                                        </span>
                                    </td>
                                </tr>

                                <tr className="border-b border-gray-100">
                                    <td className="px-3 py-4 font-medium text-gray-900">
                                        Electricity Bill
                                    </td>

                                    <td className="px-3 py-4 font-medium text-red-600">
                                        ₹1,850
                                    </td>

                                    <td className="px-3 py-4 text-gray-500">
                                        30 Aug 2026
                                    </td>

                                    <td className="px-3 py-4">
                                        <span className="rounded-full bg-blue-100 px-2.5 py-1 text-xs font-medium text-blue-700">
                                            Bills
                                        </span>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="px-3 py-4 font-medium text-gray-900">
                                        New Shoes
                                    </td>

                                    <td className="px-3 py-4 font-medium text-red-600">
                                        ₹3,200
                                    </td>

                                    <td className="px-3 py-4 text-gray-500">
                                        28 Aug 2026
                                    </td>

                                    <td className="px-3 py-4">
                                        <span className="rounded-full bg-orange-100 px-2.5 py-1 text-xs font-medium text-orange-700">
                                            Shopping
                                        </span>
                                    </td>
                                </tr>

                            </tbody>

                        </table>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Expense;