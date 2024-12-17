import { useAuth } from "react-oidc-context"

export const useAuthHandler = () => {
    const auth = useAuth();

    const signOutRedirect = () => {
        const clientId = import.meta.env.VITE_CLIENT_ID;
        const logoutUri = "http://localhost:5173/";
        const cognitoDomain = import.meta.env.VITE_COGNETO_DOMAIN;
        window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
    };

    return { auth, signOutRedirect };
}