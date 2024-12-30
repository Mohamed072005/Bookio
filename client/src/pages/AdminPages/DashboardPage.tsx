import { BooksMainComponent } from "@/components/AdminScreens/BooksScreen/BooksMainComponent";
import { DashboardStats } from "@/components/AdminScreens/DashboardStats";

const DashboardPage = () => {
    return (
        <>
            <DashboardStats />
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mt-8">
                <div className="xl:col-span-2">
                    <BooksMainComponent />
                </div>
            </div>
        </>
    );
}

export default DashboardPage;
