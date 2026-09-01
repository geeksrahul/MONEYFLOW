import { useEffect, useState } from "react";

function useExpenseData() {
    // initial data
    const [expenses, setExpenses] = useState(() => loadData());
    // save data on every change of data
    useEffect(()=>{
        saveData()
    }, [expenses])

    function addExpense(expense) {
        setExpenses(prev => [...prev, expense])
    }
    function removeExpense(id) {
        setExpenses(prev => prev.filter(expense => expense.id !== id))
    }
    function updateExpense(id, newExpense) {
        setExpenses(prev => prev.map(expense => expense.id === id ? newExpense : expense))
    }
    function saveData() {
        localStorage.setItem("expenses", JSON.stringify(expenses))
    }
    function loadData() {
        return JSON.parse(localStorage.getItem("expenses") ?? "[]")
    }
    return {expenses, addExpense, removeExpense, updateExpense};
}

export default useExpenseData;