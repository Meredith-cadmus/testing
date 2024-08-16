import { Outlet } from "react-router-dom";
import NavLayout from "./nav-layout";

const AppLayout = () => {
  return (
    <div>
      <NavLayout />
      <Outlet />
    </div>
  );
};

export default AppLayout;
