import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-black/40 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link to="/" className="text-2xl font-bold tracking-wide text-accent">
          Softwallet
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-accent" : "hover:text-accent transition"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-accent" : "hover:text-accent transition"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? "text-accent" : "hover:text-accent transition"
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-accent" : "hover:text-accent transition"
            }
          >
            Contact
          </NavLink>
        </div>

        {/* CTA Button */}
        <button className="bg-accent text-black px-5 py-2 rounded-full font-semibold hover:opacity-90 transition">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
