import AdminHeader from "@/components/AdminScreens/AdminHeader";
import AdminSidebar from "@/components/AdminScreens/AdminSidebar";
import { useAuthHandler } from "@/hooks/useAuthHandler";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const AdminLayout: React.FC = () => {
    // const { auth } = useAuthHandler();
    // console.log(auth.user);
    // const navigate = useNavigate();
    // useEffect(() => {
    //     if(!auth.user) {
    //         navigate('/');
    //     }
    // }, [auth])
    return (
        <>
            <div className="h-screen bg-background">
                <AdminHeader />
                <div className="flex">
                    <AdminSidebar />
                    <main className="flex-1 p-8">
                        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
                        <Outlet />
                    </main>
                </div>
            </div>
        </>
    );
}

export default AdminLayout;
