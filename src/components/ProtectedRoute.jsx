/* eslint-disable react/prop-types */
import { useContext } from "react";
import UserContext from "../context/userContext";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ redirectPath = "/", children }) => {
  const { user } = useContext(UserContext);
  if (!user) {
    return <Navigate to={redirectPath} />;
  }
  return children ? children : <Outlet />;
};

export default ProtectedRoute;
