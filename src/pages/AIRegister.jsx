import { motion } from "framer-motion";

const AIRegister = () => {
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

      <div className="relative z-10 py-32 px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="p-12 rounded-3xl
          bg-white/10 backdrop-blur-xl
          border border-white/20
          shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
        >
          <h1 className="text-5xl font-bold mb-10 text-cyan-400">
            Register for AI Exam
          </h1>

          <form
            action="https://formsubmit.co/info@softwalletinnovativetechnologies.cloud"
            method="POST"
            className="space-y-6"
          >
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="w-full p-4 rounded-xl bg-white/20 border border-white/30"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="w-full p-4 rounded-xl bg-white/20 border border-white/30"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              className="w-full p-4 rounded-xl bg-white/20 border border-white/30"
            />

            <input
              type="text"
              name="qualification"
              placeholder="Qualification"
              className="w-full p-4 rounded-xl bg-white/20 border border-white/30"
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Tell us about your interest in AI"
              className="w-full p-4 rounded-xl bg-white/20 border border-white/30"
            />

            <button
              type="submit"
              className="px-10 py-4 rounded-full
              bg-gradient-to-r from-cyan-400 to-blue-500
              font-semibold
              shadow-[0_0_25px_rgba(0,255,255,0.5)]
              hover:scale-105 transition"
            >
              Pay 300 & Register Now
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default AIRegister;
