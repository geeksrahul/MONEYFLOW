import { useEffect } from "react";
import { useCategory, useTransaction } from "../contexts";
import { TransactionRow } from "../components/data";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Expense = () => {
    const {transactions, addTransaction} = useTransaction();
    const {categories} = useCategory();
    const {register, handleSubmit, setFocus, reset, formState: {errors}} = useForm();

    useEffect(()=>{
        document.title = "Expenses | MoneyFlow";
        setFocus("title")
    }, []);


    const handleAddTransaction = ({title, amount, date, category, note}) => {
        const transaction = addTransaction({
            id: crypto.randomUUID(),
            type : "expense",
            title, 
            amount,
            date, 
            category, 
            note
        });
        if(!transaction) {
            console.error("can't add expense");
        }
        setFocus("title");
        reset();
    }
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

                    <form className="flex flex-col gap-4"
                        onSubmit={handleSubmit(handleAddTransaction)}
                    >

                        {/* Description */}
                        <div className="flex flex-col gap-1.5">
                            <label
                                htmlFor="title"
                                className="text-sm font-medium text-gray-700"
                            >
                                Title
                            </label>

                            <input
                                id="title"
                                type="text"
                                placeholder="e.g. Grocery shopping"
                                className="rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                                {...register("title", {
                                    required : {
                                        value : true,
                                        message : "field cannot remain empty"
                                    }
                                })}
                            />
                            {errors.title && <p> {errors.title.message} </p> }
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
                                {...register("amount", {
                                    required : {
                                        value : true,
                                        message : "field cannot remain empty"
                                    },
                                    min : {
                                        value : 1,
                                        message : "amount must be greater than 0"
                                    }
                                })}
                            />
                            {errors.amount && <p> {errors.amount.message} </p> }
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
                                {...register("date", {
                                    required : {
                                        value : true,
                                        message : "field cannot remain empty"
                                    }
                                })}
                            />
                            {errors.date && <p> {errors.date.message} </p> }
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
                                {...register("category", {
                                    required : {
                                        value : true,
                                        message : "field cannot remain empty"
                                    }
                                })}
                            >
                                <option value=""> Select Category </option>
                                {categories
                                    .filter(category => category.type === "expense")
                                    .map((category) => (
                                        <option value={category.value} key={category.id}> {category.title} </option>
                                    ))
                                }
                            </select>
                             {errors.category && <p> {errors.category.message} </p> }
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
                               {...register("note", {
                                    required : {
                                        value : true,
                                        message : "field cannot remain empty"
                                    }
                                })}
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

                        <Link
                            to="/statements"
                            className="text-sm font-medium text-purple-600 hover:text-purple-700"
                        >
                            View All
                         </Link>
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

                                {
                                    transactions
                                    .filter(transaction => transaction.type === "expense")
                                    .map(expense => (
                                        <TransactionRow
                                            key={expense.id}
                                            data={expense}
                                        />
                                    ))
                                }
                            </tbody>

                        </table>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Expense;