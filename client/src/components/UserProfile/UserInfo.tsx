import { AvatarFallback } from "@radix-ui/react-avatar";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import UesrImage from '@/assets/img/shadcn.jpeg';
import { useAuthHandler } from "@/hooks/useAuthHandler";

interface UserProfile {
    'cognito:groups'?: string[]; // Optional array of strings
}

const UserInfo: React.FC = () => {
    const { auth } = useAuthHandler();
    console.log((auth.user?.profile as UserProfile)['cognito:groups']?.[0]);

    return (
        <>
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
                            <h2 className="text-2xl font-bold">{auth.user?.profile.name}</h2>
                            <p className="text-muted-foreground">Member since: Jan 2023</p>

                        </div>
                    </div>
                    <div className="space-y-2">
                        <p><strong>Email:</strong> {auth.user?.profile.email}</p>
                        <p><strong>Role:</strong> { (auth.user?.profile as UserProfile)['cognito:groups']?.[0] }</p>
                    </div>
                    <Button className="w-full mt-4">Edit Profile</Button>
                </CardContent>
            </Card>
        </>
    );
}

export default UserInfo;
