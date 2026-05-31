import React, { useState, useContext, useEffect } from "react";
import MyLink from "./MyLink";
import Logo from "../assets/logo.png";
import { AuthContext } from "../Providers/AuthProvider";
import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const handleThemeChange = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const handleLogout = async () => {
    await logoutUser();
    navigate("/login");
  };

  const navLinks = (
    <>
      <li><MyLink to="/">Home</MyLink></li>
      <li><MyLink to="/search">Search</MyLink></li>
      <li><MyLink to="/emergency">Donation Requests</MyLink></li>
      <li><MyLink to="/about">About</MyLink></li>
      <li><MyLink to="/funding">Funding</MyLink></li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-md fixed top-0 z-50 px-4 md:px-8">
      <div className="navbar-start">
        {/* Mobile Menu */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden p-0 mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-52">
            {navLinks}
          </ul>
        </div>
        <Link to="/" className="flex items-center gap-2">
          <img src={Logo} alt="OneDrop Logo" className="w-8 h-10 object-contain"/>
          <span className="text-xl font-bold text-red-600 hidden sm:block">OneDrop</span>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          {navLinks}
        </ul>
      </div>

      <div className="navbar-end gap-3">
        {/* Theme Toggle */}
        <label className="swap swap-rotate mr-2">
          <input type="checkbox" checked={theme === "dark"} onChange={handleThemeChange} />
          <svg className="swap-off h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
          <svg className="swap-on h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" /></svg>
        </label>

        {!user ? (
          <div className="flex gap-3 items-center">
            <Link 
              to="/login" 
              className="btn btn-sm btn-outline border-red-600 text-red-600 hover:bg-red-600 hover:border-red-600 hover:text-white px-6">Login
            </Link>

            <Link 
              to="/register" 
              className="btn btn-sm bg-red-600 hover:bg-red-700 text-white border-none px-6">Register
            </Link>
          </div>
        ) : (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar border-2 border-red-500">
              <div className="w-10 rounded-full">
                <img src={user.photoURL || "https://via.placeholder.com/40"} alt="User" />
              </div>
            </label>
            <ul tabIndex={0} className="mt-3 z-1 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 border border-gray-200">
              <li className="font-bold text-center py-2 border-b mb-2">{user.displayName || 'User'}</li>
              <li><Link to="/dashboard">Dashboard</Link></li>
              <li><button onClick={handleLogout} className="text-red-600 font-semibold">Logout</button></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;