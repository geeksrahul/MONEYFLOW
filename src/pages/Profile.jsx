const Profile = () => {
    return (
        <div className="min-h-full bg-slate-50 p-6">
            <div className="mx-auto max-w-5xl">

                {/* Page heading */}
                <div className="mb-6">
                    <h1 className="text-2xl font-semibold text-slate-900">
                        Profile
                    </h1>

                    <p className="mt-1 text-sm text-slate-500">
                        Manage your personal and financial information.
                    </p>
                </div>


                {/* Profile card */}
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

                    {/* Profile cover / avatar section */}
                    <div className="border-b border-slate-200 px-6 py-7">
                        <div className="flex flex-col gap-6 sm:flex-row sm:items-center">

                            {/* Avatar */}
                            <div className="relative">
                                <div className="flex h-28 w-28 items-center justify-center overflow-hidden rounded-full bg-violet-100 text-3xl font-semibold text-violet-600 ring-4 ring-white shadow-md">
                                    R
                                </div>

                                {/* Upload button */}
                                <label
                                    htmlFor="profile-image"
                                    className="absolute bottom-0 right-0 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border-2 border-white bg-violet-600 text-white shadow-md transition hover:bg-violet-700"
                                >
                                    +
                                </label>

                                <input
                                    id="profile-image"
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                />
                            </div>


                            {/* Profile information */}
                            <div>
                                <h2 className="text-xl font-semibold text-slate-900">
                                    Rahul
                                </h2>

                                <p className="mt-1 text-sm text-slate-500">
                                    rahul@example.com
                                </p>

                                <p className="mt-3 text-xs text-slate-400">
                                    JPG, PNG or WEBP · Max 5MB
                                </p>
                            </div>

                        </div>
                    </div>


                    {/* Personal information */}
                    <div className="border-b border-slate-200 p-6">
                        <div className="mb-5">
                            <h2 className="text-lg font-semibold text-slate-900">
                                Personal information
                            </h2>

                            <p className="mt-1 text-sm text-slate-500">
                                Basic information about you.
                            </p>
                        </div>


                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                            {/* Name */}
                            <div>
                                <label
                                    htmlFor="name"
                                    className="mb-2 block text-sm font-medium text-slate-700"
                                >
                                    Full name
                                </label>

                                <input
                                    id="name"
                                    type="text"
                                    defaultValue="Rahul"
                                    placeholder="Enter your name"
                                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
                                />
                            </div>


                            {/* Email */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="mb-2 block text-sm font-medium text-slate-700"
                                >
                                    Email address
                                </label>

                                <input
                                    id="email"
                                    type="email"
                                    defaultValue="rahul@example.com"
                                    placeholder="Enter your email"
                                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
                                />
                            </div>

                        </div>
                    </div>


                    {/* Financial information */}
                    <div className="p-6">
                        <div className="mb-5">
                            <h2 className="text-lg font-semibold text-slate-900">
                                Financial information
                            </h2>

                            <p className="mt-1 text-sm text-slate-500">
                                Set your financial details to personalize MoneyFlow.
                            </p>
                        </div>


                        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">

                            {/* Salary */}
                            <div>
                                <label
                                    htmlFor="salary"
                                    className="mb-2 block text-sm font-medium text-slate-700"
                                >
                                    Monthly salary
                                </label>

                                <div className="relative">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-slate-400">
                                        ₹
                                    </span>

                                    <input
                                        id="salary"
                                        type="number"
                                        defaultValue="50000"
                                        placeholder="50000"
                                        className="w-full rounded-lg border border-slate-300 bg-white py-2.5 pl-9 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
                                    />
                                </div>
                            </div>


                            {/* Budget */}
                            <div>
                                <label
                                    htmlFor="budget"
                                    className="mb-2 block text-sm font-medium text-slate-700"
                                >
                                    Monthly budget
                                </label>

                                <div className="relative">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-slate-400">
                                        ₹
                                    </span>

                                    <input
                                        id="budget"
                                        type="number"
                                        defaultValue="30000"
                                        placeholder="30000"
                                        className="w-full rounded-lg border border-slate-300 bg-white py-2.5 pl-9 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
                                    />
                                </div>
                            </div>


                            {/* Saving */}
                            <div>
                                <label
                                    htmlFor="saving"
                                    className="mb-2 block text-sm font-medium text-slate-700"
                                >
                                    Monthly saving target
                                </label>

                                <div className="relative">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-slate-400">
                                        ₹
                                    </span>

                                    <input
                                        id="saving"
                                        type="number"
                                        defaultValue="20000"
                                        placeholder="20000"
                                        className="w-full rounded-lg border border-slate-300 bg-white py-2.5 pl-9 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
                                    />
                                </div>
                            </div>

                        </div>
                    </div>


                    {/* Footer actions */}
                    <div className="flex flex-col-reverse gap-3 border-t border-slate-200 bg-slate-50 px-6 py-4 sm:flex-row sm:justify-end">

                        <button
                            type="button"
                            className="rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
                        >
                            Cancel
                        </button>

                        <button
                            type="button"
                            className="rounded-lg bg-violet-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-violet-700"
                        >
                            Save changes
                        </button>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default Profile;