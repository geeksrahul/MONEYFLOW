import { createContext, useContext } from "react";
import { useIncomeData } from "../hooks";

const IncomesContext = createContext({
    incomes : [],
    addIncome : ()=>{},
    removeIncome : ()=>{},
    updateIncome : ()=>{},
})

const IncomesContextProvider = ({children}) => {
    const {incomes, addIncome, removeIncome, updateIncome} = useIncomeData();
    return (
        <IncomesContext.Provider value={{incomes, addIncome, removeIncome, updateIncome}}>
            {children}
        </IncomesContext.Provider>
    );
}

const useIncomes = () => useContext(IncomesContext)

export {IncomesContextProvider, useIncomes}