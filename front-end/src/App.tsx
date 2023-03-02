import { AuthProvider } from "./context/AuthContext";
import RoutesMain from "./routes/Router";
import Global from "./styles/global";

function App() {
  return (
    <AuthProvider>
      <Global />
      <RoutesMain />
    </AuthProvider>
  );
}

export default App;
