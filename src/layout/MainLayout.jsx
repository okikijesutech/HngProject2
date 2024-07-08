import { Outlet, useLocation } from "react-router-dom";
import Promotion from "../components/Promotion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

const MainLayout = () => {
  const location = useLocation();

  const isCheckoutPage = location.pathname === "/checkout";
  const isDesktopView = () => window.innerWidth > 430;

  return (
    <>
      <ScrollToTop />
      <div className='flex flex-col-reverse md:flex-col'>
        <Promotion />
        <Navbar />
      </div>
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
