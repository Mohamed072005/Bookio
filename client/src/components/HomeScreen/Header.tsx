import { LogIn, LogOut } from "lucide-react";
import { Button } from "../ui/button";
import { useAuthHandler } from "@/hooks/useAuthHandler";
import { removeLocalStorage } from "@/helpers/LocalStorage";

const Header: React.FC = () => {
    const { signOutRedirect, auth } = useAuthHandler();
    const handelLogout = () => {
        removeLocalStorage('token');
        signOutRedirect();
    }
    return (
        <>
            <header className="border-b">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="text-2xl font-bold">📚 Bookio</div>
                    <nav>
                        <ul className="flex space-x-4">
                            <li><Button variant="ghost">Home</Button></li>
                            <li><Button variant="ghost">Catalog</Button></li>
                            <li><Button variant="ghost">About</Button></li>
                            <li><Button variant="ghost">Contact</Button></li>
                            {auth.user?.profile.email &&
                                <li>
                                    <Button onClick={() => handelLogout()} variant="ghost">
                                        <LogOut className='mr-2 h-5 w-5' />
                                        Logout
                                    </Button>
                                </li>
                            }
                            {!auth.user?.profile.email &&
                                <li>
                                    <Button onClick={() => auth.signinRedirect()} variant="ghost">
                                        <LogIn className='mr-2 h-5 w-5' />
                                        Login
                                    </Button>
                                </li>
                            }

                        </ul>
                    </nav>
                </div>
            </header >
        </>
    );
}

export default Header;
