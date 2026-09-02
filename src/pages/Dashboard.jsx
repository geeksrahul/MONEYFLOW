import { useEffect } from "react";
import { StatsCard, RecentTransactionCard } from "../components";
import {useCategory, useTransaction} from "../contexts"
import { getCurrentBalance, getTotalExpense, getTotalExpenseByCategory, getTotalIncome, sortTransactionsByTime } from "../utils/TransactionStats";
import { Link } from "react-router-dom";

const Dashboard = () => {

  const {transactions} = useTransaction();
  const {categories} = useCategory();


  const currentBalance = getCurrentBalance(transactions)
  const totalExpense = getTotalExpense(transactions)
  const totalIncome = getTotalIncome(transactions)

  const budget = 70000;
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
            cardMainData={currentBalance}
            cardSubData="This month"
        />
        <StatsCard 
            cardTitle="Income"
            cardMainData={totalIncome}
            cardSubData="This month"
        />
        <StatsCard 
            cardTitle="Expenses"
            cardMainData={totalExpense}
            cardSubData="8.2% of income"
        />
        <StatsCard 
            cardTitle="Budget"
            cardMainData={budget}
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

            <Link
              to="/statements"
              className="text-sm font-medium text-purple-600 hover:text-purple-700"
            >
              View all
            </Link>
          </div>

          <div className="mt-5 space-y-4">

            {
            sortTransactionsByTime(transactions, false)
            .slice(0,5)
            .map(transaction => (
                <RecentTransactionCard 
                    title={transaction.title}
                    time={transaction.date}
                    amount={transaction.amount}
                    spend={transaction.type==="expense"}
                />
            ))}
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
                ₹{totalExpense} of ₹{budget} spent
              </p>
            </div>

            <span className="text-sm font-medium text-gray-700">
              {Math.floor(getTotalExpense(transactions)/budget*100)}%
            </span>
          </div>

          <div className="mt-5 h-3 overflow-hidden rounded-full bg-gray-100">
            <div className={`h-full w-[${(Math.floor(totalExpense/budget)*100)}%] rounded-full bg-purple-600`} />
          </div>

          <p className="mt-3 text-sm text-gray-500">
            ₹{budget - totalExpense} remaining this month
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-gray-900">
            Top Spending Categories
          </h2>

          <div className="mt-5 space-y-4">
            {/* Top Categories */}
            {categories
            .filter(category => category.type === "expense")
            .slice(0,3)
            .map(category => (
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{category.title}</span>
                <span className="text-sm font-medium text-gray-900">
                  ₹{getTotalExpenseByCategory(transactions, category.title)}
                </span>
              </div>
            ))
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;