import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "/logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [aiOpen, setAiOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const aiLinks = [
    { name: "Description", path: "/ai/description" },
    { name: "Register for Exam", path: "/ai/register" },
    { name: "AI Tutorial", path: "/ai/tutorial" },
  ];

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-lg border-b border-slate-200"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="logo" className="h-12 w-auto object-contain" />

          <div>
            <h1
              className={`text-lg font-bold ${
                scrolled ? "text-slate-900" : "text-white"
              }`}
            >
              SOFTWALLET
            </h1>

            <p
              className={`text-xs ${
                scrolled ? "text-slate-600" : "text-slate-200"
              }`}
            >
              Innovative Technologies
            </p>
          </div>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8 font-medium">
          {navLinks.map((link) => (
            <NavLink key={link.name} to={link.path}>
              {({ isActive }) => (
                <span
                  className={`relative text-sm transition ${
                    isActive
                      ? "text-indigo-600"
                      : scrolled
                        ? "text-slate-800 hover:text-indigo-600"
                        : "text-white hover:text-indigo-300"
                  }`}
                >
                  {link.name}

                  {isActive && (
                    <motion.span
                      layoutId="underline"
                      className="absolute left-0 -bottom-1 w-full h-[2px] bg-indigo-500 rounded-full"
                    />
                  )}
                </span>
              )}
            </NavLink>
          ))}

          {/* PORTFOLIO EXTERNAL LINK */}
          <a
            href="https://companyindustryportfolio-phi.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-sm transition ${
              scrolled
                ? "text-slate-800 hover:text-indigo-600"
                : "text-white hover:text-indigo-300"
            }`}
          >
            Portfolio
          </a>

          {/* AI DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setAiOpen(true)}
            onMouseLeave={() => setAiOpen(false)}
          >
            <button
              className={`transition ${
                scrolled
                  ? "text-slate-800 hover:text-indigo-600"
                  : "text-white hover:text-indigo-300"
              }`}
            >
              AI
            </button>

            <AnimatePresence>
              {aiOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="absolute right-0 mt-4 w-64 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-50"
                >
                  {aiLinks.map((link) => (
                    <NavLink
                      key={link.name}
                      to={link.path}
                      className="block px-6 py-3 text-slate-800 font-semibold hover:bg-indigo-50 hover:text-indigo-600 transition"
                    >
                      {link.name}
                    </NavLink>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden text-2xl ${
            scrolled ? "text-slate-800" : "text-white"
          }`}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            className="md:hidden bg-white/95 backdrop-blur-xl shadow-lg"
          >
            <div className="flex flex-col items-center gap-6 py-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className="text-slate-900 hover:text-indigo-600"
                >
                  {link.name}
                </NavLink>
              ))}

              {/* PORTFOLIO MOBILE */}
              <a
                href="https://companyindustryportfolio-phi.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-900 hover:text-indigo-600"
              >
                Portfolio
              </a>

              {aiLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className="text-slate-900 hover:text-indigo-600"
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
