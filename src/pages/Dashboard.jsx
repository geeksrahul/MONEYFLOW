import { useEffect } from "react";
import { StatsCard, RecentTransactionCard } from "../components";

const Dashboard = () => {
    useEffect(()=>{
        document.title = "Dashboard | MoneyFlow";
    }, []);
  return (
    <section className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">
          Dashboard
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          Here's what's happening with your money.
        </p>
      </div>

      {/* Summary Cards / Stats Card */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatsCard 
            cardTitle="Total Balance"
            cardMainData={`₹1,24,500`}
            cardSubData="+8.2% this month"
        />
        <StatsCard 
            cardTitle="Income"
            cardMainData={`₹45,000`}
            cardSubData="This month"
        />
        <StatsCard 
            cardTitle="Expenses"
            cardMainData={`₹28,450`}
            cardSubData="8.2% of income"
        />
        <StatsCard 
            cardTitle="Savings"
            cardMainData={`$1,24,500`}
            cardSubData="36.7% of income"
        />
      </div>

      {/* Main Dashboard Content */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[2fr_1fr]">
        {/* Spending Overview */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                Spending Overview
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Your spending over the last few months.
              </p>
            </div>

            <select className="rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-600 outline-none">
              <option>Last 6 months</option>
              <option>This year</option>
            </select>
          </div>

          {/* Chart Placeholder */}
          <div className="mt-6 flex h-64 items-center justify-center rounded-xl bg-gray-50 text-sm text-gray-400">
            Spending Chart
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">
              Recent Transactions
            </h2>

            <button
              type="button"
              className="text-sm font-medium text-purple-600 hover:text-purple-700"
            >
              View all
            </button>
          </div>

          <div className="mt-5 space-y-4">
                <RecentTransactionCard 
                    category={"Grocerray"}
                    time={"Today"}
                    amount={"₹2450"}
                    spend={true}
                />
                <RecentTransactionCard 
                    category={"Grocerray"}
                    time={"Today"}
                    amount={"₹450"}
                    spend={false}
                />
                <RecentTransactionCard 
                    category={"Grocerray"}
                    time={"Today"}
                    amount={"₹250"}
                    spend={false}
                />
                <RecentTransactionCard 
                    category={"Grocerray"}
                    time={"Today"}
                    amount={"₹2450"}
                    spend={true}
                />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Budget Progress */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                Monthly Budget
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                ₹28,450 of ₹40,000 spent
              </p>
            </div>

            <span className="text-sm font-medium text-gray-700">
              71%
            </span>
          </div>

          <div className="mt-5 h-3 overflow-hidden rounded-full bg-gray-100">
            <div className="h-full w-[71%] rounded-full bg-purple-600" />
          </div>

          <p className="mt-3 text-sm text-gray-500">
            ₹11,550 remaining this month
          </p>
        </div>

        {/* Top Categories */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-gray-900">
            Top Spending Categories
          </h2>

          <div className="mt-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Food</span>
              <span className="text-sm font-medium text-gray-900">
                ₹8,250
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Shopping</span>
              <span className="text-sm font-medium text-gray-900">
                ₹6,800
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Transport</span>
              <span className="text-sm font-medium text-gray-900">
                ₹4,200
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Bills</span>
              <span className="text-sm font-medium text-gray-900">
                ₹3,750
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;