import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative z-20 mt-24">
      {/* Glass Container */}
      <div className="backdrop-blur-3xl bg-white/10 border-t border-white/20 shadow-[0_-10px_40px_rgba(0,0,0,0.25)]">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center">
          {/* Company Name */}
          <h2 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-wide">
            Softwallet Innovative Technologies
          </h2>

          {/* Tagline */}
          <p className="text-slate-300 text-sm md:text-base mb-6">
            Delivering innovative software, web, and digital solutions.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 text-lg">
            <a
              href="https://www.facebook.com/profile.php?id=61585776410900"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-full hover:bg-indigo-500/30 hover:scale-110 transition duration-300"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://instagram.com/YOUR_COMPANY_PAGE"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-full hover:bg-pink-500/30 hover:scale-110 transition duration-300"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.linkedin.com/in/softwallet-innovative-technologies-private-limited-9159243a8/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-full hover:bg-blue-500/30 hover:scale-110 transition duration-300"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://wa.me/919596393658"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-full hover:bg-green-500/30 hover:scale-110 transition duration-300"
            >
              <FaWhatsapp />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-slate-400 mt-6 text-xs tracking-wide">
            © {new Date().getFullYear()} Softwallet Innovative Technologies. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
