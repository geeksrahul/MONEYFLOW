import { useEffect, useState } from "react";

function useCategoryData() {
    // initial data
    const [categories, setCategories] = useState(() => loadData());
    // save data on every change of data
    useEffect(()=>{
        saveData()
    }, [categories])
    // add, update, delete
    function addCategory(category) {
        setCategories(prev => [...prev, category])
    }
    function removeCategory(id) { 
        setCategories(prev => prev.filter(category => category.id !== id))
    }
    function updateCategory(id, newCategory) {
        setCategories(prev => prev.map(category => category.id === id ? newCategory : category))
    }
    // save & load
    function saveData() {
        localStorage.setItem("categories", JSON.stringify(categories))
    }
    function loadData() {
        return JSON.parse(localStorage.getItem("categories") ?? "[]")
    }
    // returning state and method
    return {categories, addCategory, removeCategory, updateCategory};
}

export default useCategoryData;