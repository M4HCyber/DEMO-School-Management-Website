import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function AppLayout() {
  return (
    <div className="grid grid-cols-1">
      <main>
        <Header />
        <Outlet />
        <Footer />
      </main>
    </div>
  );
}

export default AppLayout;
