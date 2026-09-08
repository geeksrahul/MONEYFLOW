import { Outlet } from "react-router-dom";
import { MainPageWrapper, Header, Sidebar } from "./components/";
import {CategoriesContextProvider, TransactionContextProvider, UserContextProvider} from "./contexts";

const Layout = () => {
    
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