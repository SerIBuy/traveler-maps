import { Outlet } from "react-router-dom";
import { Header } from "@/widgets/Header/Header";
export const Layout = () => (
    <>
      <Header />
      <Outlet />
    </>
  );