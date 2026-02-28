import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "/logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/60 backdrop-blur-xl shadow-md border-b border-white/20"
          : "bg-white/10 backdrop-blur-xl border-b border-white/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* LEFT: LOGO + TEXT */}
        <NavLink to="/" className="flex items-center gap-4">
          <div className="h-24 w-24 flex items-center justify-center">
            <img
              src={logo}
              alt="Company Logo"
              className="h-full w-full object-contain"
            />
          </div>

          <div className="leading-tight">
            <h1 className="text-lg font-bold text-white tracking-wide">
              SOFTWALLET
            </h1>
            <p className="text-xs text-white/80">Innovative Technologies</p>
          </div>
        </NavLink>

        {/* RIGHT SIDE NAV */}
        <div className="flex items-center gap-10">
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink key={link.name} to={link.path}>
                {({ isActive }) => (
                  <span className="relative font-medium text-white hover:text-indigo-300 transition">
                    {link.name}
                    {isActive && (
                      <motion.span
                        layoutId="underline"
                        className="absolute left-0 -bottom-1 w-full h-[2px] bg-indigo-400 rounded-full"
                      />
                    )}
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          {/* CTA BUTTON */}
          <div className="hidden md:block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-6 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold shadow-md"
            >
              Get Started
            </motion.button>
          </div>

          {/* MOBILE MENU ICON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-2xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            className="md:hidden bg-white shadow-xl border-t border-slate-200"
          >
            <div className="flex flex-col items-center gap-6 py-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className="text-slate-700 font-medium hover:text-indigo-600 transition"
                >
                  {link.name}
                </NavLink>
              ))}

              <button className="px-6 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-md">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
