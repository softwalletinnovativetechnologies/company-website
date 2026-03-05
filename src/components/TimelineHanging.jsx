import { motion } from "framer-motion";

const data = [
  {
    year: "2025",
    text: "Softwallet Innovative Technologies was founded with a vision to build modern digital solutions and empower businesses through technology.",
  },
  {
    year: "2025",
    text: "Successfully onboarded our first client and delivered our initial software solutions.",
  },
  {
    year: "2025",
    text: "Currently working on multiple innovative software projects across different industries.",
  },
  {
    year: "Future",
    text: "Expanding globally and building scalable digital products for modern businesses.",
  },
];

export default function TimelineHanging() {
  return (
    <div className="relative py-28 text-center">
      <h2 className="text-4xl font-bold mb-20">Our Journey</h2>

      {/* top line */}
      <div className="absolute left-0 right-0 top-20 h-[3px] bg-cyan-400/40"></div>

      <div className="flex justify-center gap-20 flex-wrap">
        {data.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="relative flex flex-col items-center"
          >
            {/* hanging line */}
            <div className="w-[2px] h-20 bg-cyan-400"></div>

            {/* circle */}
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-sm font-semibold shadow-xl">
              {item.year}
            </div>

            <p className="mt-6 text-slate-300 max-w-[180px] text-sm">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
