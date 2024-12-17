import { BorrowedBooks } from "@/components/UserProfile/BorrowedBooks";
import { Preferences } from "@/components/UserProfile/Preferences";
import { ReadingHistory } from "@/components/UserProfile/ReadingHistory";
import UserInfo from "@/components/UserProfile/UserInfo";
import { useAuthHandler } from "@/hooks/useAuthHandler";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProfilePage: React.FC = () => {
    const { auth } = useAuthHandler();
    const navigate = useNavigate();
    useEffect(() => {
        if(!auth.user) {
            navigate('/');
        }
    }, [auth])
    return (
        <>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-8">Your profile</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-1">
                        <UserInfo />
                        <Preferences />
                    </div>
                    <div className="md:col-span-2">
                        <BorrowedBooks />
                        <ReadingHistory />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProfilePage;
