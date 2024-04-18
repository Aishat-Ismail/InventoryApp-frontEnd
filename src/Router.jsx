import { BrowserRouter, Route, Routes, createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory";
import LogOut from "./pages/LogOut";
import Manage from './pages/Manage';
import Orders from './pages/Orders';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import Suppliers from "./pages/Suppliers";



const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Dashboard />
            },

            {
                path: "/inventory",
                element: <Inventory />
            },

            {
                path: "/logout",
                element: <LogOut />
            },

            {
                path: "/manage",
                element: <Manage />
            },

            {
                path: "/orders",
                element: <Orders />
            },

            {
                path: "/reports",
                element: <Reports />
            },

            {
                path: "/settings",
                element: <Settings />
            },

            {
                path: "/suppliers",
                element: <Suppliers/>
            },

            {
                path: "*",
                element: 'Page Not Found'
            }
        ]
    }


])
export default Router