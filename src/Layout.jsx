import { Outlet } from "react-router-dom";
import { MainPageWrapper, Header, Sidebar } from "./components";

const Layout = () => {
    return(
        <div className="min-h-screen w-full grid grid-cols-[96px_1fr] grid-rows-[72px_1fr] [grid-template-areas:'sidebar_header'_'sidebar_main'] ">
            <Header />
            <MainPageWrapper className="[grid-area:main]">
                <Outlet />
            </MainPageWrapper>
            <Sidebar />
        </div>
    );
}

export default Layout;