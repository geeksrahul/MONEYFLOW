import { useEffect } from "react";
import CategoryCard from "../../components/cards/CategoryCard";
import { useCategory } from "../../contexts";
import { useForm } from "react-hook-form";

const Categories = () => {
    const {categories, addCategory} = useCategory();
    const {register, handleSubmit, reset, setFocus, formState : {errors}} = useForm();
    const incomeCategories = categories.filter(category => category.type === "income")
    const expenseCategories = categories.filter(category => category.type === "expense")
    useEffect(()=>{
        document.title = "Categories | MoneyFlow";
        setFocus("title")
    }, []);

    const handleAddCategory = ({title, type}) => {
        addCategory({
            id : crypto.randomUUID(),
            title, 
            type
        })
        reset()
        setFocus("title")
    }
    
    return (
        <section className="max-h-[calc(100vh-100px)] p-6 overflow-hidden">

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
                <div className="rounded-xl border border-gray-200 bg-white p-5 max-h-140">

                    <h2 className="mb-5 text-lg font-semibold text-gray-900">
                        Add Category
                    </h2>

                    <form className="flex flex-col gap-4"
                        onSubmit={handleSubmit(handleAddCategory)}
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
                                {...register("title", {
                                    required : {
                                        value : true,
                                        message : "field cannot remain empty"
                                    }
                                })}
                            />
                            {errors.title && <p> {errors.title.message} </p> }
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
                                {...register("type", {
                                    required : {
                                        value : true,
                                        message : "field cannot remain empty"
                                    }
                                })}
                            >
                                <option value="">Select type</option>
                                <option value="income">Income</option>
                                <option value="expense">Expense</option>
                            </select>
                            {errors.type && <p> {errors.type.message} </p> }
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
                <div className="rounded-xl border border-gray-200 bg-white p-5 max-h-140">

                    <div className="mb-5">
                        <h2 className="text-lg font-semibold text-gray-900">
                            Income Categories
                        </h2>

                        <p className="mt-1 text-sm text-gray-500">
                            Your income sources
                        </p>
                    </div>
                    {!incomeCategories.length ? (
                        <div className="w-full h-110 rounded-lg  bg-gray-100 grid place-items-center"> 
                            No Categories Found 
                        </div>
                    ) : (
                        <div className="flex flex-col gap-3 h-110 overflow-y-scroll">
                            {incomeCategories.map(category => (
                                <CategoryCard
                                    key={category.id}
                                    category={category}
                                />
                            ))}
                        </div>
                    )}
                </div>


                {/* Expense Categories */}
                <div className="rounded-xl border border-gray-200 bg-white p-5 max-h-140">
 
                    <div className="mb-5">
                        <h2 className="text-lg font-semibold text-gray-900">
                            Expense Categories
                        </h2>
                        <p className="mt-1 text-sm text-gray-500">
                            Where your money goes
                        </p>
                    </div>

                   {!expenseCategories.length ? (
                        <div className="w-full h-110 rounded-lg  bg-gray-100 grid place-items-center"> 
                            No Categories Found 
                        </div>
                    ) : (
                        <div className="flex flex-col gap-3 h-110 overflow-y-scroll">
                            {expenseCategories.map(category => (
                                <CategoryCard
                                    key={category.id}
                                    category={category}
                                />
                            ))}
                        </div>
                    )}
                </div>

            </div>
        </section>
    );
};

export default Categories;