import { Outlet } from "react-router-dom";
import { AuthWrapper } from "./components/AuthWrapper"
import './App.css'
import { useEffect } from "react";
import { useAuthHandler } from "./hooks/useAuthHandler";
import { setLocalStorage } from "./helpers/LocalStorage";

const App: React.FC = () => {
  const { auth } = useAuthHandler();
  console.log("Hello");
  useEffect(() => {
    if (auth.user?.access_token) {
      setLocalStorage('token', auth.user.access_token);
      console.log(auth.user.access_token);
    }
  }, [])
  return (
    <AuthWrapper>
      <Outlet />
    </AuthWrapper>
  )
}

export default App
