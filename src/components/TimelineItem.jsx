import { motion } from "framer-motion";

const TimelineItem = ({ title, text, side }) => {
  const isLeft = side === "left";

  return (
    <div
      className={`relative flex ${isLeft ? "justify-start" : "justify-end"}`}
    >
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-[42%]"
      >
        <div
          className="relative overflow-hidden
bg-gradient-to-br from-[#0f2027]/90 via-[#203a43]/90 to-[#2c5364]/90
backdrop-blur-xl
border border-cyan-400/40
rounded-2xl p-7
shadow-[0_0_35px_rgba(0,255,255,0.25)]
hover:shadow-[0_0_60px_rgba(0,255,255,0.7)]
transition duration-500"
        >
          <h3
            className="text-xl font-semibold mb-2
bg-gradient-to-r from-cyan-300 via-cyan-200 to-white
bg-clip-text text-transparent"
          >
            {title}
          </h3>

          <p className="text-slate-200 text-sm leading-relaxed">{text}</p>
        </div>
      </motion.div>

      {/* DOT */}

      <div
        className="absolute left-1/2 top-8
w-4 h-4 rounded-full
bg-gradient-to-br from-[#0f2027]/80 via-[#203a43]/80 to-[#2c5364]/80
      backdrop-blur-xl border border-cyan-400/30
      shadow-xl group-hover:shadow-cyan-400/60
-translate-x-1/2"
      ></div>
    </div>
  );
};

export default TimelineItem;
