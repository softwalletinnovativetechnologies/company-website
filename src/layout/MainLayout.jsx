import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const MainLayout = () => {
  return (
    <div className="min-h-screen bg-primary text-white">
      {/* Navbar will come here */}
      <Navbar />
      <header className="border-b border-gray-800 p-4">
        <h1 className="text-xl font-semibold text-accent">
          Softwallet Innovative Technologies
        </h1>
      </header>

      {/* Page Content */}
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
