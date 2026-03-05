import { motion } from "framer-motion";

export default function OctagonCard({ title, text }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative p-12 text-center text-white
      bg-white/10 backdrop-blur-xl border border-white/20
      shadow-xl transition duration-300"
      style={{
        clipPath:
          "polygon(30% 0%,70% 0%,100% 30%,100% 70%,70% 100%,30% 100%,0% 70%,0% 30%)",
      }}
    >
      <div className="px-4">
        <h3 className="text-2xl font-bold mb-4 text-cyan-300">{title}</h3>

        <p className="text-slate-300 leading-relaxed text-sm md:text-base">
          {text}
        </p>
      </div>
    </motion.div>
  );
}
