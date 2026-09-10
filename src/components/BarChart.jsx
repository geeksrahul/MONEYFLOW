import React, { useEffect, useState } from 'react'
import { getFullMonth, getLastSixMonth } from '../utils/DateTime';
import { getTotalExpense, getExpensesByMonth } from '../utils/TransactionStats';
import { useTransaction } from '../contexts';
import Bar from './Bar'

function BarChart() {
    const {transactions} = useTransaction()
    const [maxExpense, setMaxExpense] = useState(0);
    const [expenseData, setExpenseData] = useState([])

    useEffect(()=>{
        let max = 0;
        const data = [];
        getLastSixMonth().forEach(month => {
            const thisMonthExpenses = getExpensesByMonth(transactions, month, 2026)
            const totalExpenseThisMonth = getTotalExpense(thisMonthExpenses);
            if(max <= totalExpenseThisMonth) {
                max = totalExpenseThisMonth;
            }
            data.push({name:getFullMonth(month), total: totalExpenseThisMonth})
        })
        setExpenseData(data);
        setMaxExpense(max);
    }, [transactions]);

    return (
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
            </div>


            {/* Bar Chart */}

            {transactions.length <= 0 ? (
                <div className='h-84 grid place-items-center bg-gray-100 rounded-xl'> No Record Found </div>
            ) : (
                <div className="mt-8 rounded-xl bg-gray-50 px-4 py-6 sm:px-6">
                    <div className="flex h-64 items-end justify-between gap-3">
                        {/* Bar */}
                        {expenseData.map((month) => {
                            const percentage = Math.round(month.total/maxExpense * 100);
                            return (
                                // i will fix the key later
                                <Bar key={month.name} percentage={percentage} name={month.name} amount={month.total}/> 
                            )                        
                        })}
                    </div>
                </div>
            )}

        </div>
    )
}

export default BarChart