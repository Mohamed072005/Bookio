import Layout from "@/layout/Layout";
import HomePage from "@/pages/HomePage";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <HomePage />
            }
        ]
    }
])

export default router;