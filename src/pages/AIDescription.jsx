import { motion } from "framer-motion";

const sections = [
  {
    title: "About the AI Program",
    text: "Softwallet Innovative Technologies provides a comprehensive Artificial Intelligence learning program designed to introduce students and professionals to modern AI technologies. The program focuses on practical understanding of Artificial Intelligence, Machine Learning, and data-driven decision making used in modern industries.",
  },

  {
    title: "What You Will Learn",
    text: "Participants will gain knowledge about AI fundamentals, machine learning concepts, neural networks, and real-world applications of intelligent systems. The program explains how AI systems are designed, trained, and used to solve complex problems.",
  },

  {
    title: "Industry Applications",
    text: "Artificial Intelligence is transforming industries including healthcare, finance, manufacturing, transportation, and digital services. Through this program, learners understand how AI technologies are applied in real-world business solutions.",
  },

  {
    title: "Skills Covered",
    text: "The course covers essential AI concepts including Machine Learning basics, neural networks, natural language processing, computer vision, data analysis, and algorithmic problem solving.",
  },

  {
    title: "Career Opportunities",
    text: "Artificial Intelligence is one of the fastest-growing technology fields. Learning AI opens opportunities in roles such as AI Developer, Machine Learning Engineer, Data Scientist, AI Researcher, and Intelligent Systems Engineer.",
  },

  {
    title: "AI Certification Exam",
    text: "After completing the AI tutorials and learning materials, participants can register for the AI certification exam conducted by Softwallet Innovative Technologies. The exam evaluates understanding of AI concepts and practical knowledge.",
  },
];

const AIDescription = () => {
  return (
    <div className="relative text-white overflow-hidden">
      {/* same background as home */}
      <div
        className="fixed inset-0 bg-cover bg-center animate-zoomSlow"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b')",
        }}
      />

      <div className="fixed inset-0 bg-gradient-to-b from-[#02131a]/90 via-[#02131a]/70 to-[#02131a]/90" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32">
        {/* PAGE TITLE */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl font-bold text-cyan-400 mb-6">
            AI Program Description
          </h1>

          <p className="text-slate-300 max-w-3xl mx-auto text-lg">
            Explore the fundamentals of Artificial Intelligence and understand
            how intelligent technologies are transforming the modern digital
            world.
          </p>
        </motion.div>

        {/* CONTENT SECTIONS */}

        <div className="grid md:grid-cols-2 gap-10">
          {sections.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.04 }}
              className="
bg-white/10
backdrop-blur-xl
border border-cyan-400/40
rounded-3xl
p-10
shadow-[0_0_25px_rgba(0,255,255,0.25)]
hover:shadow-[0_0_45px_rgba(0,255,255,0.5)]
transition
"
            >
              <h3 className="text-2xl font-semibold text-cyan-300 mb-4">
                {item.title}
              </h3>

              <p className="text-slate-300 leading-relaxed text-sm">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AIDescription;
