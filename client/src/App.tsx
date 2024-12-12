import { Outlet } from "react-router-dom";
import { AuthWrapper } from "./components/AuthWrapper"
import './App.css'
import { useEffect } from "react";
import { useAuthHandler } from "./hooks/useAuthHandler";
import { setLocalStorage } from "./helpers/LocalStorage";

const AuthenticatedContent: React.FC = () => {
  const { auth } = useAuthHandler();
  useEffect(() => {
    if(auth.user?.access_token){
      setLocalStorage('token', auth.user.access_token);
    }
  })
  return (
    <Outlet />
  );
};

const App: React.FC = () => {
  return (
    <AuthWrapper>
      <AuthenticatedContent />
    </AuthWrapper>
  )
}

export default App
