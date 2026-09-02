import { createContext,  useContext } from "react";
import { useUserData } from "../hooks";

const UserContext = createContext({
    user : {
        personalData : {},
        financialData : {}
    },
    deleteUserData : () => {},
    updateUserData : (data) => {},
})

const UserContextProvider = ({children}) => {
    const {user, updateUserData, deleteUserData} = useUserData()
    return (
        <UserContext.Provider value={{user, deleteUserData, updateUserData}}>
            {children}
        </UserContext.Provider>
    )
}

const useUser = () => useContext(UserContext);

export {useUser, UserContextProvider}