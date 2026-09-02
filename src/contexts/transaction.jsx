import { createContext, useContext } from "react";
import { useTransactionData } from "../hooks";

const TransactionContext = createContext({
    transactions: [],
    addTransaction : ()=>{},
    removeTransaction : (id)=>{},
    updateTransaction : (id, transaction) => {}
})

const TransactionContextProvider = ({children}) => {
    const {transactions, addTransaction, removeTransaction, updateTransaction} = useTransactionData();
    return (
        <TransactionContext.Provider value={{transactions, addTransaction, removeTransaction, updateTransaction}}>
            {children}
        </TransactionContext.Provider>
    );
}

const useTransaction = () => useContext(TransactionContext);

export {useTransaction, TransactionContextProvider}