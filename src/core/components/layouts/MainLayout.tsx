import Navigation from "../../../components/Navigation";
import Logout from "../../../components/Logout";
import {Outlet} from "react-router-dom";

export const MainLayout: React.FC = () => {
  return (
    <>
      <Navigation/>
      <main className="content">
        <Logout />
        <Outlet />
      </main>
    </>
  )
}
