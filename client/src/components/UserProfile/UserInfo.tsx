import { AvatarFallback } from "@radix-ui/react-avatar";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import UesrImage from '@/assets/img/shadcn.jpeg';
import { useAuthHandler } from "@/hooks/useAuthHandler";

interface UserProfile {
    name?: string;
    email?: string;
    'cognito:groups'?: string[];
}

const UserInfo: React.FC = () => {
    const { auth } = useAuthHandler();

    // Extract the role safely
    const userProfile = auth.user?.profile as UserProfile | undefined;
    const role = userProfile?.['cognito:groups']?.[0] || 'No role assigned';

    console.log('Role:', role);

    return (
        <Card>
            <CardHeader>
                <CardTitle>User Information</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex items-center space-x-4 mb-4">
                    <Avatar className="w-20 h-20">
                        <AvatarImage src={UesrImage} />
                        <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                        <h2 className="text-2xl font-bold">{userProfile?.name || 'Unknown User'}</h2>
                        <p className="text-muted-foreground">Member since: Jan 2023</p>
                    </div>
                </div>
                <div className="space-y-2">
                    <p><strong>Email:</strong> {userProfile?.email || 'Email not available'}</p>
                    <p><strong>Role:</strong> {role}</p>
                </div>
                <Button className="w-full mt-4">Edit Profile</Button>
            </CardContent>
        </Card>
    );
};

export default UserInfo;
