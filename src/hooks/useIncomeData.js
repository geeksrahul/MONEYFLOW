import { useEffect, useState } from "react";

function useIncomeData() {
    // initial data
    const [incomes, setIncomes] = useState(() => loadData());
    // save data on every change of data
    useEffect(()=>{
        saveData()
    }, [incomes])

    function addIncome(income) {
        setIncomes(prev => [...prev, income])
    }
    function removeIncome(id) {
        setIncomes(prev => prev.filter(income => income.id !== id))
    }
    function updateIncome(id, newIncome) {
        setIncomes(prev => prev.map(income => income.id === id ? newIncome : income))
    }
    function saveData() {
        localStorage.setItem("incomes", JSON.stringify(incomes))
    }
    function loadData() {
        return JSON.parse(localStorage.getItem("incomes") ?? "[]")
    }
    return {incomes, addIncome, removeIncome, updateIncome};
}

export default useIncomeData;