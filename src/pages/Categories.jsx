import { useEffect, useRef, useState } from "react";
import CategoryCard from "../components/cards/CategoryCard";
import { useCategory } from "../contexts";

const Categories = () => {
    const {categories, addCategory} = useCategory();

    const [title, setTitle] = useState("");
    const [type, setType] = useState("");

    const focusInput = useRef()

    useEffect(()=>{
        document.title = "Categories | MoneyFlow";
        focusInput.current.focus();
    }, []);

    const cleanUp = () => {
        setTitle("");
        setType("");
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        addCategory({
            id : crypto.randomUUID(),
            title, 
            type
        })
        cleanUp();
        focusInput.current.focus();
    }
    
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

                    <form className="flex flex-col gap-4"
                        onSubmit={handleFormSubmit}
                    >

                        {/* Category Name */}
                        <div className="flex flex-col gap-1.5">
                            <label
                                htmlFor="category-title"
                                className="text-sm font-medium text-gray-700"
                            >
                                Category Title
                            </label>

                            <input
                                id="category-title"
                                type="text"
                                placeholder="e.g. Salary"
                                className="rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                                value={title}
                                onChange={(e)=>{
                                    setTitle(e.target.value)
                                }}
                                ref={focusInput}
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
                                value={type}
                                onChange={(e)=>{
                                    setType(e.target.value)
                                }}
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
                        {categories.filter(category => category.type === "income").map(category => (
                            <CategoryCard
                                key={category.id}
                                category={category}
                            />
                        ))}
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
                        {categories.filter(category => category.type === "expense").map(category => (
                            <CategoryCard
                                key={category.id}
                                category={category}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Categories;