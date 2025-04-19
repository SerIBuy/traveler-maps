import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "@/pages/Home/HomePage";
import { LoginPage } from "@/pages/Login/LoginPage";
import { RegisterPage } from "@/pages/Register/RegisterPage";
import { PrivateRoute } from "@/shared/ui/PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <HomePage />
      </PrivateRoute>
    ),
  },
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <RegisterPage /> },
]);
