import { Footer } from "@/components/HomeScreen/Footer";
import Header from "@/components/HomeScreen/Header";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
    return (
        <>
            <div className="min-h-screen bg-background text-foreground">
                <Header />
                <main>
                    <Outlet />
                </main>
                <Footer />
            </div>
        </>
    );
}

export default Layout;
