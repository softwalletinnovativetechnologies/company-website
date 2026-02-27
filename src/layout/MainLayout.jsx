import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
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

      {/* Footer will come here */}
      <footer className="border-t border-gray-800 p-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Softwallet Innovative Technologies. All
        rights reserved.
      </footer>
    </div>
  );
};

export default MainLayout;
