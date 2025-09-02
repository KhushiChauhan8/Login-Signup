import AuthForm from "./components/AuthForm";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <AuthForm />
    </AuthProvider>
  );
}

export default App;
