import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Landing = () => {
    const isLoggedIn = useSelector(state => state.auth.authStatus);
    const features = [
        {
            number: "01",
            title: "Track your income",
            description:
                "Keep your salary, freelance income, and other earnings organized in one place.",
        },
        {
            number: "02",
            title: "Understand expenses",
            description:
                "Know where your money goes with organized transactions and spending categories.",
        },
        {
            number: "03",
            title: "Stay within budget",
            description:
                "Set a monthly budget and keep track of how much you have spent and what remains.",
        },
        {
            number: "04",
            title: "See the bigger picture",
            description:
                "Get a simple overview of your financial activity without complicated spreadsheets.",
        },
    ];

    return (
        <main className="min-h-screen bg-white text-slate-900">

            {/* ================= NAVBAR ================= */}
            <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-md">

                <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">

                    {/* Logo */}
                    <Link
                        to="/"
                        className="text-xl font-bold tracking-tight text-slate-900"
                    >
                        Money<span className="text-purple-600">Flow</span>
                    </Link>

                    {/* Navigation */}
                    <div className="hidden items-center gap-8 md:flex">

                        <a
                            href="#about"
                            className="text-sm font-medium text-slate-500 transition-colors hover:text-slate-900"
                        >
                            About
                        </a>

                        <a
                            href="#features"
                            className="text-sm font-medium text-slate-500 transition-colors hover:text-slate-900"
                        >
                            Features
                        </a>

                        <a
                            href="#contact"
                            className="text-sm font-medium text-slate-500 transition-colors hover:text-slate-900"
                        >
                            Contact
                        </a>

                    </div>

                    {/* Auth */}
                        <div className="flex items-center gap-2 sm:gap-3">
                        {isLoggedIn ? (
                            <Link
                                to="/app/"
                                className="rounded-lg bg-purple-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-purple-700 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 active:scale-[0.98]"
                            >
                                Use It 
                            </Link>

                        ) : (
                            <>
                            
                            <Link
                                to="/login"
                                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
                                >
                                Login
                            </Link>
    
                            <Link
                                to="/register"
                                className="rounded-lg bg-purple-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-purple-700 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 active:scale-[0.98]"
                                >
                                Get Started
                            </Link>
                         </>
                        )}

                    </div>
                    

                </nav>

            </header>


            {/* ================= HERO ================= */}
            <section className="relative overflow-hidden">

                {/* Background decoration */}
                <div className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-purple-100 blur-3xl" />
                <div className="pointer-events-none absolute -right-40 top-40 h-96 w-96 rounded-full bg-indigo-50 blur-3xl" />

                <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2 lg:py-32">

                    {/* Hero content */}
                    <div>

                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-100 bg-purple-50 px-3 py-1.5 text-xs font-semibold text-purple-700">
                            <span className="h-1.5 w-1.5 rounded-full bg-purple-600" />
                            Simple personal finance management
                        </div>

                        <h1 className="max-w-2xl text-4xl font-bold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                            Your money.
                            <span className="block text-purple-600">
                                Under control.
                            </span>
                        </h1>

                        <p className="mt-6 max-w-xl text-base leading-7 text-slate-500 sm:text-lg">
                            MoneyFlow helps you track income, manage expenses,
                            set budgets, and understand your financial habits
                            without complicated spreadsheets.
                        </p>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                            <Link
                                to="/register"
                                className="inline-flex items-center justify-center rounded-xl bg-purple-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-purple-200 transition-all hover:-translate-y-0.5 hover:bg-purple-700 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 active:translate-y-0"
                            >
                                Start for free
                                <span className="ml-2 text-lg">→</span>
                            </Link>

                            <a
                                href="#features"
                                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition-all hover:border-slate-300 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 active:bg-slate-100"
                            >
                                Explore features
                            </a>

                        </div>

                        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-400">
                            <span>✓ Simple to use</span>
                            <span>✓ Built for everyday finances</span>
                            <span>✓ No spreadsheets</span>
                        </div>

                    </div>


                    {/* Dashboard Preview */}
                    <div className="relative">

                        {/* Floating decoration */}
                        <div className="absolute -right-3 -top-5 z-10 hidden rounded-xl border border-slate-100 bg-white px-4 py-3 shadow-xl sm:block">
                            <p className="text-[10px] font-medium text-slate-400">
                                Monthly spending
                            </p>
                            <p className="mt-1 text-sm font-bold text-slate-900">
                                ₹22,150
                            </p>
                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-200/70 sm:p-5">

                            {/* Preview header */}
                            <div className="flex items-center justify-between border-b border-slate-100 pb-4">

                                <div>
                                    <p className="text-sm font-semibold text-slate-900">
                                        Dashboard
                                    </p>

                                    <p className="mt-1 text-xs text-slate-400">
                                        September 2026
                                    </p>
                                </div>

                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-50 text-xs font-bold text-purple-600">
                                    R
                                </div>

                            </div>


                            {/* Stats */}
                            <div className="mt-5 grid grid-cols-3 gap-3">

                                <div className="rounded-xl bg-slate-50 p-3 sm:p-4">
                                    <p className="text-[10px] font-medium text-slate-400 sm:text-xs">
                                        Balance
                                    </p>

                                    <p className="mt-2 text-sm font-bold text-slate-900 sm:text-lg">
                                        ₹42,850
                                    </p>
                                </div>

                                <div className="rounded-xl bg-emerald-50 p-3 sm:p-4">
                                    <p className="text-[10px] font-medium text-emerald-600 sm:text-xs">
                                        Income
                                    </p>

                                    <p className="mt-2 text-sm font-bold text-emerald-700 sm:text-lg">
                                        ₹65,000
                                    </p>
                                </div>

                                <div className="rounded-xl bg-purple-50 p-3 sm:p-4">
                                    <p className="text-[10px] font-medium text-purple-600 sm:text-xs">
                                        Budget
                                    </p>

                                    <p className="mt-2 text-sm font-bold text-purple-700 sm:text-lg">
                                        ₹35,000
                                    </p>
                                </div>

                            </div>


                            {/* Chart */}
                            <div className="mt-4 rounded-xl border border-slate-100 p-4">

                                <div className="flex items-center justify-between">

                                    <div>
                                        <p className="text-sm font-semibold text-slate-800">
                                            Spending Overview
                                        </p>

                                        <p className="mt-1 text-[10px] text-slate-400">
                                            Last 6 months
                                        </p>
                                    </div>

                                    <span className="rounded-md bg-slate-50 px-2 py-1 text-[10px] text-slate-400">
                                        Monthly
                                    </span>

                                </div>

                                <div className="mt-6 flex h-32 items-end gap-2">

                                    {[38, 52, 45, 68, 54, 82, 62, 91, 70, 76, 58, 86].map(
                                        (height, index) => (
                                            <div
                                                key={index}
                                                className="group flex h-full flex-1 items-end"
                                            >
                                                <div
                                                    className="w-full rounded-t-md bg-purple-200 transition-all group-hover:bg-purple-500"
                                                    style={{
                                                        height: `${height}%`,
                                                    }}
                                                />
                                            </div>
                                        )
                                    )}

                                </div>

                            </div>


                            {/* Transactions */}
                            <div className="mt-4">

                                <div className="flex items-center justify-between">
                                    <p className="text-sm font-semibold text-slate-800">
                                        Recent Transactions
                                    </p>

                                    <span className="text-xs font-medium text-purple-600">
                                        View all
                                    </span>
                                </div>

                                <div className="mt-3 space-y-1">

                                    {[
                                        ["Salary", "+₹50,000", "text-emerald-600"],
                                        ["Groceries", "-₹2,450", "text-slate-700"],
                                        ["Freelance", "+₹8,500", "text-emerald-600"],
                                    ].map(([title, amount, amountClass]) => (
                                        <div
                                            key={title}
                                            className="flex items-center justify-between rounded-lg px-3 py-2.5 transition-colors hover:bg-slate-50"
                                        >
                                            <span className="text-xs text-slate-500">
                                                {title}
                                            </span>

                                            <span
                                                className={`text-xs font-semibold ${amountClass}`}
                                            >
                                                {amount}
                                            </span>
                                        </div>
                                    ))}

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* ================= ABOUT ================= */}
            <section
                id="about"
                className="border-y border-slate-100 bg-slate-50"
            >

                <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:items-center lg:py-24">

                    <div>

                        <p className="text-sm font-semibold text-purple-600">
                            Why MoneyFlow?
                        </p>

                        <h2 className="mt-3 max-w-xl text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                            Managing money shouldn't feel like managing a
                            spreadsheet.
                        </h2>

                    </div>

                    <div>

                        <p className="leading-7 text-slate-500">
                            MoneyFlow is designed around the everyday decisions
                            people make with their money. Instead of complicated
                            financial tools, it gives you a simple place to
                            record transactions, understand spending, and stay
                            aware of your budget.
                        </p>

                        <p className="mt-5 leading-7 text-slate-500">
                            Everything you need to build a clearer picture of
                            your finances, without unnecessary complexity.
                        </p>

                    </div>

                </div>

            </section>


            {/* ================= FEATURES ================= */}
            <section
                id="features"
                className="bg-white"
            >

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">

                    <div className="max-w-2xl">

                        <p className="text-sm font-semibold text-purple-600">
                            Features
                        </p>

                        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                            Everything you need to stay on top of your money.
                        </h2>

                        <p className="mt-4 leading-7 text-slate-500">
                            Simple tools designed to give you visibility and
                            control over your everyday finances.
                        </p>

                    </div>


                    <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-2">

                        {features.map((feature) => (
                            <div
                                key={feature.number}
                                className="bg-white p-7 transition-colors hover:bg-purple-50/40 sm:p-8"
                            >

                                <span className="text-xs font-bold text-purple-500">
                                    {feature.number}
                                </span>

                                <h3 className="mt-5 text-lg font-semibold text-slate-900">
                                    {feature.title}
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-slate-500">
                                    {feature.description}
                                </p>

                            </div>
                        ))}

                    </div>

                </div>

            </section>


            {/* ================= CTA / CONTACT ================= */}
            <section
    id="contact"
    className="border-t border-slate-100 bg-slate-50 px-5 py-20 sm:px-8 sm:py-24"
>
    <div className="mx-auto max-w-5xl">

        {/* Section heading */}
        <div className="text-center">

            <p className="text-sm font-semibold uppercase tracking-wider text-purple-600">
                Contact
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Have a question or want to talk?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-500">
                MoneyFlow is an independent project built and maintained by me.
                If you have feedback, ideas, questions, or simply want to connect,
                feel free to reach out.
            </p>

        </div>


        {/* Contact card */}
        <div className="mt-12 grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm md:grid-cols-[1fr_1.4fr]">

            {/* Creator */}
            <div className="flex flex-col justify-between bg-slate-950 p-8 sm:p-10">

                <div>

                    {/* Avatar */}
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-600 text-xl font-bold text-white shadow-lg shadow-purple-950/30">
                        R
                    </div>

                    <p className="mt-6 text-sm font-medium text-purple-400">
                        Creator & Developer
                    </p>

                    <h3 className="mt-2 text-2xl font-bold text-white">
                        Rahul
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-400">
                        Building MoneyFlow to make personal finance management
                        simpler, clearer, and more accessible.
                    </p>

                </div>

                <p className="mt-10 text-xs text-slate-500">
                    Built with curiosity, code, and a lot of coffee.
                </p>

            </div>


            {/* Contact information */}
            <div className="p-8 sm:p-10">

                <h3 className="text-lg font-semibold text-slate-900">
                    Let's connect
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                    Whether you found a bug, have a feature suggestion,
                    or just want to say hello, you can find me here.
                </p>


                <div className="mt-8 space-y-3">

                    {/* LinkedIn */}
                    <a
                        href="YOUR_LINKEDIN_URL"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between rounded-xl border border-slate-200 px-4 py-4 transition-all hover:-translate-y-0.5 hover:border-purple-200 hover:bg-purple-50/50 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
                    >
                        <div className="flex items-center gap-4">

                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-sm font-bold text-blue-600">
                                in
                            </div>

                            <div>
                                <p className="text-sm font-semibold text-slate-900">
                                    LinkedIn
                                </p>

                                <p className="text-xs text-slate-500">
                                    Connect professionally
                                </p>
                            </div>

                        </div>

                        <span className="text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-purple-600">
                            →
                        </span>

                    </a>


                    {/* GitHub */}
                    <a
                        href="YOUR_GITHUB_URL"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between rounded-xl border border-slate-200 px-4 py-4 transition-all hover:-translate-y-0.5 hover:border-purple-200 hover:bg-purple-50/50 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
                    >
                        <div className="flex items-center gap-4">

                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-sm font-bold text-slate-700">
                                GH
                            </div>

                            <div>
                                <p className="text-sm font-semibold text-slate-900">
                                    GitHub
                                </p>

                                <p className="text-xs text-slate-500">
                                    Explore my projects
                                </p>
                            </div>

                        </div>

                        <span className="text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-purple-600">
                            →
                        </span>

                    </a>


                    {/* Email */}
                    <a
                        href="mailto:YOUR_EMAIL@example.com"
                        className="group flex items-center justify-between rounded-xl border border-slate-200 px-4 py-4 transition-all hover:-translate-y-0.5 hover:border-purple-200 hover:bg-purple-50/50 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
                    >
                        <div className="flex items-center gap-4">

                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-50 text-sm font-bold text-purple-600">
                                @
                            </div>

                            <div>
                                <p className="text-sm font-semibold text-slate-900">
                                    Email
                                </p>

                                <p className="text-xs text-slate-500">
                                    Send me a message
                                </p>
                            </div>

                        </div>

                        <span className="text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-purple-600">
                            →
                        </span>

                    </a>

                </div>

            </div>

        </div>

    </div>
</section>

            {/* ================= FOOTER ================= */}
            <footer className="border-t border-slate-100">

                <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">

                    <Link
                        to="/"
                        className="text-lg font-bold tracking-tight text-slate-900"
                    >
                        Money<span className="text-purple-600">Flow</span>
                    </Link>

                    <div className="flex items-center gap-6">

                        <a
                            href="#about"
                            className="text-xs font-medium text-slate-400 transition-colors hover:text-slate-700"
                        >
                            About
                        </a>

                        <a
                            href="#features"
                            className="text-xs font-medium text-slate-400 transition-colors hover:text-slate-700"
                        >
                            Features
                        </a>

                        <a
                            href="#contact"
                            className="text-xs font-medium text-slate-400 transition-colors hover:text-slate-700"
                        >
                            Contact
                        </a>

                    </div>

                    <p className="text-xs text-slate-400">
                        © {new Date().getFullYear()} MoneyFlow
                    </p>

                </div>

            </footer>

        </main>
    );
};

export default Landing;