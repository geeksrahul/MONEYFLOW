import { useEffect } from "react";
import { TransactionRow } from "../../components/data";
import { useCategory, useTransaction } from "../../contexts";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Income = () => {
    const {transactions, addTransaction} = useTransaction();
    const {categories} = useCategory();
    const {register, handleSubmit, setFocus, reset, formState: {errors}} = useForm();

    useEffect(()=>{
        document.title = "Incomes | MoneyFlow";
    }, []);

    const handleAddTransaction = ({title, amount, date, category, note}) => {
        const transaction = addTransaction({
            id: crypto.randomUUID(),
            type: "income",
            title,
            amount, 
            date,
            category,
            note
        });
        if(!transaction) {
            console.log("can't add transaction");
        } else {
            reset();
            setFocus("title");
        }
    }
    return (
        <section className="h-full p-2">

            {/* Page Header */}
            <div className="mb-6">
                <h1 className="text-2xl font-semibold text-gray-900">
                    Income
                </h1>

                <p className="mt-1 text-sm text-gray-500">
                    Manage your income and keep track of your earnings.
                </p>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-[30%_1fr] gap-6">

                {/* Add Income Form */}
                <div className="rounded-xl border border-gray-200 bg-white p-5">

                    <h2 className="mb-5 text-lg font-semibold text-gray-900">
                        Add Income
                    </h2>

                    <form className="flex flex-col gap-4"
                        onSubmit={handleSubmit(handleAddTransaction)}
                    >

                        {/* Source */}
                        <div className="flex flex-col gap-1.5">
                            <label
                                htmlFor="title"
                                className="text-sm font-medium text-gray-700"
                            >
                                Title
                            </label>
                            {errors.title && <p> {errors.title.message} </p> }
                            <input
                                id="title"
                                type="text"
                                placeholder="e.g. Salary"
                                className="rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                                {...register("title",{
                                    required : {
                                        value : true,
                                        message : "field cannot remain empty"
                                    },
                                    minLength : {
                                        value : 10,
                                        message : "Title length must be 10-100"
                                    },
                                    maxLength : {
                                        value : 100,
                                        message : "cannot exceed title length"
                                    }
                                })}
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
                            {errors.amount && <p> {errors.amount.message} </p> }
                            <input
                                id="amount"
                                type="number"
                                placeholder="₹ 0.00"
                                className="rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                                {...register("amount", {
                                    required : {
                                        value : true,
                                        message : "field cannot remain empty",
                                    },
                                    min: {
                                        value : 1,
                                        message : "transaction amount must be more than zero",
                                    }
                                })}
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
                            {errors.date && <p> {errors.date.message} </p> }
                            <input
                                id="date"
                                type="date"
                                className="rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                                {...register("date", {
                                    required : {
                                        value: true,
                                        message : "select an date please"
                                    }
                                })}
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
                             {errors.category && <p> {errors.category.message} </p> }
                            <select
                                id="category"
                                className="rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                                {...register("category", {
                                    required : {
                                        value : true,
                                        message : "select an transaction category please"
                                    }
                                })}
                            >
                                <option value="#" > Select Type </option>
                                {
                                    categories
                                    .filter(category => category.type === "income")
                                    .map((category) => ( 
                                        <option value={category?.title} key={category?.id}> {category?.title} </option>
                                    ))
                                }
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
                                {...register("note")}
                            />
                        </div>

                        <button
                            type="submit"
                            className="mt-2 rounded-lg bg-purple-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-purple-700"
                        >
                            Add Income
                        </button>

                    </form>
                </div>

                {/* Income Table */}
                <div className="rounded-xl border border-gray-200 bg-white p-5">

                    <div className="mb-5 flex items-center justify-between">
                        <h2 className="text-lg font-semibold text-gray-900">
                            Recent Incomes
                        </h2>

                         <Link
                            to="/app/statements"
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
                                        Title
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
                                {transactions
                                .filter(transaction => transaction.type === "income")
                                .map(income => (
                                    <TransactionRow key={income.id} data={income} />
                                ))}
                            </tbody>

                        </table>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Income;