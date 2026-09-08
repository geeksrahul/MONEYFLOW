// routing essentials
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
// main layout
import Layout from "../Layout";
// pages
import {Dashboard, Incomes, Expenses, Categories, Profile, Settings, Statement} from "../pages/app"

import { Login, Logout, Register } from "../pages/auth";
import ProtectedRoute from "./ProtectedRoute";
import Landing from "../pages/public/Landing";
const router = createBrowserRouter(

    createRoutesFromElements(
        <Route>
            {/* Public */}
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {/* Protected */}
            <Route element={<ProtectedRoute />}>
                <Route path="/app" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="incomes" element={<Incomes />}  />
                    <Route path="expenses" element={<Expenses />}  />
                    <Route path="settings" element={<Settings />}  />
                    <Route path="categories" element={<Categories />}  />
                    <Route path="profile" element={<Profile />}  />
                    <Route path="statements" element={<Statement />}  />
                </Route>
            </Route>
        </Route>
    )
)

export default router;