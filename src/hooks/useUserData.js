const useUserData = () => {
    const [user, setUser] = useState(() => loadData())

    const updateUserData = (userData) => {
        setUser(userData);
    }

    const deleteUserData = () => {
        localStorage.removeItem("moneyflow-user");
    }

    // save & load 
    const saveData = () => {
        localStorage.setItem("moneyflow-user", JSON.stringify(user))
    }
    const loadData = () => {
        return JSON.parse(localStorage.getItem("moneyflow-user") ?? "[]")
    }

    return {user, updateUserData, deleteUserData};
}

export default useUserData;