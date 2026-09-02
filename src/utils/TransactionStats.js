const getCurrentBalance = (transactions) => {
    return transactions.reduce((balance, transaction) => {
        const amount = Number(transaction.amount);
        return transaction.type === "income"
            ? balance + amount
            : balance - amount;
    }, 0);
}

const getTotalIncome = (transactions) => {
     return transactions.reduce((income, transaction) => {
        const amount = Number(transaction.amount);
        return transaction.type === "income" ? income + amount : income;
    }, 0)
}

const getTotalExpense = (transactions) => {
    return transactions.reduce((expense, transaction) => {
        const amount = Number(transaction.amount);
        return transaction.type === "expense" ? expense + amount : expense;
    }, 0)
}

const getTotalExpenseByCategory = (transactions, category) => {
    return transactions.reduce((expense, transaction) => {
        const amount = Number(transaction.amount);
        if(transaction.type === "expense" && transaction.category === category) {
            return expense + amount;
        } else {
            return expense;
        }
    }, 0)
}

const sortTransactionsByTime = (transactions, asc = true) => {
    return [...transactions].sort((a, b) => asc ? new Date(a.date) - new Date(b.date) : new Date(b.date) - new Date(a.date))
}
export {
    getCurrentBalance,
    getTotalExpense,
    getTotalIncome,
    getTotalExpenseByCategory,
    sortTransactionsByTime
}