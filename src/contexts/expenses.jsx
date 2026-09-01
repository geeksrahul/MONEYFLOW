import { createContext, useContext } from "react";
import { useExpenseData } from "../hooks";

// define context
const ExpensesContext = createContext({
    expenses : [],
    addExpense : () => {},
    updateExpense : () => {},
    removeExpense : () => {},
})

// define context provider
const ExpensesContextProvider = ({children}) => {
    const {expenses, addExpense, removeExpense, updateExpense} = useExpenseData();
    return(
        <ExpensesContext.Provider value={{expenses, addExpense, updateExpense, removeExpense}}>
            {children}
        </ExpensesContext.Provider>
    );
}

// abstraction layer for using category
const useExpenses = () => useContext(ExpensesContext);

// exporting
export {useExpenses, ExpensesContextProvider}