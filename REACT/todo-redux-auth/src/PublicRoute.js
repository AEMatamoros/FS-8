import { useAuth } from "./hooks/useAuth";
import { Navigate } from "react-router-dom";

export const PublicRoute = ({ children, redirectTo = "/home" }) => {
  const { isLoggedIn } = useAuth();
  return !isLoggedIn ? children : <Navigate to={redirectTo} />;
};
