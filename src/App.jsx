import { useContext } from "react";
import { AppContext } from "./context/AppContext";
import ViewerDashboard from "./pages/ViewerDashboard";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  const { role } = useContext(AppContext);

  return role === "admin" ? <AdminDashboard /> : <ViewerDashboard />;
}

export default App;