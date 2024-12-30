import { RouterProvider } from "react-router-dom";
import { AuthWrapper } from "./components/AuthWrapper"
import './App.css'
import { useEffect } from "react";
import { useAuthHandler } from "./hooks/useAuthHandler";
import { setLocalStorage } from "./helpers/LocalStorage";
import router from "./router/router";

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
      <RouterProvider router={router} />
    </AuthWrapper>
  )
}

export default App
