import Layout from "@/layout/Layout";
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
            }
        ]
    }
])

export default router;