import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Settings = () => {
    const navigate = useNavigate();
    const deleteData = () => {
        localStorage.clear();
        navigate("/login");
    }
    useEffect(()=>{
        document.title = "Settings | MoneyFlow";
    }, []);
    return (
        <section className="h-full p-6">

            {/* Page Header */}
            <div className="mb-6">
                <h1 className="text-2xl font-semibold text-gray-900">
                    Settings
                </h1>

                <p className="mt-1 text-sm text-gray-500">
                    Manage your MoneyFlow preferences and application settings.
                </p>
            </div>


            <div className="max-w-4xl space-y-6">

                {/* Account */}
                <div className="rounded-xl border border-gray-200 bg-white p-5">

                    <div className="mb-5">
                        <h2 className="text-lg font-semibold text-gray-900">
                            Account
                        </h2>

                        <p className="mt-1 text-sm text-gray-500">
                            Manage your basic account information.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">

                        <div className="flex flex-col gap-1.5">
                            <label
                                htmlFor="name"
                                className="text-sm font-medium text-gray-700"
                            >
                                Name
                            </label>

                            <input
                                id="name"
                                type="text"
                                placeholder="Your name"
                                className="rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label
                                htmlFor="email"
                                className="text-sm font-medium text-gray-700"
                            >
                                Email
                            </label>

                            <input
                                id="email"
                                type="email"
                                placeholder="you@example.com"
                                className="rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                            />
                        </div>

                    </div>
                </div>


                {/* Appearance */}
                <div className="rounded-xl border border-gray-200 bg-white p-5">

                    <div className="mb-5">
                        <h2 className="text-lg font-semibold text-gray-900">
                            Appearance
                        </h2>

                        <p className="mt-1 text-sm text-gray-500">
                            Customize how MoneyFlow looks.
                        </p>
                    </div>

                    <div className="flex items-center justify-between">

                        <div>
                            <h3 className="text-sm font-medium text-gray-900">
                                Theme
                            </h3>

                            <p className="mt-1 text-sm text-gray-500">
                                Choose your preferred application theme.
                            </p>
                        </div>

                        <select
                            className="rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                        >
                            <option>Light</option>
                            <option>Dark</option>
                            <option>System</option>
                        </select>

                    </div>
                </div>


                {/* Currency */}
                <div className="rounded-xl border border-gray-200 bg-white p-5">

                    <div className="mb-5">
                        <h2 className="text-lg font-semibold text-gray-900">
                            Currency
                        </h2>

                        <p className="mt-1 text-sm text-gray-500">
                            Choose the currency used throughout MoneyFlow.
                        </p>
                    </div>

                    <div className="flex items-center justify-between">

                        <div>
                            <h3 className="text-sm font-medium text-gray-900">
                                Default Currency
                            </h3>

                            <p className="mt-1 text-sm text-gray-500">
                                Used when displaying your income and expenses.
                            </p>
                        </div>

                        <select
                            className="rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                        >
                            <option>INR - Indian Rupee (₹)</option>
                            <option>USD - US Dollar ($)</option>
                            <option>EUR - Euro (€)</option>
                            <option>GBP - British Pound (£)</option>
                        </select>

                    </div>
                </div>


                {/* Format */}
                <div className="rounded-xl border border-gray-200 bg-white p-5">

                    <div className="mb-5">
                        <h2 className="text-lg font-semibold text-gray-900">
                            Format
                        </h2>

                        <p className="mt-1 text-sm text-gray-500">
                            Control how dates and numbers are displayed.
                        </p>
                    </div>

                    <div className="space-y-5">

                        <div className="flex items-center justify-between">

                            <div>
                                <h3 className="text-sm font-medium text-gray-900">
                                    Date Format
                                </h3>

                                <p className="mt-1 text-sm text-gray-500">
                                    Choose how dates appear in your statements.
                                </p>
                            </div>

                            <select
                                className="rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                            >
                                <option>DD/MM/YYYY</option>
                                <option>MM/DD/YYYY</option>
                                <option>YYYY-MM-DD</option>
                            </select>

                        </div>

                        <div className="flex items-center justify-between">

                            <div>
                                <h3 className="text-sm font-medium text-gray-900">
                                    Number Format
                                </h3>

                                <p className="mt-1 text-sm text-gray-500">
                                    Choose how amounts are formatted.
                                </p>
                            </div>

                            <select
                                className="rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                            >
                                <option>1,00,000.00</option>
                                <option>100,000.00</option>
                                <option>100000.00</option>
                            </select>

                        </div>

                    </div>
                </div>


                {/* Preferences */}
                <div className="rounded-xl border border-gray-200 bg-white p-5">

                    <div className="mb-5">
                        <h2 className="text-lg font-semibold text-gray-900">
                            Preferences
                        </h2>

                        <p className="mt-1 text-sm text-gray-500">
                            Customize your transaction preferences.
                        </p>
                    </div>

                    <div className="space-y-5">

                        <div className="flex items-center justify-between">

                            <div>
                                <h3 className="text-sm font-medium text-gray-900">
                                    Default Transaction Type
                                </h3>

                                <p className="mt-1 text-sm text-gray-500">
                                    Choose the default type when adding a transaction.
                                </p>
                            </div>

                            <select
                                className="rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                            >
                                <option>Expense</option>
                                <option>Income</option>
                            </select>

                        </div>

                    </div>
                </div>


                {/* Data */}
                <div className="flex flex-col gap-5 rounded-xl border border-gray-200 bg-white p-5">

                    <div className="">
                        <h2 className="text-lg font-semibold text-gray-900">
                            Data
                        </h2>

                        <p className="mt-1 text-sm text-gray-500">
                            Manage your MoneyFlow data.
                        </p>
                    </div>

                    <div className="flex items-center justify-between">

                        <div>
                            <h3 className="text-sm font-medium text-gray-900">
                                Export Data
                            </h3>

                            <p className="mt-1 text-sm text-gray-500">
                                Download your transactions and categories.
                            </p>
                        </div>

                        <button
                            type="button"
                            className="rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
                        >
                            Export Data
                        </button>

                    </div>
                    <div className="flex items-center justify-between">

                        <div>
                            <h3 className="text-sm font-medium text-red-700">
                                Delete Data
                            </h3>

                            <p className="mt-1 text-sm text-red-700">
                                Delete Your Entire Data (No Rollback)
                            </p>
                        </div>

                        <button
                            type="button"
                            className="rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-medium bg-red-600 text-white transition hover:text-red-700"
                            onClick={deleteData}
                        >
                            Delete Data
                        </button>

                    </div>

                </div>


                {/* Save
                <div className="flex justify-end">

                    <button
                        type="button"
                        className="rounded-lg bg-purple-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-purple-700"
                    >
                        Save Changes
                    </button>

                </div> */}

            </div>

        </section>
    );
};

export default Settings;