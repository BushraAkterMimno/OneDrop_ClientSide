import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { FaUser, FaHome, FaPlus, FaList, FaUsers } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Logo from "../assets/logo.png";

const DashboardLayout = () => {
  const { logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white p-6 hidden md:block">
        <div className="flex items-center gap-2 mb-6">
          <img src={Logo} alt="OneDrop Logo" className="w-8" />
          <h2 className="text-2xl font-bold text-red-600">OneDrop</h2>
        </div>

        <nav className="space-y-2">
          <NavLink
            to="/dashboard"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800"
          >
            <FaHome /> Dashboard
          </NavLink>

          <NavLink
            to="/dashboard/profile"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800"
          >
            <FaUser /> Profile
          </NavLink>

          <NavLink
            to="/dashboard/create-request"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800"
          >
            <FaPlus /> Create Request
          </NavLink>

          <NavLink
            to="/dashboard/my-request"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800"
          >
            <FaList /> My Requests
          </NavLink>

          <div className="pt-4 border-t border-gray-700">
            <NavLink
              to="/dashboard/all-users"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800"
            >
              <FaUsers /> All Users
            </NavLink>
          </div>
        </nav>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col">
        <header className="h-16 bg-white shadow-sm flex items-center justify-between px-6">
          <span className="font-bold text-gray-700">
            Dashboard Panel
          </span>

          <button
            onClick={handleLogout}
            className="btn btn-sm bg-red-600 text-white hover:bg-red-700"
          >
            Logout
          </button>
        </header>

        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;