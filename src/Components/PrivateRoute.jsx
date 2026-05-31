// import { Navigate } from "react-router-dom";
// import { useContext } from "react";
// import { AuthContext } from "../Providers/AuthProvider";

// const PrivateRoute = ({ children }) => {
//   const { userData } = useContext(AuthContext);

//   if (!userData) return <Navigate to="/login" />;

//   return children;
// };

// export default PrivateRoute;


const PrivateRoute = ({ children, roles }) => {
  const { userData, loading } = useContext(AuthContext);

  if (loading) return <p>Loading...</p>; // wait till AuthContext loads

  if (!userData) return <Navigate to="/login" />;
  if (roles && !roles.includes(userData.role)) return <Navigate to="/" />;
  return children;
};
