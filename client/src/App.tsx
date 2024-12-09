import { AuthWrapper } from "./components/AuthWrapper"
import { useAuthHandler } from "./hooks/useAuthHandler";

const AuthenticatedContent: React.FC = () => {
  const { auth } = useAuthHandler();

  return (
    <div>
      <h1>Welcome to the Authenticated Area</h1>
      <p>Hello, <strong>{auth.user?.profile.email}</strong>!</p>
      <p>Your ID Token: {auth.user?.id_token}</p>
      <p>Your Access Token: {auth.user?.access_token}</p>
      <p>Your Refresh Token: {auth.user?.refresh_token}</p>
      <button onClick={() => auth.removeUser()}>Sign Out</button>
    </div>
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
