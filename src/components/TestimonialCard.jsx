import { motion } from "framer-motion";

const TestimonialCard = ({ name, role, text }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.06, rotateY: 6 }}
      className="min-w-[260px] max-w-[260px] p-6 rounded-2xl
      bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364]
      border border-cyan-400/30
      shadow-[0_0_20px_rgba(0,255,255,0.25)]
      hover:shadow-[0_0_50px_rgba(0,255,255,0.8)]
      transition duration-500 backdrop-blur-xl flex flex-col items-center text-center"
    >
      {/* avatar */}
      <div className="w-14 h-14 rounded-full mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center text-lg font-bold">
        {name.charAt(0)}
      </div>

      {/* rating */}
      <div className="text-yellow-400 mb-3">★★★★★</div>

      {/* text */}
      <p className="text-slate-200 text-sm mb-4 leading-relaxed">"{text}"</p>

      {/* name */}
      <h4
        className="font-semibold
      bg-gradient-to-r from-cyan-300 to-white
      bg-clip-text text-transparent"
      >
        {name}
      </h4>

      {/* role */}
      <p className="text-xs text-slate-300">{role}</p>
    </motion.div>
  );
};

export default TestimonialCard;
