import AdminLayout from "@/layout/AdminLayout";
import Layout from "@/layout/Layout";
import BooksPage from "@/pages/AdminPages/BooksPage";
import DashboardPage from "@/pages/AdminPages/DashboardPage";
import HomePage from "@/pages/HomePage";
import ProfilePage from "@/pages/ProfilePage";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <HomePage />
            },
            {
                path: '/profile',
                element: <ProfilePage />
            },
        ],
    }, 
    {
        path: '/dashboard',
        element: <AdminLayout />,
        children: [
            {
                path:  '/dashboard',
                element: <DashboardPage />
            },
            {
                path: '/dashboard/books',
                element: <BooksPage />
            }
        ]
    },
])

export default router;