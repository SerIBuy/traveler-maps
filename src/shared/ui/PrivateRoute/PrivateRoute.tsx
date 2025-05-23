import { Navigate } from "react-router-dom";
import { useAuth } from "@/shared/lib/useAuth";


export const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth();

  if (loading) return <div>Загрузка...</div>;

  return user ? children : <Navigate to="/login" />;
};
