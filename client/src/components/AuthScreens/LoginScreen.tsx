import { useAuthHandler } from "@/hooks/useAuthHandler"
import { Button } from "../ui/button";

export const LoginScreen = () => {
    const { auth, signOutRedirect } = useAuthHandler();

    return (
        <>
            <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
                <div className="w-[350px] bg-white shadow-md rounded p-6">
                    <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Bibliothèque Municipale</h1>
                    <p className="text-center text-gray-600 mb-6">Veuillez vous connecter pour accéder à nos services.</p>
                    <div className="flex justify-center space-x-4">
                        <Button onClick={() => auth.signinRedirect()}>Se connecter</Button>
                        <Button variant="outline" onClick={signOutRedirect}>Se déconnecter</Button>
                    </div>
                </div>
            </div>
        </>
    );
}