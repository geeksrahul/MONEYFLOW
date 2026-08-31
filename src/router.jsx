// routing essentials
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
// main layout
import Layout from "./Layout";
// pages
import {Dashboard, Incomes, Expenses, Categories, Profile, Settings, Statement} from "./pages"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route path="/" element={<Dashboard />} handle={{title:"Dashboard | MoneyFlow"}} />
            <Route path="/dashboard" element={<Dashboard />} handle={{title:"Dashboard | MoneyFlow"}} />
            <Route path="/incomes" element={<Incomes />}  handle={{title:"Incomes | MoneyFlow"}}/>
            <Route path="/expenses" element={<Expenses />} handle={{title:"Expenses | MoneyFlow"}} />
            <Route path="/settings" element={<Settings />} handle={{title:"Settings | MoneyFlow"}} />
            <Route path="/categories" element={<Categories />} handle={{title:"Categories | MoneyFlow"}} />
            <Route path="/profile" element={<Profile />} handle={{title:"Profile | MoneyFlow"}} />
            <Route path="/statements" element={<Statement />} handle={{title:"Statements | MoneyFlow"}} />
        </Route>
    )
)

export default router;