import { ScrollArea } from "@radix-ui/react-scroll-area";
import { BarChart, Calendar, LayoutDashboard, Library, Settings, Users } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const AdminSidebar: React.FC = () => {
    return (
        <>
            <div className="hidden border-r bg-background lg:block lg:w-64">
                <ScrollArea className="h-[calc(100vh-4rem)]">
                    <div className="space-y-4 py-4">
                        <div className="px-3 py-2">
                            <div className="space-y-1">
                                <Link to='/dashboard'>
                                    <Button variant="ghost" className="w-full justify-start">
                                        <LayoutDashboard className="mr-2 h-4 w-4" />
                                        Dashboard
                                    </Button>
                                </Link>
                                <Link to='/dashboard/books'>
                                    <Button variant="ghost" className="w-full justify-start">
                                        <Library className="mr-2 h-4 w-4" />
                                        Books
                                    </Button>
                                </Link>
                                <Button variant="ghost" className="w-full justify-start">
                                    <Users className="mr-2 h-4 w-4" />
                                    Users
                                </Button>
                                <Button variant="ghost" className="w-full justify-start">
                                    <Calendar className="mr-2 h-4 w-4" />
                                    Loans
                                </Button>
                                <Button variant="ghost" className="w-full justify-start">
                                    <BarChart className="mr-2 h-4 w-4" />
                                    Reports
                                </Button>
                                <Button variant="ghost" className="w-full justify-start">
                                    <Settings className="mr-2 h-4 w-4" />
                                    Settings
                                </Button>
                            </div>
                        </div>
                    </div>
                </ScrollArea>
            </div>
        </>
    );
}

export default AdminSidebar;
