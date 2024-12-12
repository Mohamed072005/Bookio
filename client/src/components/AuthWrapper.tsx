import { useAuthHandler } from "@/hooks/useAuthHandler";
import { LoginScreen } from "./AuthScreens/LoginScreen";
import { ErrorScreen } from "./AuthScreens/ErrorScreen";
import { LoadingScreen } from "./AuthScreens/LoadingScreen";

interface AuthWrapperProps {
    children: React.ReactNode;
}

export const AuthWrapper: React.FC<AuthWrapperProps> = ({ children }) => {
    const { auth } = useAuthHandler()

    if (auth.isLoading) return <LoadingScreen />;
    if (auth.error) return <ErrorScreen error={auth.error.message} />;
    if (!auth.isAuthenticated) return <LoginScreen />;

    return <> { children } </>;
}