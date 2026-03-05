import { motion } from "framer-motion";

const HexCard = ({ title, onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      animate={{ y: [-6, 6, -6] }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{ scale: 1.06 }}
      className="relative w-56 h-64 cursor-pointer flex items-center justify-center"
    >
      <div
        className="
        w-full h-full
        flex flex-col items-center justify-center text-center px-6
       bg-gradient-to-br from-[#0f2027]/80 via-[#203a43]/80 to-[#2c5364]/80
      backdrop-blur-xl border border-cyan-400/30
      shadow-xl group-hover:shadow-cyan-400/60
        transition duration-300
        "
        style={{
          clipPath:
            "polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)",
        }}
      >
        <h3 className="text-xl font-semibold mb-4">{title}</h3>

        <button
          className="
          px-5 py-2 rounded-lg
          border border-cyan-400
          text-cyan-300
          hover:bg-cyan-400 hover:text-black
          transition
          "
        >
          Learn More
        </button>
      </div>
    </motion.div>
  );
};

export default HexCard;
