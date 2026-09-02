import { useEffect, useState } from "react";

const useUserData = () => {
    const [user, setUser] = useState(() => loadData())
    
    useEffect(()=>{
        saveData();
    }, [user])

    const updateUserData = (userData) => {
        setUser(userData);
    }

    const deleteUserData = () => {
        localStorage.removeItem("moneyflow-user");
    }

    const updateImage = (imgsrc) => {
        
    }

    // save & load 
    const saveData = () => {
        localStorage.setItem("moneyflow-user", JSON.stringify(user))
    }
    function loadData () {
        return JSON.parse(localStorage.getItem("moneyflow-user") ?? "[]")
    }

    return {user, updateUserData, deleteUserData};
}

export default useUserData;