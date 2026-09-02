import { useEffect, useState } from "react";
import { useCategory, useTransaction } from "../contexts";
import { LedgerDataRow } from "../components/data";
import { getTotalExpense, getTotalIncome, getCurrentBalance, sortTransactionsByTime } from "../utils/TransactionStats";

const Statements = () => {
    const { transactions } = useTransaction();
    const { categories } = useCategory();

    const [typeFilter, setTypeFilter] = useState("all");
    const [categoryFilter, setCategoryFilter] = useState("all");

    let balance = 0;
    
    const ledger = sortTransactionsByTime(transactions.filter(transaction => {
        const matchesType =
            typeFilter === "all" ||
            transaction.type === typeFilter;

        const matchesCategory =
            categoryFilter === "all" ||
            transaction.category === categoryFilter;

        return matchesType && matchesCategory;
    }))
    .map((transaction => {
        const amount = Number(transaction.amount)
        balance += transaction.type === "income" ? amount : -amount;
        return {...transaction, balance}
    })); // for adding balance attribute to each entries

    const categoryOptions =
        typeFilter === "all"
            ? categories
            : categories.filter(category => category.type === typeFilter);

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
                            value={typeFilter}
                            onChange={(e) => {
                                setTypeFilter(e.target.value)
                            }}
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
                            value={categoryFilter}
                            onChange={(e) => {
                                setCategoryFilter(e.target.value)
                            }}
                        >
                            <option value="all"> All </option>
                            {
                                categoryOptions.map(category => (
                                    <option key={category.id} value={category.title}> {category.title} </option>
                                ))
                            }
                        </select>
                    </div>

                </div>
            </div>


            {/* Statement */}
            <div className="rounded-xl border border-gray-200 bg-white p-5">

                <div className="mb-5 flex items-center justify-between gap-4">

                    <div className="flex-1">
                        <h2 className="text-lg font-semibold text-gray-900">
                            Account Statement
                        </h2>

                        <p className="mt-1 text-sm text-gray-500">
                            September 2026
                        </p>
                    </div>

                    <div className="text-right">
                        <p className="text-xs text-gray-500">
                            Total Income
                        </p>

                        <p className="mt-1 text-lg font-semibold text-gray-900">
                            {getTotalIncome(transactions)}
                        </p>
                    </div>
                    <div className="text-right">
                        <p className="text-xs text-gray-500">
                            Total Expense
                        </p>

                        <p className="mt-1 text-lg font-semibold text-gray-900">
                            {getTotalExpense(transactions)}
                        </p>
                    </div>
                    <div className="text-right">
                        <p className="text-xs text-gray-500">
                            Current Balance
                        </p>

                        <p className="mt-1 text-lg font-semibold text-gray-900">
                            {getCurrentBalance(transactions)}
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

                            {
                                ledger
                                    .reverse()
                                    .map((entry, idx) => {
                                        return (
                                            <LedgerDataRow
                                                key={entry.id}
                                                entry={entry}
                                            >
                                            </LedgerDataRow>
                                        )
                                    })}


                        </tbody>

                    </table>

                </div>

            </div>

        </section>
    );
};

export default Statements;