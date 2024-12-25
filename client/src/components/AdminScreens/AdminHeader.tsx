import { Bell, Settings } from "lucide-react";
import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { AvatarFallback } from "../ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";

const AdminHeader: React.FC = () => {
    return (
        <>
            <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="flex h-16 items-center px-4 gap-4">
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold">📚 Library Admin</h2>
                    </div>
                    <div className="flex items-center gap-4">
                        <Button variant='ghost' size='icon'>
                            <Bell className="h-4 w-4" />
                        </Button>
                        <Button variant='ghost' size='icon'>
                            <Settings className="h-4 w-4" />
                        </Button>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                                    <Avatar>
                                        <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Admin" />
                                        <AvatarFallback>AD</AvatarFallback>
                                    </Avatar>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56" align="end">
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Profile</DropdownMenuItem>
                                <DropdownMenuItem>Settings</DropdownMenuItem>
                                <DropdownMenuItem>Sign out</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </header>
        </>
    );
}

export default AdminHeader;
