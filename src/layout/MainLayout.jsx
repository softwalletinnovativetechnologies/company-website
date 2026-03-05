import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const MainLayout = () => {
  return (
    <div className="min-h-screen text-white">
      {/* Navbar will come here */}
      <Navbar />
      <header className="border-b border-gray-800 p-4">
        
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
