import { motion } from "framer-motion";
import ClientsSlider from "../components/ClientsSlider";
import TimelineHanging from "../components/TimelineHanging";
import OctagonCard from "../components/OctagonCard";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const About = () => {
  return (
    <div className="relative text-white overflow-hidden">
      {/* BACKGROUND */}
      <div
        className="fixed inset-0 bg-cover bg-center animate-zoomSlow -z-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop')",
        }}
      />

      <div className="fixed inset-0 bg-black/70 -z-10"></div>

      {/* LIGHT GLOWS */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full animate-pulse"></div>

      {/* HERO */}
      <section className="min-h-[70vh] p-8 flex items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-5xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold">
            Building the <span className="text-cyan-400">Digital Future</span>
          </h1>

          <p className="mt-6 text-slate-300 text-lg">
            Softwallet Innovative Technologies helps businesses transform ideas
            into powerful digital products through cutting-edge software
            development, modern engineering practices, and scalable technology
            platforms.
          </p>
        </motion.div>
      </section>

      {/* TECHNOLOGY ECOSYSTEM */}
      <section className="py-28 text-center">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="text-4xl font-bold mb-20"
        >
          Our Technology Ecosystem
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-20">
          <TechNode icon="💡" label="Innovation" />
          <TechNode icon="⚙️" label="Engineering" />
          <TechNode icon="📊" label="Growth" />
          <TechNode icon="🌐" label="Global Impact" />
          <TechNode icon="🚀" label="Scalable Solutions" />
        </div>
      </section>

      {/* PREMIUM TIMELINE */}
      <TimelineHanging />

      {/* VISION + MISSION */}
      <section className="py-32">
        <h2 className="text-4xl font-bold text-center mb-20">Our Purpose</h2>

        <div className="grid md:grid-cols-2 gap-20 max-w-6xl mx-auto px-6">
          <OctagonCard
            title="Our Vision"
            text="Our vision is to become a globally recognized technology partner that empowers businesses through innovation and intelligent digital solutions. We aim to bridge the gap between ideas and technology by building scalable platforms, modern software ecosystems, and transformative digital experiences that enable organizations to grow faster, operate smarter, and compete globally in the digital economy."
          />

          <OctagonCard
            title="Our Mission"
            text="Our mission is to design, develop, and deliver reliable, secure, and high-performance digital solutions that help organizations solve complex challenges. Through continuous innovation, strategic collaboration, and a deep commitment to excellence, Softwallet focuses on creating technology that drives efficiency, unlocks new opportunities, and delivers long-term value to businesses worldwide."
          />
        </div>
      </section>

      {/* GLOBAL PRESENCE */}
      <section className="py-28 text-center">
        <h2 className="text-4xl font-bold mb-10">Global Presence</h2>

        <p className="max-w-3xl mx-auto text-slate-300 text-lg">
          Headquartered in Srinagar, India, Softwallet Innovative Technologies
          operates globally with clients across multiple industries including
          healthcare, finance, retail, and technology. Our distributed teams and
          modern development practices allow us to deliver world-class digital
          solutions to organizations anywhere in the world.
        </p>
      </section>

      {/* CTA */}
      <section className="py-32 flex justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-4xl w-full px-12 py-16 rounded-3xl
          bg-gradient-to-br from-[#0f2027]/90 via-[#203a43]/90 to-[#2c5364]/90
          border border-cyan-400/30
          shadow-[0_0_60px_rgba(0,255,255,0.25)]
          text-center"
        >
          <h2 className="text-4xl font-bold mb-6">
            Let’s Build the Future Together
          </h2>

          <p className="text-slate-200 mb-10">
            Partner with Softwallet Innovative Technologies to transform ideas
            into scalable digital products and innovative software solutions.
          </p>

          <button
            className="px-10 py-4 rounded-full font-semibold
          bg-gradient-to-r from-cyan-400 to-blue-500
          shadow-[0_0_30px_rgba(0,255,255,0.6)]
          hover:scale-110 transition"
          >
            Get in Touch
          </button>
        </motion.div>
      </section>

      <ClientsSlider />
    </div>
  );
};

const TechNode = ({ icon, label }) => (
  <motion.div
    whileHover={{ scale: 1.1, y: -6 }}
    className="text-center transition"
  >
    <div className="text-5xl mb-3">{icon}</div>
    <p className="text-lg text-slate-200">{label}</p>
  </motion.div>
);

export default About;
