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
                path: '', // Nested paths inherit the parent path
                element: <HomePage />,
            },
            {
                path: 'profile',
                element: <ProfilePage />,
            },
        ],
    },
    {
        path: '/dashboard',
        element: <AdminLayout />,
        children: [
            {
                path: '', // Match /dashboard
                element: <DashboardPage />,
            },
            {
                path: 'books', // Match /dashboard/books
                element: <BooksPage />,
            },
        ],
    },
]);

export default router;
