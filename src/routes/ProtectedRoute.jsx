import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getToken } from "../utils/localStorage";
import { parseJwt } from "../utils/jwt/decoder";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = getToken();

    const user = parseJwt(token);

    if (!user) {
      navigate("/login");
    }

    if (allowedRoles && !allowedRoles?.includes(user?.role ?? "")) {
      navigate("/unauthorized");
    }
  }, [navigate, allowedRoles]);

  return <>{children}</>;
};

export default ProtectedRoute;
