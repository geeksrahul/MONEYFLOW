import { useContext, createContext } from "react";
import {useCategoryData} from "../hooks";

// define context
const CategoriesContext = createContext({
    categories : [],
    addCategory : () => {},
    removeCategory : () => {},
    updateCategory : () => {},
});

// define context provider
const CategoriesContextProvider = ({children}) => {
    const {categories, addCategory, removeCategory, updateCategory } = useCategoryData();
    return (
        <CategoriesContext.Provider value={{categories, addCategory, removeCategory, updateCategory}}>
            {children}
        </CategoriesContext.Provider>
    )
}

// abstraction layer for using category
const useCategory = () => useContext(CategoriesContext);

// exporting
export {
    CategoriesContextProvider,
    useCategory
}