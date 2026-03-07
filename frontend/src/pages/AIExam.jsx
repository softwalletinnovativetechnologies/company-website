import { motion } from "framer-motion";

const AIExam = () => {
  return (
    <div className="relative overflow-hidden text-white">
      {/* SAME BACKGROUND AS HOME */}

      <div
        className="fixed inset-0 bg-cover bg-center animate-zoomSlow"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b')",
        }}
      />

      <div className="fixed inset-0 bg-gradient-to-b from-[#02131a]/80 via-[#02131a]/60 to-[#02131a]/90"></div>

      <div className="relative z-10 py-32 px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="p-12 rounded-3xl
          bg-white/10 backdrop-blur-xl
          border border-white/20
          shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
        >
          <h1 className="text-5xl font-bold mb-6 text-cyan-400">
            AI Skill Assessment Exam
          </h1>

          <p className="text-slate-300 mb-8 text-lg">
            Test your Artificial Intelligence knowledge through our professional
            skill assessment exam. This test evaluates your understanding of AI
            fundamentals, machine learning concepts, automation technologies,
            and intelligent systems.
          </p>

          <div className="space-y-4 text-slate-200">
            <p>✔ 20 Multiple Choice Questions</p>
            <p>✔ Duration: 30 Minutes</p>
            <p>✔ Online AI Skill Assessment</p>
            <p>✔ Certificate after successful completion</p>
          </div>

          <button
            className="mt-10 px-10 py-4 rounded-full
            bg-gradient-to-r from-cyan-400 to-blue-500
            font-semibold
            shadow-[0_0_25px_rgba(0,255,255,0.5)]
            hover:scale-105 transition"
          >
            Start Exam
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default AIExam;
