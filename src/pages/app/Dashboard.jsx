import { useEffect } from "react";
import { StatsCard, RecentTransactionCard, AmountWrapper, BarChart} from "../../components";
import { useCategory, useTransaction, useUser } from "../../contexts"
import { getCurrentBalance, getTotalExpense, getTotalExpenseByCategory, getTotalIncome, sortTransactionsByTime } from "../../utils/TransactionStats";
import { Link } from "react-router-dom";
const Dashboard = () => {

  const { transactions } = useTransaction();
  const { categories } = useCategory();
  const { user } = useUser();

  const budget = Number(user?.financialData?.budget || 0)

  const currentBalance = getCurrentBalance(transactions)
  const totalExpense = getTotalExpense(transactions)
  const totalIncome = getTotalIncome(transactions)
  const percentage = Math.round(totalExpense / budget * 100);

  console.log(totalExpense, budget, percentage);


  useEffect(() => {
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
        <BarChart />
        {/* Recent Transactions */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">
              Recent Transactions
            </h2>

            <Link
              to="/app/statements"
              className="text-sm font-medium text-purple-600 hover:text-purple-700"
            >
              View all
            </Link>
          </div>

          <div className="h-84 mt-5 space-y-4">


            {
              transactions.length<=0 ?<div className="h-full w-full bg-gray-100 rounded-lg grid place-items-center"> No Transaction Man</div> :
              sortTransactionsByTime(transactions, false)
                .slice(0, 5)
                .map(transaction => (
                  <RecentTransactionCard
                    key={transaction.id}
                    title={transaction.title}
                    time={transaction.date}
                    amount={transaction.amount}
                    spend={transaction.type === "expense"}
                  />
                ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Budget Progress */}
        {transactions.length > 0 && (

        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                Monthly Budget
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                <AmountWrapper amount={totalExpense} /> of <AmountWrapper amount={budget} /> spent
              </p>
            </div>

            <span className="text-sm font-medium text-gray-700">
              {percentage}%
            </span>
          </div>

          <div className="mt-5 h-3 overflow-hidden rounded-full bg-gray-100">
            <div className={`h-full rounded-full bg-purple-600`} style={{ width: `${percentage}%` }} />
          </div>

          <p className="mt-3 text-sm text-gray-500">
            <AmountWrapper amount={budget - totalExpense} /> remaining this month
          </p>
        </div>
        )}


        {categories.length >0 && (

        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-gray-900">
            Top Spending Categories
          </h2>

          <div className="mt-5 space-y-4">
            {/* Top Categories */}
            {categories
              .filter(category => category.type === "expense")
              .slice(0, 3)
              .map(category => (
                <div className="flex items-center justify-between" key={category.id}>
                  <span className="text-sm text-gray-600">{category.title}</span>
                  <span className="text-sm font-medium text-gray-900">
                    <AmountWrapper amount={getTotalExpenseByCategory(transactions, category.title)} />
                  </span>
                </div>
              ))
            }
          </div>
        </div>
        )}
      </div>
    </section>
  );
};

export default Dashboard;