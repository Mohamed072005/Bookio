import { BooksList } from "@/components/AdminScreens/BooksList";
import { DashboardStats } from "@/components/AdminScreens/DashboardStats";

const DashboardPage = () => {
    return (
        <>
            <DashboardStats />
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mt-8">
                <div className="xl:col-span-2">
                    <BooksList />
                </div>
            </div>
        </>
    );
}

export default DashboardPage;
