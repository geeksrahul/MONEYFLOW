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

export {
    getCurrentBalance,
    getTotalExpense,
    getTotalIncome,
}