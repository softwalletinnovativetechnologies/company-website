import {
  FaFacebookF,
  FaEnvelope,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative mt-16 text-white">
      {/* glow top border */}
      <div className="h-[2px] w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 opacity-70"></div>

      <div className="bg-[#0f2027]/80 backdrop-blur-xl border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-3 flex flex-col md:flex-row items-center justify-between gap-3">
          {/* brand */}
          <p
            className="text-sm font-semibold
          bg-gradient-to-r from-cyan-300 to-white
          bg-clip-text text-transparent"
          >
            Softwallet Innovative Technologies
          </p>

          {/* social icons */}
          <div className="flex gap-3 text-sm">
            <SocialIcon link="mailto:info@softwalletinnovativetechnologies.cloud">
              <FaEnvelope />
            </SocialIcon>
            <SocialIcon link="https://www.facebook.com/profile.php?id=61585776410900">
              <FaFacebookF />
            </SocialIcon>

            <SocialIcon link="https://instagram.com/YOUR_COMPANY_PAGE">
              <FaInstagram />
            </SocialIcon>

            <SocialIcon link="https://www.linkedin.com/in/softwallet-innovative-technologies-private-limited-9159243a8/">
              <FaLinkedinIn />
            </SocialIcon>

            <SocialIcon link="https://wa.me/917599741491">
              <FaWhatsapp />
            </SocialIcon>
          </div>

          {/* copyright */}
          <p className="text-xs text-slate-300">
            © {new Date().getFullYear()} Softwallet
          </p>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ children, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-8 h-8 flex items-center justify-center rounded-full
      bg-white/10 border border-white/20
      hover:bg-cyan-500 hover:scale-110
      transition duration-300"
    >
      {children}
    </a>
  );
};

export default Footer;
