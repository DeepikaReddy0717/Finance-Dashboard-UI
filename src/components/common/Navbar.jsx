import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import RoleSwitcher from "./RoleSwitcher";

const Navbar = () => {
  const { theme, toggleTheme, role } = useContext(AppContext);

  return (
    <div
      className="flex justify-between items-center px-6 py-4 rounded-2xl shadow-md border
      bg-white/80 backdrop-blur-md border-gray-200
      dark:bg-gray-900 dark:border-gray-700 transition-all duration-300"
    >
      <div>
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
          Finance Dashboard
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Track your money smartly
        </p>
      </div>

      <div className="flex items-center gap-4">

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="px-3 py-1 rounded-lg text-sm 
          bg-gray-100 dark:bg-gray-800 dark:text-white 
          hover:scale-105 transition"
        >
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>

        {/* Role */}
        <span className="text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300">
          {role.toUpperCase()}
        </span>

        <RoleSwitcher />

        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 
        flex items-center justify-center text-white font-bold">
          D
        </div>
      </div>
    </div>
  );
};

export default Navbar;