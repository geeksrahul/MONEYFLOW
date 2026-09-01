import { Outlet } from "react-router-dom";
import { MainPageWrapper, Header, Sidebar } from "./components";
import {ExpensesContextProvider, IncomesContextProvider, CategoriesContextProvider} from "./contexts";

const Layout = () => {
    return(
        <CategoriesContextProvider>
            <IncomesContextProvider>
                <ExpensesContextProvider>
                    <div className="min-h-screen w-full grid grid-cols-[96px_1fr] grid-rows-[72px_1fr] [grid-template-areas:'sidebar_header'_'sidebar_main'] ">
                        <Header />
                        <MainPageWrapper className="[grid-area:main]">
                            <Outlet />
                        </MainPageWrapper>
                        <Sidebar />
                    </div>
                </ExpensesContextProvider>
            </IncomesContextProvider>
        </CategoriesContextProvider>
        
    );
}

export default Layout;