import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import { Outlet } from "react-router-dom";
import "./Layout.css";
import { useContextGlobal } from "./utils/ContextProvider";

const Layout = () => {
  const { state } = useContextGlobal();

  return (
    <div className={`layout ${state.darkMode ? "dark" : ""}`}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
