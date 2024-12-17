import { LogIn, LogOut } from "lucide-react";
import { Button } from "../ui/button";
import { useAuthHandler } from "@/hooks/useAuthHandler";
import { removeLocalStorage } from "@/helpers/LocalStorage";
import { AvatarFallback, AvatarImage, Avatar } from "../ui/avatar";
import UesrImage from '@/assets/img/shadcn.jpeg';
import { Link } from "react-router-dom";

const Header: React.FC = () => {
    const { auth } = useAuthHandler();
    const handelLogout = async () => {
        try {
            removeLocalStorage('token');
            auth.removeUser();
            
            // Log the exact redirect URI being used
            console.log('Logout Redirect URI:', "http://localhost:5173/");
            
            await auth.signoutRedirect({
                post_logout_redirect_uri: "http://localhost:5173/",
            });
        } catch (error) {
            // Log any errors during logout
            console.error('Logout Error:', error);
        }
    }
    return (
        <>
            <header className="border-b">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="text-2xl font-bold">📚 Bookio</div>
                    <nav className="flex justify-around">
                        <ul className="flex space-x-4 items-center mr-10">
                            <li>
                                <Link to='/'>
                                    <Button variant="ghost">Home</Button>
                                </Link>
                            </li>
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
                        {auth.user?.profile.email &&
                            <div className="flex items-center space-x-4">
                                <Link to='/profile'>
                                    <Avatar className="w-10 h-10">
                                        <AvatarImage src={UesrImage} />
                                        <AvatarFallback>JD</AvatarFallback>
                                    </Avatar>
                                </Link>
                            </div>
                        }
                    </nav>
                </div>
                <p>{ auth.user?.access_token }</p>
            </header >
        </>
    );
}

export default Header;
