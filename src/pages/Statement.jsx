import { useEffect } from "react";

const Statements = () => {
    
    useEffect(()=>{
        document.title = "Statements | MoneyFlow";
    }, []);
    return (
        <section className="h-full p-6">

            {/* Page Header */}
            <div className="mb-6 flex items-start justify-between">
                <div>
                    <h1 className="text-2xl font-semibold text-gray-900">
                        Statements
                    </h1>

                    <p className="mt-1 text-sm text-gray-500">
                        View your complete income and expense statement.
                    </p>
                </div>

                <button
                    type="button"
                    className="rounded-lg bg-purple-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-purple-700"
                >
                    Export PDF
                </button>
            </div>


            {/* Filters */}
            <div className="mb-6 rounded-xl border border-gray-200 bg-white p-5">

                <div className="mb-4">
                    <h2 className="text-lg font-semibold text-gray-900">
                        Filter Statement
                    </h2>
                </div>

                <div className="grid grid-cols-4 gap-4">

                    {/* From Date */}
                    <div className="flex flex-col gap-1.5">
                        <label
                            htmlFor="from-date"
                            className="text-sm font-medium text-gray-700"
                        >
                            From
                        </label>

                        <input
                            id="from-date"
                            type="date"
                            className="rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                        />
                    </div>


                    {/* To Date */}
                    <div className="flex flex-col gap-1.5">
                        <label
                            htmlFor="to-date"
                            className="text-sm font-medium text-gray-700"
                        >
                            To
                        </label>

                        <input
                            id="to-date"
                            type="date"
                            className="rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                        />
                    </div>


                    {/* Type */}
                    <div className="flex flex-col gap-1.5">
                        <label
                            htmlFor="type"
                            className="text-sm font-medium text-gray-700"
                        >
                            Type
                        </label>

                        <select
                            id="type"
                            className="rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                        >
                            <option value="all">All</option>
                            <option value="income">Income</option>
                            <option value="expense">Expense</option>
                        </select>
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
                            <option value="all">All Categories</option>
                            <option value="salary">Salary</option>
                            <option value="freelance">Freelance</option>
                            <option value="food">Food</option>
                            <option value="shopping">Shopping</option>
                            <option value="transport">Transport</option>
                        </select>
                    </div>

                </div>
            </div>


            {/* Statement */}
            <div className="rounded-xl border border-gray-200 bg-white p-5">

                <div className="mb-5 flex items-center justify-between">

                    <div>
                        <h2 className="text-lg font-semibold text-gray-900">
                            Account Statement
                        </h2>

                        <p className="mt-1 text-sm text-gray-500">
                            September 2026
                        </p>
                    </div>

                    <div className="text-right">
                        <p className="text-xs text-gray-500">
                            Current Balance
                        </p>

                        <p className="mt-1 text-lg font-semibold text-gray-900">
                            ₹72,250
                        </p>
                    </div>

                </div>


                {/* Ledger Table */}
                <div className="overflow-x-auto">

                    <table className="w-full text-left text-sm">

                        <thead>
                            <tr className="border-b border-gray-200 text-xs uppercase text-gray-500">

                                <th className="px-3 py-3 font-medium">
                                    Date
                                </th>

                                <th className="px-3 py-3 font-medium">
                                    Description
                                </th>

                                <th className="px-3 py-3 font-medium">
                                    Category
                                </th>

                                <th className="px-3 py-3 font-medium">
                                    Type
                                </th>

                                <th className="px-3 py-3 text-right font-medium">
                                    Amount
                                </th>

                                <th className="px-3 py-3 text-right font-medium">
                                    Balance
                                </th>

                            </tr>
                        </thead>


                        <tbody>

                            {/* Income */}
                            <tr className="border-b border-gray-100">

                                <td className="px-3 py-4 text-gray-500">
                                    01 Sep 2026
                                </td>

                                <td className="px-3 py-4 font-medium text-gray-900">
                                    Monthly Salary
                                </td>

                                <td className="px-3 py-4 text-gray-500">
                                    Salary
                                </td>

                                <td className="px-3 py-4">
                                    <span className="rounded-full bg-green-100 px-2.5 py-1 text-xs font-medium text-green-700">
                                        Income
                                    </span>
                                </td>

                                <td className="px-3 py-4 text-right font-medium text-green-600">
                                    + ₹60,000
                                </td>

                                <td className="px-3 py-4 text-right font-medium text-gray-900">
                                    ₹60,000
                                </td>

                            </tr>


                            {/* Expense */}
                            <tr className="border-b border-gray-100">

                                <td className="px-3 py-4 text-gray-500">
                                    01 Sep 2026
                                </td>

                                <td className="px-3 py-4 font-medium text-gray-900">
                                    Grocery Shopping
                                </td>

                                <td className="px-3 py-4 text-gray-500">
                                    Food
                                </td>

                                <td className="px-3 py-4">
                                    <span className="rounded-full bg-red-100 px-2.5 py-1 text-xs font-medium text-red-700">
                                        Expense
                                    </span>
                                </td>

                                <td className="px-3 py-4 text-right font-medium text-red-600">
                                    - ₹2,450
                                </td>

                                <td className="px-3 py-4 text-right font-medium text-gray-900">
                                    ₹57,550
                                </td>

                            </tr>


                            {/* Expense */}
                            <tr className="border-b border-gray-100">

                                <td className="px-3 py-4 text-gray-500">
                                    30 Aug 2026
                                </td>

                                <td className="px-3 py-4 font-medium text-gray-900">
                                    Electricity Bill
                                </td>

                                <td className="px-3 py-4 text-gray-500">
                                    Bills
                                </td>

                                <td className="px-3 py-4">
                                    <span className="rounded-full bg-red-100 px-2.5 py-1 text-xs font-medium text-red-700">
                                        Expense
                                    </span>
                                </td>

                                <td className="px-3 py-4 text-right font-medium text-red-600">
                                    - ₹1,850
                                </td>

                                <td className="px-3 py-4 text-right font-medium text-gray-900">
                                    ₹55,700
                                </td>

                            </tr>


                            {/* Income */}
                            <tr className="border-b border-gray-100">

                                <td className="px-3 py-4 text-gray-500">
                                    28 Aug 2026
                                </td>

                                <td className="px-3 py-4 font-medium text-gray-900">
                                    Freelance Project
                                </td>

                                <td className="px-3 py-4 text-gray-500">
                                    Freelance
                                </td>

                                <td className="px-3 py-4">
                                    <span className="rounded-full bg-green-100 px-2.5 py-1 text-xs font-medium text-green-700">
                                        Income
                                    </span>
                                </td>

                                <td className="px-3 py-4 text-right font-medium text-green-600">
                                    + ₹18,500
                                </td>

                                <td className="px-3 py-4 text-right font-medium text-gray-900">
                                    ₹74,200
                                </td>

                            </tr>


                            {/* Expense */}
                            <tr>

                                <td className="px-3 py-4 text-gray-500">
                                    28 Aug 2026
                                </td>

                                <td className="px-3 py-4 font-medium text-gray-900">
                                    New Shoes
                                </td>

                                <td className="px-3 py-4 text-gray-500">
                                    Shopping
                                </td>

                                <td className="px-3 py-4">
                                    <span className="rounded-full bg-red-100 px-2.5 py-1 text-xs font-medium text-red-700">
                                        Expense
                                    </span>
                                </td>

                                <td className="px-3 py-4 text-right font-medium text-red-600">
                                    - ₹3,200
                                </td>

                                <td className="px-3 py-4 text-right font-medium text-gray-900">
                                    ₹71,000
                                </td>

                            </tr>

                        </tbody>

                    </table>

                </div>

            </div>

        </section>
    );
};

export default Statements;