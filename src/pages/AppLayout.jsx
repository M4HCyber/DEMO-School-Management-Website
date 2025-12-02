import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function AppLayout() {
  return (
    <div className="grid grid-cols-1">
      <main>
        <Header />
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
