import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const RoleSwitcher = () => {
  const { role, setRole } = useContext(AppContext);

  return (
    <div className="flex bg-gray-100 rounded-xl p-1">
      
      <button
        onClick={() => setRole("viewer")}
        className={`px-3 py-1 text-sm rounded-lg transition ${
          role === "viewer"
            ? "bg-white shadow text-blue-500"
            : "text-gray-500"
        }`}
      >
        Viewer
      </button>

      <button
        onClick={() => setRole("admin")}
        className={`px-3 py-1 text-sm rounded-lg transition ${
          role === "admin"
            ? "bg-white shadow text-blue-500"
            : "text-gray-500"
        }`}
      >
        Admin
      </button>
    </div>
  );
};

export default RoleSwitcher;