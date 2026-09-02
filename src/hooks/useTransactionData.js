import { useState, useEffect } from "react";

const useTransactionData = () => {
     // initial data
    const [transactions, setTransactions] = useState(() => loadData());
    // save data on every change of data
    useEffect(()=>{
        saveData()
    }, [transactions]);
    // add, update, delete
    function addTransaction(transaction) {
        try {
            setTransactions(prev => [...prev, transaction]);
            return transaction;
        } catch (error) {
            console.error("can't add data");
            return null;
        }
        
    }
    function removeTransaction(id) { 
        setTransactions(prev => prev.filter(transaction => transaction.id !== id))
    }
    function updateTransaction(id, newTransaction) {
        setTransactions(prev => prev.mapt(transaction => transaction.id === id ? newTransaction : transaction))
    }
    // save & load
    function saveData() {
        localStorage.setItem(
            "transactions",
            JSON.stringify(transactions)
        );
    }
   function loadData() {
        const data = localStorage.getItem("transactions");
        const parsedData = JSON.parse(data ?? "[]");
        return parsedData;  
    }
    // returning state and method
    return {transactions, addTransaction, removeTransaction, updateTransaction};
}

export default useTransactionData;