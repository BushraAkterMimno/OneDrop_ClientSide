import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../RootLayout/RootLayout";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import Error from "../Pages/Error";
import About from "../Pages/About";
import Emergency from "../Pages/Emergency";
import Contact from "../Pages/Contact";
import Profile from "../Pages/Profile";
import Search from "../Pages/Search";
import Funding from "../Pages/Dashboard/Funding";
import DashboardLayout from "../DashboardLayout/DashboardLayout";
import MainDashboard from "../Pages/Dashboard/MainDashboard";
import CreateRequest from "../Pages/CreateRequest";
import AllUsers from "../Pages/Dashboard/AllUsers";
import MyRequest from "../Pages/Dashboard/MyRequest";
import Success from "../Pages/Success";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "profile", element: <Profile /> },
      { path: "search", element: <Search /> },
      { path: "about", element: <About /> },
      { path: "funding", element: <Funding /> },
      { path: "emergency", element: <Emergency /> },
      { path: "contact", element: <Contact /> },
      { path: "success", element: <Success /> },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <MainDashboard />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "create-request",
        element: <CreateRequest />,
      },
      {
        path: "my-request",
        element: <MyRequest />,
      },
      {
        path: "funding",
        element: <Funding />,
      },
      {
        path: "all-users",
        element: <AllUsers />,
      },
    ],
  },
]);

export default router;