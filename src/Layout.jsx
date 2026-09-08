import { Outlet, useSearchParams } from "react-router-dom";
import { MainPageWrapper, Header, Sidebar } from "./components";
import {CategoriesContextProvider, TransactionContextProvider, UserContextProvider} from "./contexts";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./features/auth/authSlice";
import { useEffect, useState } from "react";
import { Login } from "./pages";

const Layout = () => {
    const [auth, setAuth] = useState(false)
    const dispath = useDispatch()
    const authStatus = useSelector(state => state.auth.authStatus);
    useEffect(()=>{
        setAuth(authStatus);
    }, [authStatus]) 
    return(
        <UserContextProvider>
            <CategoriesContextProvider>
                <TransactionContextProvider>
                    <div className="min-h-screen w-full grid grid-cols-[96px_1fr] grid-rows-[72px_1fr] [grid-template-areas:'sidebar_header'_'sidebar_main'] ">
                        <Header />
                        <MainPageWrapper className="[grid-area:main]">
                           <Outlet />
                        </MainPageWrapper>
                        <Sidebar />
                    </div>
                </TransactionContextProvider>
            </CategoriesContextProvider>
        </UserContextProvider>
        
    );
}

export default Layout;