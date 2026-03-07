import { motion } from "framer-motion";

const HexIndustry = ({ icon, title, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{
        scale: 1.12,
        rotateY: 12,
        rotateX: -6,
      }}
      className="group relative w-44 h-48 cursor-pointer"
      style={{
        clipPath: "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)",
      }}
    >
      {/* animated glow border */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 blur-md bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400"></div>

      {/* card */}
      <div
        className="absolute inset-[2px] flex flex-col items-center justify-center text-center
      bg-gradient-to-br from-[#1e2e35] via-[#4791a9] to-[#1b3946]
      border border-cyan-300/30
      shadow-[0_0_30px_rgba(0,255,255,0.25)]
      group-hover:shadow-[0_0_60px_rgba(0,255,255,0.9)]
      transition duration-500"
      >
        <div className="text-4xl mb-2">{icon}</div>

        <p className="font-semibold bg-gradient-to-r from-cyan-300 to-white bg-clip-text text-transparent">
          {title}
        </p>
      </div>
    </motion.div>
  );
};

export default HexIndustry;
