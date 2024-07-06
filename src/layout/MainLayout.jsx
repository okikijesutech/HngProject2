import { Outlet } from "react-router-dom";
import Promotion from "../components/Promotion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <>
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
